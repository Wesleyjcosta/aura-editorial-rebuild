import a from "@/assets/detail-01.jpg";
import b from "@/assets/luminar.jpg";
import c from "@/assets/detail-02.jpg";
import d from "@/assets/cat-brincos.jpg";
import { Instagram } from "lucide-react";
import { ArrowLink, Reveal } from "./primitives";

const POSTS = [a, b, c, d];

export function InstagramGallery() {
  return (
    <Reveal delay={90}>
      <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
        <div className="flex items-center gap-3">
          <Instagram className="h-4 w-4" strokeWidth={1.25} />
          <h2 className="text-[10px] font-medium uppercase text-ink">@auraacessorios</h2>
        </div>
        <ArrowLink href="https://instagram.com/auraacessorios" className="text-ink-muted">
          Ver perfil
        </ArrowLink>
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {POSTS.map((src, i) => (
          <li key={i} className="overflow-hidden">
            <a href="https://instagram.com/auraacessorios" className="block">
              <img
                src={src}
                alt="Publicação AURA no Instagram"
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]"
              />
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
