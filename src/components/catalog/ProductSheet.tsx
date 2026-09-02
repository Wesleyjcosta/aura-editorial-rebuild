import { useEffect, useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { toast } from "sonner";
import { brl, categoriaPublica, estoqueDisponivel, precoFinal, type Produto } from "@/lib/catalog";
import { useCart } from "@/lib/cart";

export function ProductSheet({
  produto,
  onClose,
  onCartOpen,
}: {
  produto: Produto | null;
  onClose: () => void;
  onCartOpen: () => void;
}) {
  const { add } = useCart();
  const [qtd, setQtd] = useState(1);

  useEffect(() => {
    if (produto) setQtd(1);
  }, [produto]);

  useEffect(() => {
    if (!produto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [produto, onClose]);

  if (!produto) return null;

  const estoque = estoqueDisponivel(produto);
  const preco = precoFinal(produto);
  const promo = produto.preco_promocional != null && produto.preco != null;
  const categoria = categoriaPublica(produto.categoria);
  const imagem = produto.imagem_url || produto.imagem_thumb_url || "";

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:px-6">
      <button
        type="button"
        aria-label="Fechar detalhes"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/35"
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-label={produto.nome}
        className="relative max-h-[94dvh] w-full max-w-[920px] overflow-hidden rounded-t-[8px] bg-surface sm:max-h-[88vh] sm:rounded-[8px]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-[2px] bg-background/90 text-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </button>

        <div className="max-h-[94dvh] overflow-y-auto sm:grid sm:max-h-[88vh] sm:grid-cols-[1.08fr_0.92fr] sm:overflow-hidden">
          <div className="aspect-[4/3] w-full bg-muted/25 sm:aspect-auto sm:min-h-[560px]">
            {imagem ? (
              <img
                src={imagem}
                alt={produto.nome}
                className="h-full w-full object-contain p-3 sm:p-6"
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center font-display text-2xl tracking-[0.18em] text-muted-foreground">
                AURA
              </span>
            )}
          </div>

          <div className="flex min-h-0 flex-col bg-surface sm:min-h-[560px] sm:overflow-y-auto">
            <div className="space-y-5 px-6 pb-7 pt-8 sm:px-9 sm:pb-8 sm:pt-12">
              <div className="space-y-3">
                {categoria && (
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gold-strong">
                    {categoria}
                  </p>
                )}

                <h2 className="font-display text-2xl leading-[1.08] text-foreground sm:text-3xl">
                  {produto.nome}
                </h2>

                {produto.codigo && (
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    Cód. {produto.codigo}
                  </p>
                )}

                <p className="flex flex-wrap items-baseline gap-3 pt-1">
                  <span className="text-2xl font-semibold tabular-nums text-gold-strong sm:text-[30px]">
                    {brl(preco)}
                  </span>
                  {promo && (
                    <span className="text-sm tabular-nums text-muted-foreground line-through">
                      {brl(Number(produto.preco))}
                    </span>
                  )}
                </p>

                <p className="text-xs font-medium text-muted-foreground">
                  {estoque > 0 ? `Disponível: ${estoque} un.` : "Indisponível no momento"}
                </p>
              </div>

              {produto.descricao?.trim() && (
                <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
                  {produto.descricao}
                </p>
              )}

              <dl className="grid gap-4 border-t border-border pt-5 text-sm sm:grid-cols-2">
                {produto.material?.trim() && (
                  <div>
                    <dt className="text-xs text-muted-foreground">Material</dt>
                    <dd className="mt-1 text-foreground">{produto.material}</dd>
                  </div>
                )}
                {produto.referencia?.trim() && (
                  <div>
                    <dt className="text-xs text-muted-foreground">Referência</dt>
                    <dd className="mt-1 text-foreground">{produto.referencia}</dd>
                  </div>
                )}
              </dl>
            </div>

            <footer className="mt-auto border-t border-border bg-surface px-6 pb-7 pt-5 sm:px-9 sm:pb-8">
              {estoque <= 0 ? (
                <p className="py-3 text-sm font-medium text-muted-foreground">
                  Peça esgotada no momento.
                </p>
              ) : (
                <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                  <div className="flex h-12 items-center justify-between rounded-[2px] border border-border sm:w-[132px]">
                    <button
                      type="button"
                      aria-label="Diminuir quantidade"
                      onClick={() => setQtd((q) => Math.max(1, q - 1))}
                      disabled={qtd <= 1}
                      className="flex h-12 w-12 items-center justify-center text-foreground transition-colors hover:bg-accent disabled:opacity-40"
                    >
                      <Minus className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </button>
                    <span className="min-w-6 text-center text-sm font-semibold tabular-nums">
                      {qtd}
                    </span>
                    <button
                      type="button"
                      aria-label="Aumentar quantidade"
                      disabled={qtd >= estoque}
                      onClick={() => setQtd((q) => Math.min(estoque, q + 1))}
                      className="flex h-12 w-12 items-center justify-center text-foreground transition-colors hover:bg-accent disabled:opacity-40"
                    >
                      <Plus className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      add(produto, qtd);
                      onClose();
                      toast.success("Produto adicionado à sacola", {
                        description: `${qtd} ${qtd === 1 ? "unidade" : "unidades"} de ${produto.nome}.`,
                        action: { label: "Ver sacola", onClick: onCartOpen },
                      });
                    }}
                    className="h-12 flex-1 rounded-[2px] bg-foreground px-5 text-xs font-semibold uppercase tracking-[0.1em] text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    Adicionar à sacola
                  </button>
                </div>
              )}
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}
