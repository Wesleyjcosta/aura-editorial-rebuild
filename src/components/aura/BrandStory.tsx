import historia from "@/assets/historia.jpg";
import { ArrowLink, Reveal } from "./primitives";

export function BrandStory({ children }: { children?: React.ReactNode }) {
  return (
    <section className="pb-20 lg:pb-24">
      <div className="aura-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <Reveal>
            <h2 className="label-xs border-b border-line-light pb-4 text-ink">História AURA</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_0.85fr] sm:items-start">
              <div>
                <p className="max-w-[300px] text-[14px] leading-[1.7] text-ink-soft">
                  AURA nasceu do desejo de criar acessórios autorais que traduzem a essência feminina
                  com elegância e autenticidade.
                </p>
                <p className="mt-4 max-w-[300px] text-[14px] leading-[1.7] text-ink-soft">
                  Mais que acessórios, criamos memórias.
                </p>
                <ArrowLink href="#" className="mt-8" underline>
                  Conheça a AURA
                </ArrowLink>
              </div>
              <img
                src={historia}
                alt="Retrato editorial em preto e branco"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </Reveal>

          {children}
        </div>
      </div>
    </section>
  );
}
