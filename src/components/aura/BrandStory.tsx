import historia from "@/assets/historia.jpg";
import { ArrowLink, Reveal } from "./primitives";

export function BrandStory({ children }: { children?: React.ReactNode }) {
  return (
    <section id="historia" className="bg-background py-20 md:py-24 lg:py-32">
      <div className="aura-container">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-24">
          <Reveal className="overflow-hidden bg-coal">
            <img
              src={historia}
              alt="Retrato editorial em preto e branco"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>

          <div className="flex flex-col justify-between">
            <Reveal delay={80}>
              <p className="text-[9px] font-medium uppercase text-gold-dark">07 · Nossa história</p>
              <h2 className="display mt-5 text-[46px] leading-[1.02] text-ink md:text-[64px]">
                Feita para revelar
                <br />o que já é <em className="italic text-gold-dark">seu.</em>
              </h2>
              <div className="mt-8 grid gap-5 border-t border-line pt-6 sm:grid-cols-2 sm:gap-10">
                <p className="text-[13px] leading-[1.75] text-ink-soft">
                  A AURA nasceu em Viçosa do desejo de criar acessórios autorais com elegância,
                  intenção e um olhar atento ao cotidiano.
                </p>
                <p className="text-[13px] leading-[1.75] text-ink-soft">
                  Mais que completar um look, cada peça existe para guardar momentos e acompanhar
                  histórias reais.
                </p>
              </div>
              <ArrowLink href="#inicio" className="mt-8" underline>
                Conheça a AURA
              </ArrowLink>
            </Reveal>

            <div className="mt-16 lg:mt-12">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
