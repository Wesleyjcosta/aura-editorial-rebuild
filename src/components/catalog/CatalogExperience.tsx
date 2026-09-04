import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { CatalogControls } from "./CatalogControls";
import { CatalogProductCard } from "./CatalogProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { ProductSheet } from "./ProductSheet";
import { catalogoQuery, categoriaPublica, precoFinal, type Produto } from "@/lib/catalog";

const PRODUCTS_PER_PAGE = 12;

function normalizar(value: string | null | undefined) {
  return (value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function CatalogExperience({ onCartOpen }: { onCartOpen: () => void }) {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [pagina, setPagina] = useState(1);
  const [ordem, setOrdem] = useState("nome");
  const [selecionado, setSelecionado] = useState<Produto | null>(null);
  const { data = [], isLoading, isError, isFetching, refetch } = useQuery(catalogoQuery);

  const categorias = useMemo(() => {
    const valores = Array.from(
      new Set(data.map((produto) => categoriaPublica(produto.categoria)).filter(Boolean)),
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
    return [{ label: "Todas", value: "" }, ...valores.map((value) => ({ label: value, value }))];
  }, [data]);

  const produtos = useMemo(() => {
    const termo = normalizar(busca.trim());
    const filtrados = data.filter((produto) => {
      const correspondeCategoria = !categoria || categoriaPublica(produto.categoria) === categoria;
      const texto = normalizar(
        [produto.nome, produto.codigo, produto.referencia, produto.material].join(" "),
      );
      return correspondeCategoria && (!termo || texto.includes(termo));
    });

    return filtrados.sort((a, b) => {
      if (ordem === "preco-asc") return precoFinal(a) - precoFinal(b);
      if (ordem === "preco-desc") return precoFinal(b) - precoFinal(a);
      if (ordem === "recentes") {
        const dataB = Date.parse(b.atualizado_em || "") || 0;
        const dataA = Date.parse(a.atualizado_em || "") || 0;
        return dataB - dataA;
      }
      return a.nome.localeCompare(b.nome, "pt-BR");
    });
  }, [busca, categoria, data, ordem]);

  const totalPaginas = Math.max(1, Math.ceil(produtos.length / PRODUCTS_PER_PAGE));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const produtosDaPagina = produtos.slice(
    (paginaAtual - 1) * PRODUCTS_PER_PAGE,
    paginaAtual * PRODUCTS_PER_PAGE,
  );

  const mudarPagina = (proximaPagina: number) => {
    setPagina(Math.min(totalPaginas, Math.max(1, proximaPagina)));
    document.querySelector("#catalogo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="catalogo"
      className="scroll-mt-28 border-t border-line bg-background pt-14 pb-24 sm:py-20"
    >
      <div className="aura-container">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-dark">Disponíveis na AURA</p>
          <h2 className="display mt-3 text-[38px] text-ink sm:text-[52px]">
            Produtos disponíveis agora.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-ink-soft sm:text-base">
            Esta vitrine mostra os produtos reais do estoque. Escolha suas peças e reserve para
            retirada na loja.
          </p>
        </div>

        <CatalogControls
          busca={busca}
          onBuscaChange={(value) => {
            setBusca(value);
            setPagina(1);
          }}
          categoria={categoria}
          onCategoriaChange={(value) => {
            setCategoria(value);
            setPagina(1);
          }}
          categorias={categorias}
          ordem={ordem}
          onOrdemChange={(value) => {
            setOrdem(value);
            setPagina(1);
          }}
        />

        {isLoading ? (
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-7">
            {Array.from({ length: 8 }, (_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : isError ? (
          <div className="mt-12 border-y border-line py-14 text-center">
            <h3 className="display text-2xl text-ink">Catálogo temporariamente indisponível</h3>
            <p className="mt-2 text-sm text-ink-muted">
              A apresentação da AURA continua disponível normalmente.
            </p>
            <button
              type="button"
              onClick={() => void refetch()}
              disabled={isFetching}
              className="mt-6 border-b border-ink pb-1 text-[11px] font-medium uppercase text-ink"
            >
              {isFetching ? "Tentando novamente" : "Tentar novamente"}
            </button>
          </div>
        ) : produtos.length ? (
          <>
            <div className="mt-7 flex items-center justify-between border-b border-line-light pb-3 text-[11px] text-ink-muted">
              <span>{produtos.length} produtos encontrados</span>
              <span>
                Página {paginaAtual} de {totalPaginas}
              </span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 sm:gap-y-11 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-12">
              {produtosDaPagina.map((produto) => (
                <CatalogProductCard
                  key={produto.id_publico}
                  produto={produto}
                  onOpen={setSelecionado}
                />
              ))}
            </div>

            {totalPaginas > 1 ? (
              <nav
                aria-label="Paginação do catálogo"
                className="mt-12 flex items-center justify-center gap-3 border-t border-line pt-7"
              >
                <button
                  type="button"
                  onClick={() => mudarPagina(paginaAtual - 1)}
                  disabled={paginaAtual === 1}
                  aria-label="Página anterior"
                  title="Página anterior"
                  className="grid h-11 w-11 place-items-center border border-line text-ink transition-colors hover:border-ink disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                </button>

                <span className="min-w-28 text-center text-xs font-medium text-ink sm:hidden">
                  Página {paginaAtual} de {totalPaginas}
                </span>

                <div className="hidden items-center gap-1 sm:flex">
                  {Array.from({ length: totalPaginas }, (_, index) => index + 1).map((numero) => {
                    const visivel =
                      numero === 1 ||
                      numero === totalPaginas ||
                      Math.abs(numero - paginaAtual) <= 1;
                    const separador =
                      (numero === 2 && paginaAtual > 3) ||
                      (numero === totalPaginas - 1 && paginaAtual < totalPaginas - 2);
                    if (separador)
                      return (
                        <span key={numero} className="px-1 text-ink-muted">
                          …
                        </span>
                      );
                    if (!visivel) return null;
                    return (
                      <button
                        key={numero}
                        type="button"
                        onClick={() => mudarPagina(numero)}
                        aria-label={`Ir para a página ${numero}`}
                        aria-current={numero === paginaAtual ? "page" : undefined}
                        className={`h-10 min-w-10 px-2 text-xs transition-colors ${
                          numero === paginaAtual
                            ? "bg-ink text-background"
                            : "text-ink-muted hover:text-ink"
                        }`}
                      >
                        {numero}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => mudarPagina(paginaAtual + 1)}
                  disabled={paginaAtual === totalPaginas}
                  aria-label="Próxima página"
                  title="Próxima página"
                  className="grid h-11 w-11 place-items-center border border-line text-ink transition-colors hover:border-ink disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </nav>
            ) : null}
          </>
        ) : (
          <div className="mt-12 border-y border-line py-14 text-center">
            <h3 className="display text-2xl text-ink">Nenhuma peça encontrada</h3>
            <p className="mt-2 text-sm text-ink-muted">
              Tente outro nome, código, material ou categoria.
            </p>
          </div>
        )}
      </div>

      <ProductSheet
        produto={selecionado}
        onClose={() => setSelecionado(null)}
        onCartOpen={onCartOpen}
      />
    </section>
  );
}
