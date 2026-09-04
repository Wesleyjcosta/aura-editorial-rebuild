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
    <section className="bg-background py-20 md:py-24 lg:py-32">
      <div className="aura-container">
        <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal className="overflow-hidden">
            <img
              src={look}
              alt="Look AURA com brincos e anéis dourados"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover sm:aspect-[16/11] lg:h-full lg:min-h-[620px] lg:aspect-auto"
            />
          </Reveal>

          <Reveal
            delay={90}
            className="flex flex-col justify-between border border-t-0 border-line p-7 md:p-10 lg:min-h-[620px] lg:border-t lg:border-l-0 lg:p-12"
          >
            <div className="flex items-center justify-between text-[9px] font-medium uppercase text-ink-muted">
              <span>Look AURA</span>
              <span>04 / Editorial</span>
            </div>

            <div className="py-14 lg:py-10">
              <h2 className="display text-[46px] leading-[0.98] text-ink md:text-[60px]">
                Um look,
                <br />
                muitas formas
                <br />
                de <em className="italic text-gold-dark">ser.</em>
              </h2>
              <p className="mt-7 max-w-[300px] text-[13px] leading-[1.7] text-ink-soft">
                Misture volumes, texturas e pontos de luz. A melhor composição é aquela que parece
                naturalmente sua.
              </p>
              <ArrowLink href="#curadoria" className="mt-9" underline>
                Ver look completo
              </ArrowLink>
            </div>

            <div>
              <p className="text-[9px] font-medium uppercase text-ink-muted">Peças do look</p>
              <ul className="mt-4 grid grid-cols-3 gap-3">
                {PIECES.map((piece) => (
                  <li key={piece.name} className="bg-product">
                    <img
                      src={piece.img}
                      alt={piece.name}
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
