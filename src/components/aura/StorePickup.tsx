import loja from "@/assets/loja.jpg";
import { Reveal } from "./primitives";

function IconBag() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" className="h-7 w-7">
      <path d="M5 7h14l-1.2 13H6.2L5 7Z" />
      <path d="M9 9V6.5a3 3 0 0 1 6 0V9" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" className="h-7 w-7">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

function IconWhats() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" className="h-7 w-7">
      <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19l-4 1Z" />
      <path d="M9 9.5c.6 3 2.5 4.9 5.5 5.5l1-1.5 2 .8-.4 1.7c-3.6.6-8-3.8-7.4-7.4l1.7-.4.8 2L9 9.5Z" />
    </svg>
  );
}

export function StorePickup() {
  return (
    <section className="pb-20 lg:pb-24">
      <div className="aura-container">
        <Reveal className="grid border border-line-light lg:grid-cols-[1.25fr_1fr_0.9fr_1.1fr]">
          <div className="flex items-start gap-5 border-b border-line-light p-7 lg:border-r lg:border-b-0">
            <span className="shrink-0 text-ink">
              <IconBag />
            </span>
            <div className="min-w-0">
              <h3 className="display text-[19px] text-ink">Retire na AURA</h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-ink-soft">
                Você escolhe online, reserva pelo WhatsApp e retira na nossa loja.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 border-b border-line-light p-7 lg:border-r lg:border-b-0">
            <span className="shrink-0 text-ink">
              <IconPin />
            </span>
            <p className="text-[13px] leading-[1.6] text-ink-soft">
              Galeria Maria Mucci, nº 54,
              <br />
              loja 113A — Calçadão,
              <br />
              Viçosa/MG
            </p>
          </div>

          <div className="flex items-start gap-5 border-b border-line-light p-7 lg:border-r lg:border-b-0">
            <span className="shrink-0 text-ink">
              <IconWhats />
            </span>
            <div>
              <p className="label-xs text-ink">WhatsApp</p>
              <a href="tel:+5531983400829" className="mt-2 block text-[13px] text-ink-soft">
                (31) 98340-0829
              </a>
            </div>
          </div>

          <div className="min-h-[180px]">
            <img
              src={loja}
              alt="Interior da loja AURA"
              loading="lazy"
              className="h-full min-h-[180px] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
