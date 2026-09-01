import look from "@/assets/look.jpg";
import brinco from "@/assets/p-brinco.jpg";
import colar from "@/assets/p-colar.jpg";
import anel from "@/assets/p-anel.jpg";
import { ArrowLink, Reveal } from "./primitives";

const PIECES = [
  { img: brinco, name: "Brinco Gota" },
  { img: colar, name: "Colar Essência" },
  { img: anel, name: "Anel Horizonte" },
];

export function LookAura() {
  return (
    <section className="pb-20 lg:pb-24">
      <div className="aura-container">
        <div className="grid gap-8 lg:grid-cols-[31fr_69fr] lg:gap-0">
          <Reveal className="flex flex-col justify-center lg:pr-12">
            <h2 className="display text-[clamp(30px,3.2vw,46px)] leading-[0.95] text-ink">
              LOOK
              <br />
              AURA
            </h2>
            <p className="mt-6 max-w-[260px] text-[14px] text-ink-soft">
              Combine peças, crie histórias e revele a sua melhor versão.
            </p>
            <ArrowLink href="#" className="mt-8 self-start" underline>
              Ver look completo
            </ArrowLink>
          </Reveal>

          <Reveal delay={90} className="grid gap-4 sm:grid-cols-[1fr_auto] sm:gap-5">
            <div className="overflow-hidden">
              <img
                src={look}
                alt="Look AURA"
                loading="lazy"
                className="aspect-[16/11] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.025]"
              />
            </div>
            <div className="sm:w-[104px]">
              <p className="label-xs text-ink-muted">Peças do look</p>
              <ul className="mt-4 flex gap-3 sm:flex-col">
                {PIECES.map((p) => (
                  <li key={p.name} className="flex-1 border border-line-light bg-product">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
