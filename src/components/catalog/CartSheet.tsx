import { useEffect, useState } from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { STORE_ADDRESS, STORE_PICKUP } from "@/config/store";
import { useCart } from "@/lib/cart";
import { brl } from "@/lib/catalog";
import { buildWhatsappUrl } from "@/lib/whatsapp";

export function CartSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, count, total, setQtd, remove, clear } = useCart();
  const [nome, setNome] = useState("");
  const [observacao, setObservacao] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const enviar = () => {
    if (items.length === 0 || !nome.trim()) return;
    window.open(buildWhatsappUrl(items, total, { nome, observacao }), "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:px-6">
      <button
        type="button"
        aria-label="Fechar sacola"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/35"
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-label="Minha sacola"
        className="relative max-h-[94dvh] w-full max-w-[900px] overflow-y-auto rounded-t-[8px] bg-surface sm:max-h-[88vh] sm:rounded-[8px]"
      >
        <header className="flex items-start gap-5 border-b border-border px-6 pb-5 pt-6 sm:px-10 sm:pb-6 sm:pt-8">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Revise suas peças
            </p>
            <h2 className="mt-1 font-display text-3xl leading-none text-foreground sm:text-4xl">
              Sua seleção
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {count} {count === 1 ? "peça" : "peças"}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="px-6 py-16 text-center sm:px-10">
            <p className="font-display text-2xl text-foreground">Sua sacola está vazia.</p>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Explore a coleção e adicione as peças que deseja reservar na AURA.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-7 min-h-11 border-b border-foreground pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            >
              Voltar à coleção
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
            <div className="px-6 py-2 sm:px-10 sm:py-4 lg:border-r lg:border-border">
              <div className="flex items-center justify-between border-b border-border py-4">
                <p className="text-xs font-medium text-foreground">Peças selecionadas</p>
                <button
                  type="button"
                  onClick={clear}
                  className="min-h-11 px-1 text-xs text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Limpar sacola
                </button>
              </div>

              {items.map((i) => (
                <article key={i.id} className="flex gap-4 border-b border-border py-5">
                  <div className="h-24 w-24 shrink-0 bg-muted/25 sm:h-28 sm:w-28">
                    {i.imagem ? (
                      <img
                        src={i.imagem}
                        alt={i.nome}
                        className="h-full w-full object-contain p-2"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center font-display text-sm tracking-[0.16em] text-muted-foreground">
                        AURA
                      </span>
                    )}
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-lg leading-tight text-foreground">
                          {i.nome}
                        </h3>
                        {(i.codigo || i.variacao) && (
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {i.codigo ? `Cód. ${i.codigo}` : ""}
                            {i.codigo && i.variacao ? " · " : ""}
                            {i.variacao || ""}
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        aria-label={`Remover ${i.nome} da sacola`}
                        onClick={() => remove(i.id)}
                        className="flex h-11 w-11 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      </button>
                    </div>

                    <p className="mt-2 text-sm font-semibold tabular-nums text-foreground">
                      {brl(i.preco)}
                    </p>

                    <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                      <div className="flex h-11 items-center rounded-[2px] border border-border">
                        <button
                          type="button"
                          aria-label={`Diminuir quantidade de ${i.nome}`}
                          onClick={() => setQtd(i.id, i.qtd - 1)}
                          className="flex h-11 w-11 items-center justify-center text-foreground transition-colors hover:bg-accent"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                        </button>
                        <span
                          className="w-8 text-center text-sm font-semibold tabular-nums"
                          aria-live="polite"
                        >
                          {i.qtd}
                        </span>
                        <button
                          type="button"
                          aria-label={`Aumentar quantidade de ${i.nome}`}
                          disabled={i.qtd >= i.estoque}
                          onClick={() => setQtd(i.id, i.qtd + 1)}
                          className="flex h-11 w-11 items-center justify-center text-foreground transition-colors hover:bg-accent disabled:opacity-40"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                        </button>
                      </div>

                      <span className="text-sm font-semibold tabular-nums text-foreground">
                        {brl(i.preco * i.qtd)}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="px-6 pb-8 pt-7 sm:px-10 sm:pb-10 lg:pt-9">
              <div className="border-b border-border pb-7">
                <div className="h-px w-8 bg-gold-strong/60" aria-hidden="true" />
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-foreground">
                  {STORE_PICKUP}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {STORE_ADDRESS}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Reserve pelo WhatsApp e combine o melhor horário para retirar.
                </p>
              </div>

              <div className="space-y-6 py-7">
                <label className="block text-xs font-medium text-foreground">
                  Seu nome <span className="text-gold-strong">*</span>
                  <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    aria-required="true"
                    className="mt-2 w-full rounded-none border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-foreground"
                    placeholder="Como podemos te chamar?"
                    autoComplete="name"
                  />
                </label>

                <label className="block text-xs font-medium text-foreground">
                  Observação <span className="font-normal text-muted-foreground">(opcional)</span>
                  <textarea
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                    rows={2}
                    className="mt-2 w-full resize-none rounded-none border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-foreground"
                    placeholder="Alguma preferência sobre as peças?"
                  />
                </label>
              </div>

              <div className="border-t border-border pt-6">
                <div className="flex items-end justify-between gap-4">
                  <span className="text-xs text-muted-foreground">Total</span>
                  <span className="font-display text-3xl tabular-nums text-foreground">
                    {brl(total)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={enviar}
                  disabled={!nome.trim()}
                  className="mt-5 min-h-13 w-full rounded-[2px] bg-whatsapp px-5 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-whatsapp-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Enviar pedido pelo WhatsApp
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 min-h-11 w-full text-xs font-medium text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Continuar escolhendo
                </button>

                <p className="mt-4 text-center text-[11px] leading-relaxed text-muted-foreground">
                  A disponibilidade e a forma de pagamento serão confirmadas pelo WhatsApp.
                </p>
              </div>
            </aside>
          </div>
        )}
      </section>
    </div>
  );
}
