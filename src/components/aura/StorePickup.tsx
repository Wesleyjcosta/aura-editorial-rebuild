import { ArrowRight, MapPin, MessageCircle, ShoppingBag } from "lucide-react";

import loja from "@/assets/loja-frente-real.jpeg";
import { Reveal } from "./primitives";

export function StorePickup() {
  return (
    <section id="loja" className="bg-coal py-20 text-white md:py-24 lg:py-28">
      <div className="aura-container">
        <Reveal className="grid lg:grid-cols-[1fr_0.72fr]">
          <div className="order-last flex flex-col justify-between bg-sage p-8 text-ink md:p-12 lg:order-first lg:min-h-[700px] lg:p-14">
            <div>
              <div className="flex items-center justify-between text-[9px] font-medium uppercase text-ink-muted">
                <span>06 · Loja AURA</span>
                <span>Viçosa / MG</span>
              </div>
              <h2 className="display mt-14 text-[48px] leading-[0.96] md:text-[64px]">
                Escolha online.
                <br />
                Retire na <em className="italic text-gold-dark">AURA.</em>
              </h2>
              <p className="mt-7 max-w-[420px] text-[13px] leading-[1.75] text-ink-soft">
                Reserve suas peças pelo WhatsApp e retire com calma na nossa loja, no coração de
                Viçosa.
              </p>
            </div>

            <div className="mt-14 grid gap-5 border-t border-ink/20 pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.25} />
                <p className="text-[12px] leading-[1.65] text-ink-soft">
                  Galeria Maria Mucci, nº 54
                  <br />
                  loja 113A · Calçadão
                </p>
              </div>
              <div className="flex items-start gap-4">
                <ShoppingBag className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.25} />
                <p className="text-[12px] leading-[1.65] text-ink-soft">
                  Reserve pelo WhatsApp
                  <br />e retire na loja
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/5531983400829"
              className="group mt-8 inline-flex w-full items-center justify-between bg-coal px-6 py-5 text-[10px] font-medium uppercase text-white sm:w-auto sm:min-w-[280px]"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
                Falar com a AURA
              </span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.25}
              />
            </a>
          </div>

          <div className="order-first aspect-[3/4] overflow-hidden bg-coal lg:order-last lg:min-h-[700px] lg:aspect-auto">
            <img
              src={loja}
              alt="Frente real da loja AURA em Viçosa"
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02] lg:min-h-[700px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
