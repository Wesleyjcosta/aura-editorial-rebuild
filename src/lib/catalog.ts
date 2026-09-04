import { z } from "zod";

export type Produto = {
  id_publico: string;
  codigo: string | null;
  referencia: string | null;
  nome: string;
  categoria: string | null;
  material: string | null;
  descricao: string | null;
  preco: number | null;
  preco_promocional: number | null;
  estoque: number | null;
  disponivel: boolean | null;
  destaque: boolean | null;
  imagem_url: string | null;
  imagem_thumb_url: string | null;
  atualizado_em: string | null;
};

const produtoSchema = z.object({
  id_publico: z.string().min(1),
  codigo: z.string().nullable().default(null),
  referencia: z.string().nullable().default(null),
  nome: z.string().min(1),
  categoria: z.string().nullable().default(null),
  material: z.string().nullable().default(null),
  descricao: z.string().nullable().default(null),
  preco: z.number().finite().nonnegative().nullable().default(null),
  preco_promocional: z.number().finite().nonnegative().nullable().default(null),
  estoque: z.number().finite().nullable().default(null),
  disponivel: z.boolean().nullable().default(null),
  destaque: z.boolean().nullable().default(null),
  imagem_url: z.string().nullable().default(null),
  imagem_thumb_url: z.string().nullable().default(null),
  atualizado_em: z.string().nullable().default(null),
});

const produtoJoiasSchema = produtoSchema.omit({ id_publico: true }).extend({
  id: z.string().min(1),
  imagem: z.string().nullable().default(null),
});

export function normalizarCatalogo(value: unknown): Produto[] {
  // O publicador antigo envia uma lista; o Joias Control envia um snapshot.
  if (Array.isArray(value)) return z.array(produtoSchema).parse(value);
  const snapshot = z.object({ produtos: z.array(produtoJoiasSchema) }).parse(value);
  return snapshot.produtos.map(({ id, imagem, ...produto }) => ({
    ...produto,
    id_publico: id,
    imagem_url: imagem || produto.imagem_url,
    imagem_thumb_url: produto.imagem_thumb_url || imagem || produto.imagem_url,
  }));
}

export async function fetchCatalogo(): Promise<Produto[]> {
  const res = await fetch("/catalogo.json", {
    headers: {
      Accept: "application/json",
    },
  });
  if (!res.ok) throw new Error("Não foi possível carregar o catálogo.");
  return normalizarCatalogo(await res.json());
}
export const catalogoQuery = {
  queryKey: ["catalogo_publico"],
  queryFn: fetchCatalogo,
  staleTime: 60_000,
};

export function precoFinal(p: Produto): number {
  return Number(p.preco_promocional ?? p.preco ?? 0);
}

export function estoqueDisponivel(p: Produto): number {
  if (p.disponivel === false) return 0;
  return Math.max(0, Number(p.estoque ?? 0));
}

export function imagemCard(p: Produto): string | null {
  return p.imagem_thumb_url || p.imagem_url || null;
}

export function brl(v: number): string {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function categoriaPublica(value: string | null | undefined): string {
  const normalized = (value || "")
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  if (!normalized) return "";
  if (normalized === "bolsa" || normalized === "bolsas") return "Bolsas";
  if (normalized === "mochila" || normalized === "mochilas") return "Mochilas";
  if (["semijoia", "semijoias", "semojoias"].includes(normalized)) return "Semijoias";
  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
}
