import luminar from "@/assets/luminar.jpg";
import colar from "@/assets/p-colar.jpg";
import brinco from "@/assets/p-brinco.jpg";
import anel from "@/assets/p-anel.jpg";
import { ArrowLink, GoldStar, Reveal } from "./primitives";
import { ProductCard, type Product } from "./ProductCard";

const PRODUCTS: Product[] = [
  { name: "Colar Luminar", price: "R$ 289,00", img: colar },
  { name: "Brinco Luminar", price: "R$ 219,00", img: brinco },
  { name: "Anel Luminar", price: "R$ 199,00", img: anel },
];

export function FeaturedCollection() {
  return (
    <section id="colecao" className="bg-soft py-20 md:py-24 lg:py-32">
      <div className="aura-container">
        <Reveal className="mb-8 flex items-center justify-between gap-6 border-b border-line pb-5">
          <p className="text-[9px] font-medium uppercase text-gold-dark">01 · Em destaque</p>
          <p className="hidden text-[10px] uppercase text-ink-muted sm:block">
            Design autoral · Edição permanente
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal className="min-h-[420px] overflow-hidden lg:min-h-[620px]">
            <img
              src={luminar}
              alt="Coleção Luminar"
              loading="lazy"
              className="h-full min-h-[420px] w-full object-cover lg:min-h-[620px]"
            />
          </Reveal>

          <Reveal
            delay={90}
            className="flex min-h-[420px] flex-col justify-between bg-coal p-8 text-white md:p-12 lg:min-h-[620px] lg:p-14"
          >
            <div className="flex items-center justify-between">
              <GoldStar className="h-3 w-3" />
              <span className="text-[9px] uppercase text-white/50">AURA / 01</span>
            </div>

            <div>
              <p className="text-[9px] font-medium uppercase text-gold">Coleção</p>
              <h2 className="display mt-4 text-[52px] leading-[0.88] text-white md:text-[68px]">
                Lumi
                <br />
                <em className="italic">nar</em>
              </h2>
              <p className="mt-7 max-w-[280px] text-[13px] leading-[1.7] text-white/65">
                Formas orgânicas e superfícies luminosas para acompanhar seus melhores momentos.
              </p>
              <ArrowLink
                href="#curadoria"
                className="mt-9 self-start border-white/35 text-white hover:text-gold"
                underline
              >
                Conhecer coleção
              </ArrowLink>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-6 lg:ml-[33%] lg:gap-8">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.name} delay={index * 70}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
