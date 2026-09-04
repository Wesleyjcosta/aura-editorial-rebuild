import d1 from "@/assets/detail-01.jpg";
import d2 from "@/assets/detail-02.jpg";
import d3 from "@/assets/detail-03.jpg";
import { Reveal } from "./primitives";

const ITEMS = [
  {
    n: "01",
    title: "Forma",
    text: "Linhas essenciais desenhadas para atravessar estações.",
    img: d1,
    imageClass: "object-cover",
    frameClass: "aspect-[4/5]",
  },
  {
    n: "02",
    title: "Matéria",
    text: "Texturas que capturam a luz e valorizam cada acabamento.",
    img: d2,
    imageClass: "object-cover",
    frameClass: "aspect-[4/5] lg:mt-16",
  },
  {
    n: "03",
    title: "Presença",
    text: "O detalhe final que faz uma composição ser só sua.",
    img: d3,
    imageClass: "object-contain p-8 md:p-12",
    frameClass: "aspect-[4/5] bg-sage lg:mt-6",
  },
];

export function AuraDetails() {
  return (
    <section id="detalhes" className="scroll-mt-28 bg-background py-20 md:py-24 lg:py-32">
      <div className="aura-container">
        <Reveal className="grid gap-6 border-b border-line pb-7 lg:grid-cols-[1fr_380px] lg:items-end">
          <div>
            <p className="text-[9px] font-medium uppercase text-gold-dark">03 · O fazer AURA</p>
            <h2 className="display mt-4 text-[42px] text-ink md:text-[58px]">Aura em detalhes</h2>
          </div>
          <p className="max-w-[380px] text-[13px] leading-[1.7] text-ink-soft lg:justify-self-end">
            Proporção, textura e acabamento se encontram em peças pensadas para o uso real e para
            momentos que merecem permanecer.
          </p>
        </Reveal>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 hide-scrollbar md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 lg:gap-8">
          {ITEMS.map((item, index) => (
            <Reveal
              key={item.n}
              delay={index * 80}
              className="w-[78vw] shrink-0 snap-start md:w-auto"
            >
              <div className={`overflow-hidden ${item.frameClass}`}>
                <img
                  src={item.img}
                  alt={`${item.title} AURA`}
                  loading="lazy"
                  className={`h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] ${item.imageClass}`}
                />
              </div>
              <div className="mt-5 grid grid-cols-[36px_1fr] gap-3 border-t border-line-light pt-4">
                <span className="text-[9px] font-medium text-gold-dark">{item.n}</span>
                <div>
                  <h3 className="display text-[24px] text-ink">{item.title}</h3>
                  <p className="mt-2 max-w-[260px] text-[12px] leading-[1.65] text-ink-soft">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
