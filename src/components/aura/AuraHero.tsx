import { ArrowRight } from "lucide-react";

import heroImg from "@/assets/hero-aura.webp";
import { GoldStar, Reveal } from "./primitives";

export function AuraHero() {
  return (
    <section
      id="inicio"
      className="relative isolate h-[calc(84svh-92px)] min-h-[520px] max-h-[760px] overflow-hidden lg:h-[calc(100svh-132px)] lg:min-h-[620px] lg:max-h-[820px]"
    >
      <img
        src={heroImg}
        alt="Modelo usando brincos e colares dourados AURA"
        width={1680}
        height={941}
        className="absolute inset-0 h-full w-full object-cover object-[50%_center] sm:object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-coal/35" />

      <div className="aura-container relative flex h-full flex-col justify-between py-8 text-white md:py-10 lg:py-12">
        <Reveal className="flex items-center justify-between gap-6">
          <p className="flex items-center gap-3 text-[9px] font-medium uppercase">
            <GoldStar className="h-2.5 w-2.5 text-gold" />
            AURA Acessórios
          </p>
          <p className="hidden text-[9px] font-medium uppercase sm:block">Acessórios AURA · 2026</p>
        </Reveal>

        <Reveal delay={100} className="grid items-end gap-6 lg:grid-cols-[1fr_340px] lg:gap-16">
          <div>
            <p className="mb-4 max-w-[240px] text-[13px] leading-[1.6] text-white/85 lg:hidden">
              Acessórios para transformar seus looks com personalidade.
            </p>
            <h1 className="display text-[68px] leading-[0.82] text-white sm:text-[92px] md:text-[116px] lg:text-[150px] xl:text-[172px]">
              AURA
            </h1>
          </div>

          <div className="border-t border-white/50 pt-5 lg:mb-2">
            <p className="display text-[28px] leading-[1.05] text-white md:text-[34px]">
              O detalhe muda <em className="italic">tudo.</em>
            </p>
            <p className="mt-4 hidden max-w-[300px] text-[13px] leading-[1.65] text-white/80 lg:block">
              Acessórios para transformar seus looks com personalidade.
            </p>
            <a
              href="#catalogo"
              className="group mt-6 inline-flex items-center gap-6 text-[10px] font-medium uppercase text-white"
            >
              Ver produtos disponíveis
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.25}
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
