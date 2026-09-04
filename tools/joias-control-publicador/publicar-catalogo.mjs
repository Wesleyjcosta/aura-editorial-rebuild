import { DatabaseSync } from "node:sqlite";
import { copyFile, mkdir, rm, writeFile } from "node:fs/promises";
import { basename, dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const dataDir = resolve(
  process.env.JOIAS_CONTROL_DATA_DIR ||
    join(process.env.LOCALAPPDATA || "", "JOIAS_CONTROL", "local-data"),
);
const databasePath = join(dataDir, "joias-control.db");
const uploadsDir = join(dataDir, "uploads");
const outputDir = join(siteRoot, "public", "catalogo", "produtos");
const outputJson = join(siteRoot, "public", "catalogo.json");

const database = new DatabaseSync(databasePath, { readOnly: true });
const columns = new Set(
  database
    .prepare("PRAGMA table_info(produtos)")
    .all()
    .map((column) => column.name),
);
const hasVisibility = columns.has("exibir_catalogo");

const products = database
  .prepare(
    `
    SELECT *
    FROM produtos
    WHERE estoque > 0 ${hasVisibility ? "AND exibir_catalogo = 1" : ""}
    ORDER BY nome COLLATE NOCASE
  `,
  )
  .all();
database.close();

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

const catalog = [];
for (const product of products) {
  let imageUrl = null;
  if (product.foto_url) {
    const sourceName = basename(new URL(product.foto_url, "http://localhost").pathname);
    const extension = extname(sourceName).toLowerCase() || ".jpg";
    const publicName = `${String(product.codigo || product.id).replace(/[^a-zA-Z0-9_-]/g, "-")}${extension}`;
    try {
      await copyFile(join(uploadsDir, sourceName), join(outputDir, publicName));
      imageUrl = `/catalogo/produtos/${publicName}`;
    } catch {
      console.warn(`Foto não encontrada para ${product.nome}: ${sourceName}`);
    }
  }

  const price = Number(product.preco_venda || 0);
  const discount = product.promocao_ativa ? Number(product.desconto_promocional || 0) : 0;
  catalog.push({
    id_publico: String(product.id),
    codigo: product.codigo || null,
    referencia: product.referencia || null,
    nome: product.nome,
    categoria: product.categoria || null,
    material: product.material || null,
    descricao: columns.has("descricao_catalogo") ? product.descricao_catalogo || null : null,
    preco: price,
    preco_promocional: discount > 0 ? Number((price * (1 - discount / 100)).toFixed(2)) : null,
    estoque: Number(product.estoque || 0),
    disponivel: Number(product.estoque || 0) > 0,
    destaque: columns.has("destaque_catalogo") ? Boolean(product.destaque_catalogo) : false,
    imagem_url: imageUrl,
    imagem_thumb_url: imageUrl,
    atualizado_em: product.updated_at || new Date().toISOString(),
  });
}

await writeFile(outputJson, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
console.log(
  `Catálogo gerado com ${catalog.length} produto(s).${
    hasVisibility
      ? ""
      : " A versão atual não possui o campo exibir_catalogo; foram incluídos os itens com estoque."
  }`,
);
