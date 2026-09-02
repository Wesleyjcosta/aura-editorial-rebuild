import { GoldStar, Reveal } from "./primitives";

export function BrandManifesto() {
  return (
    <section id="aura" className="bg-coal py-14 text-white md:py-20 lg:py-24">
      <div className="aura-container grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-20">
        <Reveal>
          <div className="flex items-center gap-3 text-[9px] font-medium uppercase text-white/65">
            <GoldStar className="h-2.5 w-2.5" />
            Manifesto AURA
          </div>
          <p className="mt-4 max-w-[210px] text-[12px] leading-[1.7] text-white/55">
            Estilo, brilho e personalidade em cada escolha.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <p className="display max-w-[980px] text-[32px] leading-[1.12] text-white md:text-[48px] lg:text-[60px]">
            O luxo está no que permanece: uma peça com intenção, um gesto de luz, uma presença
            <em className="italic text-gold"> inesquecível.</em>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
