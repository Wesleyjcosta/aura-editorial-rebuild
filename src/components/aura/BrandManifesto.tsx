import { GoldStar, Reveal } from "./primitives";

export function BrandManifesto() {
  return (
    <section className="bg-soft py-20 lg:py-28">
      <div className="aura-container">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <GoldStar className="mx-auto h-3 w-3" />
          <p className="display mt-8 text-[clamp(22px,2.1vw,34px)] leading-[1.35] text-ink">
            AURA existe para transformar o simples em <em className="italic">inesquecível.</em>
            <br className="hidden sm:block" /> Autoralidade, brilho e propósito em cada detalhe.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
