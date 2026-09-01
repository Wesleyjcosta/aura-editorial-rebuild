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
          className="aspect-[5/6] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
        />
        {withActions ? (
          <>
            <button
              type="button"
              aria-label={`Favoritar ${product.name}`}
              className="absolute top-3 right-3 text-ink-muted transition-colors hover:text-gold-dark"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="h-4 w-4"
              >
                <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9Z" />
              </svg>
            </button>
            <button
              type="button"
              aria-label={`Adicionar ${product.name} à sacola`}
              className="absolute right-3 bottom-3 grid h-7 w-7 place-items-center rounded-full border border-gold bg-background text-[13px] text-gold-dark transition-colors hover:bg-gold hover:text-white"
            >
              +
            </button>
          </>
        ) : null}
      </div>
      <h3 className="mt-4 text-[13px] text-ink">{product.name}</h3>
      <p className="mt-1 text-[13px] text-ink-muted">{product.price}</p>
    </article>
  );
}
