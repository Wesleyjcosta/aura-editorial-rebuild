import a from "@/assets/detail-01.jpg";
import b from "@/assets/luminar.jpg";
import c from "@/assets/detail-02.jpg";
import d from "@/assets/cat-brincos.jpg";
import { ArrowLink, Reveal } from "./primitives";

const POSTS = [a, b, c, d];

export function InstagramGallery() {
  return (
    <Reveal delay={90}>
      <div className="flex items-baseline justify-between border-b border-line-light pb-4">
        <h2 className="label-xs text-ink">No Instagram</h2>
        <span className="text-[12px] text-ink-muted">@auraacessorios</span>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {POSTS.map((src, i) => (
          <li key={i} className="overflow-hidden">
            <a href="#" className="block">
              <img
                src={src}
                alt="Publicação AURA no Instagram"
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.025]"
              />
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-end">
        <ArrowLink href="#" className="text-ink-muted">
          Ver mais
        </ArrowLink>
      </div>
    </Reveal>
  );
}
