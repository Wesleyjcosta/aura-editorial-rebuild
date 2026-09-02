import { ArrowUp } from "lucide-react";
import { STORE_INSTAGRAM_URL, STORE_MAP_URL, STORE_WHATSAPP_URL } from "@/config/store";

const GROUPS = [
  {
    title: "AURA",
    links: [
      { label: "Produtos", href: "#catalogo" },
      { label: "Manifesto", href: "#aura" },
      { label: "Nossa loja", href: "#loja" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "WhatsApp", href: STORE_WHATSAPP_URL },
      { label: "Telefone", href: "tel:+5531983400829" },
      { label: "Retirada na loja", href: "#loja" },
    ],
  },
  {
    title: "Encontre a AURA",
    links: [
      { label: "Instagram", href: STORE_INSTAGRAM_URL },
      { label: "Como chegar", href: STORE_MAP_URL },
      { label: "WhatsApp", href: STORE_WHATSAPP_URL },
    ],
  },
];

export function AuraFooter() {
  return (
    <footer className="bg-coal text-white">
      <div className="aura-container py-12 lg:py-16">
        <div className="grid gap-10 border-b border-white/15 pb-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:pb-14">
          <div>
            <p className="display text-[64px] leading-[0.8] text-white sm:text-[90px] lg:text-[112px]">
              AURA
            </p>
            <p className="mt-5 max-w-[360px] text-[13px] leading-[1.7] text-white/55">
              Acessórios para transformar seus looks e acompanhar todos os seus momentos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-[9px] font-medium uppercase text-gold">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[12px] text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-6 text-[9px] uppercase text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
            <p>© {new Date().getFullYear()} AURA Acessórios</p>
            <p>Galeria Maria Mucci, 54 · loja 113A · Viçosa / MG</p>
          </div>
          <a
            href="#inicio"
            className="inline-flex items-center gap-3 text-white/65 hover:text-white"
          >
            Voltar ao topo
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.25} />
          </a>
        </div>
      </div>
    </footer>
  );
}
