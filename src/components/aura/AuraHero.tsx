import heroImg from "@/assets/hero.jpg";
import { GoldStar, Reveal } from "./primitives";

export function AuraHero() {
  return (
    <section className="border-b border-line-light">
      <div className="grid lg:grid-cols-[39fr_61fr]">
        <div className="flex items-center bg-background px-[18px] py-14 md:px-[34px] lg:py-24 lg:pr-16 lg:pl-[60px]">
          <Reveal className="max-w-[440px]">
            <p className="eyebrow flex items-start gap-2 text-ink-soft">
              <GoldStar className="mt-0.5 h-2.5 w-2.5 shrink-0" />
              <span>
                Acessórios que revelam
                <br />
                sua essência
              </span>
            </p>

            <h1 className="display mt-7 text-[clamp(38px,5.2vw,82px)] leading-[0.98] text-ink">
              O detalhe
              <br />
              muda <em className="italic">tudo.</em>
            </h1>

            <span aria-hidden="true" className="mt-8 block h-px w-16 bg-gold" />

            <p className="mt-7 max-w-[300px] text-[15px] text-ink-soft">
              Peças autorais que iluminam sua presença com naturalidade e intenção.
            </p>

            <a
              href="#colecao"
              className="group mt-9 inline-flex items-center gap-10 border border-line px-7 py-4 label-xs text-ink transition-colors hover:border-gold hover:text-gold-dark"
            >
              Descobrir coleção
              <span
                aria-hidden="true"
                className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[5px]"
              >
                →
              </span>
            </a>
          </Reveal>
        </div>

        <div className="relative min-h-[440px] lg:min-h-[620px]">
          <img
            src={heroImg}
            alt="Modelo usando brincos e colares dourados AURA"
            width={1200}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <button
            type="button"
            className="group absolute right-6 bottom-6 grid h-[92px] w-[92px] place-items-center rounded-full lg:right-16 lg:bottom-1/2 lg:h-[116px] lg:w-[116px] lg:translate-y-1/2"
            aria-label="Assista ao filme"
          >
            <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full">
              <defs>
                <path
                  id="aura-film-circle"
                  d="M60,60 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0"
                  fill="none"
                />
              </defs>
              <text className="fill-white text-[9px] tracking-[0.32em] uppercase">
                <textPath href="#aura-film-circle" startOffset="6%">
                  Assista ao filme · Assista ao filme ·
                </textPath>
              </text>
            </svg>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5 fill-ink">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
