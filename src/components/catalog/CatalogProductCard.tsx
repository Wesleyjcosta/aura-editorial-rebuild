import { ImageIcon } from "lucide-react";
import { useState } from "react";
import {
  brl,
  categoriaPublica,
  estoqueDisponivel,
  imagemCard,
  precoFinal,
  type Produto,
} from "@/lib/catalog";

export function CatalogProductCard({
  produto,
  onOpen,
}: {
  produto: Produto;
  onOpen: (p: Produto) => void;
}) {
  const img = imagemCard(produto);
  const [imageState, setImageState] = useState<"loading" | "loaded" | "error">(
    img ? "loading" : "error",
  );
  const preco = precoFinal(produto);
  const estoque = estoqueDisponivel(produto);
  const promo = produto.preco_promocional != null && produto.preco != null;
  const categoria = categoriaPublica(produto.categoria);

  return (
    <article
      className="group flex h-full cursor-pointer flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
      role="button"
      tabIndex={0}
      aria-label={`Ver produto ${produto.nome}`}
      onClick={() => onOpen(produto)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(produto);
        }
      }}
    >
      <div className="relative block aspect-[4/3] w-full overflow-hidden bg-muted/20">
        {img && imageState !== "error" ? (
          <>
            {imageState === "loading" && (
              <div className="absolute inset-0 bg-muted/55" aria-hidden="true" />
            )}
            <img
              src={img}
              alt={produto.nome}
              loading="lazy"
              decoding="async"
              onLoad={() => setImageState("loaded")}
              onError={() => setImageState("error")}
              className={`h-full w-full object-contain p-2 transition-[opacity,transform] duration-200 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none motion-reduce:transition-none sm:p-2.5 ${
                imageState === "loaded" ? "opacity-100" : "opacity-0"
              } group-hover:scale-[1.012]`}
            />
          </>
        ) : (
          <span className="flex h-full w-full flex-col items-center justify-center gap-3 text-muted-foreground">
            <ImageIcon className="h-6 w-6 text-gold-strong/60" aria-hidden="true" />
            <span className="font-display text-lg tracking-[0.2em]">AURA</span>
          </span>
        )}

        {estoque <= 0 && (
          <span className="absolute left-3 top-3 bg-foreground px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-background">
            Esgotado
          </span>
        )}
        {estoque > 0 && promo && (
          <span className="absolute left-3 top-3 bg-white/95 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-gold-strong">
            Oferta
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-3.5 sm:pt-4">
        <p className="min-h-4 text-[9px] font-medium uppercase tracking-[0.18em] text-gold-strong">
          {categoria || <span aria-hidden="true">&nbsp;</span>}
        </p>

        <h3 className="mt-1.5 min-h-[2.2em] line-clamp-2 font-display text-[17px] leading-[1.1] text-foreground sm:text-lg">
          {produto.nome}
        </h3>

        {produto.codigo ? (
          <p className="mt-1.5 text-[10px] font-medium uppercase text-muted-foreground">
            Cód. {produto.codigo}
          </p>
        ) : null}

        <div className="mt-2.5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-base font-semibold tracking-[-0.01em] text-foreground sm:text-lg">
            {brl(preco)}
          </span>
          {promo && (
            <span className="text-xs text-muted-foreground line-through">
              {brl(Number(produto.preco))}
            </span>
          )}
        </div>

        <span className="mt-5 inline-flex h-10 w-full items-center justify-center border border-foreground bg-transparent px-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground transition-[background-color,color,border-color] duration-150 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background group-focus-visible:border-foreground group-focus-visible:bg-foreground group-focus-visible:text-background motion-reduce:transition-none sm:h-11 sm:text-[11px]">
          Ver produto
        </span>
      </div>
    </article>
  );
}
