import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const NAV = [
  { label: "Produtos", href: "#catalogo" },
  { label: "A AURA", href: "#aura" },
  { label: "Loja", href: "#loja" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#inicio" className={`block leading-none ${className}`} aria-label="AURA Acessórios">
      <span className="display block text-[28px] text-ink">AURA</span>
      <span className="mt-1.5 block text-[7px] font-medium text-ink-muted">ACESSÓRIOS</span>
    </a>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="group relative py-2 text-[11px] font-medium uppercase text-ink-soft transition-colors hover:text-ink"
    >
      {label}
      <span className="absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );
}

export function AuraHeader({
  cartCount,
  onCartOpen,
}: {
  cartCount: number;
  onCartOpen: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="flex h-7 items-center justify-center bg-coal px-4 text-center text-[8px] font-medium uppercase text-white sm:justify-between sm:px-10">
        <span className="hidden sm:block">Loja em Viçosa / MG</span>
        <span>Escolha online e retire na loja</span>
        <span className="hidden sm:block">Brasil</span>
      </div>

      <div className="border-b border-line-light bg-background/95 backdrop-blur-sm">
        <div className="aura-container">
          <div className="hidden h-[78px] grid-cols-[1fr_auto_1fr] items-center lg:grid">
            <nav className="flex items-center gap-7" aria-label="Navegação principal">
              {NAV.slice(0, 1).map((item) => (
                <NavLink key={item.label} {...item} />
              ))}
            </nav>

            <Logo className="text-center" />

            <div className="flex items-center justify-end gap-6">
              <nav className="flex items-center gap-7" aria-label="Navegação institucional">
                {NAV.slice(1).map((item) => (
                  <NavLink key={item.label} {...item} />
                ))}
              </nav>
              <span className="h-5 w-px bg-line-light" aria-hidden="true" />
              <button
                type="button"
                aria-label="Ir para a busca do catálogo"
                onClick={() => document.querySelector("#catalogo")?.scrollIntoView()}
                className="grid h-10 w-10 place-items-center text-ink transition-colors hover:text-gold-dark"
              >
                <Search className="h-[18px] w-[18px]" strokeWidth={1.35} />
              </button>
              <button
                type="button"
                aria-label={`Sacola, ${cartCount} itens`}
                onClick={onCartOpen}
                className="relative grid h-10 w-10 place-items-center text-ink transition-colors hover:text-gold-dark"
              >
                <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.35} />
                <span className="absolute top-1 right-0 text-[8px] font-medium">{cartCount}</span>
              </button>
            </div>
          </div>

          <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center lg:hidden">
            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="grid h-11 w-11 place-items-center justify-self-start text-ink"
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.35} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.35} />
              )}
            </button>
            <Logo className="text-center" />
            <div className="flex items-center justify-end">
              <button
                type="button"
                aria-label="Ir para a busca do catálogo"
                onClick={() => document.querySelector("#catalogo")?.scrollIntoView()}
                className="grid h-11 w-10 place-items-center"
              >
                <Search className="h-[18px] w-[18px]" strokeWidth={1.35} />
              </button>
              <button
                type="button"
                aria-label={`Sacola, ${cartCount} itens`}
                onClick={onCartOpen}
                className="relative grid h-11 w-10 place-items-center"
              >
                <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.35} />
                <span className="absolute top-1.5 right-0 text-[8px] font-medium">{cartCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <nav className="absolute top-full right-0 left-0 border-b border-line bg-background lg:hidden">
          <ul className="aura-container py-6">
            {NAV.map((item, index) => (
              <li key={item.label} className="border-b border-line-light last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4"
                >
                  <span className="display text-[30px] text-ink">{item.label}</span>
                  <span className="text-[9px] text-ink-muted">0{index + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
