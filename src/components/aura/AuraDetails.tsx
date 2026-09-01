import d1 from "@/assets/detail-01.jpg";
import d2 from "@/assets/detail-02.jpg";
import d3 from "@/assets/detail-03.jpg";
import { Reveal, SectionHeader } from "./primitives";

const ITEMS = [
  {
    n: "01.",
    title: "Essência",
    text: "Peças que acompanham seus melhores momentos.",
    img: d1,
    ratio: "aspect-[4/5]",
    offset: "lg:mt-0",
  },
  {
    n: "02.",
    title: "Detalhe",
    text: "Design autoral, acabamentos impecáveis.",
    img: d2,
    ratio: "aspect-[4/5]",
    offset: "lg:mt-10",
  },
  {
    n: "03.",
    title: "Aura",
    text: "O detalhe que revela quem você é.",
    img: d3,
    ratio: "aspect-[4/5]",
    offset: "lg:mt-4",
  },
];

export function AuraDetails() {
  return (
    <section className="bg-soft pb-20 lg:pb-28">
      <div className="aura-container">
        <SectionHeader title="Aura em detalhes" action="Deslize para explorar" />

        <div className="-mx-[18px] mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[18px] hide-scrollbar md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 lg:gap-10">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.n}
              delay={i * 90}
              className={`w-[78vw] shrink-0 snap-start md:w-auto ${item.offset}`}
            >
              <div className={`relative overflow-hidden ${item.ratio}`}>
                {i === 2 ? (
                  <>
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                    <svg
                      viewBox="0 0 400 500"
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full"
                    >
                      <ellipse
                        cx="205"
                        cy="255"
                        rx="150"
                        ry="105"
                        fill="none"
                        stroke="var(--gold)"
                        strokeWidth="1"
                        transform="rotate(-8 205 255)"
                      />
                    </svg>
                  </>
                ) : (
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.025]"
                  />
                )}
              </div>

              <div className="mt-6 flex items-start gap-4">
                <span className="display border-b border-gold pb-0.5 text-[15px] text-gold">
                  {item.n}
                </span>
                <div className="min-w-0">
                  <h3 className="label-xs text-ink">{item.title}</h3>
                  <p className="mt-2 max-w-[210px] text-[13px] leading-[1.6] text-ink-soft">
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
