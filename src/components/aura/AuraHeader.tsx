import { useState } from "react";

const NAV = ["Novidades", "Coleções", "Comprar", "A AURA", "Loja"];

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`block leading-none ${className}`} aria-label="AURA Acessórios">
      <span className="display block text-[26px] tracking-[0.16em] text-ink">AURA</span>
      <span className="mt-1 block text-[8px] font-medium tracking-[0.42em] text-ink-muted">
        ACESSÓRIOS
      </span>
    </a>
  );
}

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-5 w-5">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function IconBag() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-5 w-5">
      <path d="M5 7h14l-1.2 13H6.2L5 7Z" />
      <path d="M9 9V6.5a3 3 0 0 1 6 0V9" />
    </svg>
  );
}

export function AuraHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line-light bg-background">
      <div className="aura-container">
        {/* desktop */}
        <div className="hidden h-[92px] grid-cols-[1fr_auto_1fr] items-center lg:grid">
          <Logo />
          <nav className="flex items-center justify-center gap-9">
            {NAV.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] text-ink-soft transition-colors hover:text-ink"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-end gap-6 text-ink">
            <button aria-label="Buscar" className="transition-colors hover:text-gold-dark">
              <IconSearch />
            </button>
            <button aria-label="Sacola" className="transition-colors hover:text-gold-dark">
              <IconBag />
            </button>
          </div>
        </div>

        {/* mobile */}
        <div className="grid h-[68px] grid-cols-[1fr_auto_1fr] items-center lg:hidden">
          <button
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="justify-self-start text-ink"
          >
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3" className="h-5 w-5">
              <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
            </svg>
          </button>
          <Logo className="text-center" />
          <div className="flex items-center justify-end gap-4 text-ink">
            <button aria-label="Buscar">
              <IconSearch />
            </button>
            <button aria-label="Sacola">
              <IconBag />
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-line-light bg-background lg:hidden">
          <ul className="aura-container flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item} className="border-b border-line-light last:border-0">
                <a href="#" className="block py-3.5 text-[14px] text-ink-soft">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
