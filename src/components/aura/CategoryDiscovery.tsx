import brincos from "@/assets/cat-brincos.jpg";
import colares from "@/assets/cat-colares.jpg";
import aneis from "@/assets/cat-aneis.jpg";
import pulseiras from "@/assets/cat-pulseiras.jpg";
import bolsas from "@/assets/cat-bolsas.jpg";
import oculos from "@/assets/cat-oculos.jpg";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "./primitives";

const CATEGORIES = [
  { label: "Brincos", img: brincos },
  { label: "Colares", img: colares },
  { label: "Anéis", img: aneis },
  { label: "Pulseiras", img: pulseiras },
  { label: "Bolsas", img: bolsas },
  { label: "Óculos", img: oculos },
];

export function CategoryDiscovery() {
  return (
    <section id="categorias" className="bg-soft py-20 md:py-24 lg:py-28">
      <div className="aura-container">
        <div className="mb-4 text-[9px] font-medium uppercase text-gold-dark">
          05 · Encontre a sua peça
        </div>
        <SectionHeader title="Comprar por categoria" />
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-12 md:grid-cols-3 md:gap-x-7 md:gap-y-12">
          {CATEGORIES.map((c, i) => (
            <Reveal as="li" key={c.label} delay={i * 60}>
              <a href="#curadoria" className="group block">
                <div className="overflow-hidden bg-product">
                  <img
                    src={c.img}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3">
                  <p className="display text-[24px] text-ink md:text-[28px]">{c.label}</p>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-dark"
                    strokeWidth={1.25}
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
