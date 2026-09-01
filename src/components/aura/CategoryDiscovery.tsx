import brincos from "@/assets/cat-brincos.jpg";
import colares from "@/assets/cat-colares.jpg";
import aneis from "@/assets/cat-aneis.jpg";
import pulseiras from "@/assets/cat-pulseiras.jpg";
import bolsas from "@/assets/cat-bolsas.jpg";
import oculos from "@/assets/cat-oculos.jpg";
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
    <section className="pb-20 lg:pb-24">
      <div className="aura-container">
        <SectionHeader title="Descubra sua categoria" />
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {CATEGORIES.map((c, i) => (
            <Reveal as="li" key={c.label} delay={i * 60}>
              <a href="#" className="group block">
                <div className="overflow-hidden bg-product">
                  <img
                    src={c.img}
                    alt={c.label}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                  />
                </div>
                <p className="mt-3 text-center label-xs text-ink-soft transition-colors group-hover:text-ink">
                  {c.label}
                </p>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
