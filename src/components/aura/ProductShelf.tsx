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
    <section className="pb-20 lg:pb-24">
      <div className="aura-container">
        <SectionHeader title="Curadoria AURA" action="Ver tudo" />
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-5">
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
