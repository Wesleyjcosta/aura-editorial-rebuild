const GROUPS = [
  { title: "AURA", links: ["Sobre", "Manifesto", "Blog"] },
  { title: "Ajuda", links: ["Dúvidas Frequentes", "Como Funciona", "Cuidados"] },
  { title: "Atendimento", links: ["WhatsApp", "Telefone", "E-mail"] },
  { title: "Siga AURA", links: ["Instagram", "WhatsApp"] },
];

export function AuraFooter() {
  return (
    <footer className="border-t border-line-light bg-soft">
      <div className="aura-container py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="lg:border-r lg:border-line-light">
            <p className="display text-[clamp(44px,6vw,84px)] tracking-[0.1em] text-ink">AURA</p>
            <p className="mt-3 text-[9px] font-medium tracking-[0.42em] text-ink-muted">
              ACESSÓRIOS
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {GROUPS.map((g) => (
              <div key={g.title}>
                <h3 className="label-xs text-ink">{g.title}</h3>
                <ul className="mt-5 space-y-3">
                  {g.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[13px] text-ink-soft transition-colors hover:text-gold-dark"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line-light pt-6 text-[11px] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AURA Acessórios. Viçosa/MG.</p>
          <p>Galeria Maria Mucci, nº 54 — loja 113A</p>
        </div>
      </div>
    </footer>
  );
}
