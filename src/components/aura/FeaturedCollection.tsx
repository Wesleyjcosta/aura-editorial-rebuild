import luminar from "@/assets/luminar.jpg";
import colar from "@/assets/p-colar.jpg";
import brinco from "@/assets/p-brinco.jpg";
import anel from "@/assets/p-anel.jpg";
import { ArrowLink, Reveal } from "./primitives";
import { ProductCard, type Product } from "./ProductCard";

const PRODUCTS: Product[] = [
  { name: "Colar Luminar", price: "R$ 289,00", img: colar },
  { name: "Brinco Luminar", price: "R$ 219,00", img: brinco },
  { name: "Anel Luminar", price: "R$ 199,00", img: anel },
];

export function FeaturedCollection() {
  return (
    <section id="colecao" className="py-20 lg:py-24">
      <div className="aura-container">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-5">
          <Reveal className="relative min-h-[380px] overflow-hidden lg:min-h-[430px]">
            <img
              src={luminar}
              alt="Coleção Luminar"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.72)_34%,rgba(255,255,255,0)_62%)]"
            />
            <div className="relative flex h-full flex-col justify-end p-8 lg:p-10">

              <p className="label-xs text-ink-soft">Coleção</p>
              <p className="display mt-2 text-[clamp(30px,3vw,44px)] tracking-[0.02em] text-ink">
                LUMINAR
              </p>
              <p className="mt-4 max-w-[240px] text-[14px] text-ink-soft">
                Luz que acompanha seus melhores momentos.
              </p>
              <ArrowLink href="#" className="mt-7 self-start" underline>
                Conhecer coleção
              </ArrowLink>
            </div>
          </Reveal>

          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={80 + i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
