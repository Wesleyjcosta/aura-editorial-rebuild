import { Heart, Plus } from "lucide-react";

export type Product = {
  name: string;
  price: string;
  img: string;
};

export function ProductCard({
  product,
  withActions = false,
}: {
  product: Product;
  withActions?: boolean;
}) {
  return (
    <article className="group">
      <div className="relative overflow-hidden bg-product">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
        />
        {withActions ? (
          <>
            <button
              type="button"
              aria-label={`Favoritar ${product.name}`}
              className="absolute top-3 right-3 grid h-10 w-10 place-items-center bg-background/90 text-ink transition-colors hover:text-gold-dark"
            >
              <Heart className="h-4 w-4" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              aria-label={`Adicionar ${product.name} à sacola`}
              className="absolute right-3 bottom-3 grid h-10 w-10 place-items-center bg-coal text-white transition-colors hover:bg-gold-dark"
            >
              <Plus className="h-4 w-4" strokeWidth={1.25} />
            </button>
          </>
        ) : null}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 border-t border-line-light pt-3">
        <div>
          <h3 className="text-[13px] text-ink">{product.name}</h3>
          <p className="mt-1 text-[10px] uppercase text-ink-muted">Design AURA</p>
        </div>
        <p className="shrink-0 text-[12px] text-ink-soft">{product.price}</p>
      </div>
    </article>
  );
}
