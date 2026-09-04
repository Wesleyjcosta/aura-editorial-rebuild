import essencia from "@/assets/p-essencia.jpg";
import brinco from "@/assets/p-brinco.jpg";
import anel from "@/assets/p-anel.jpg";
import pulseira from "@/assets/p-pulseira.jpg";
import { Reveal, SectionHeader } from "./primitives";
import { ProductCard, type Product } from "./ProductCard";

const PRODUCTS: Product[] = [
  { name: "Colar Essência", price: "R$ 239,00", img: essencia },
  { name: "Brinco Gota", price: "R$ 199,00", img: brinco },
  { name: "Anel Horizonte", price: "R$ 189,00", img: anel },
  { name: "Pulseira Sutileza", price: "R$ 189,00", img: pulseira },
];

export function ProductShelf() {
  return (
    <section id="curadoria" className="bg-sage py-20 md:py-24 lg:py-28">
      <div className="aura-container">
        <div className="mb-4 text-[9px] font-medium uppercase text-gold-dark">
          02 · Escolhas da casa
        </div>
        <SectionHeader
          title="Curadoria essencial"
          action="Ver todas as peças"
          actionHref="#categorias"
        />
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-12 lg:grid-cols-4 lg:gap-7">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <ProductCard product={p} withActions />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
