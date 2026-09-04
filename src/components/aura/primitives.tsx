import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function GoldStar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`text-gold ${className}`}
      fill="currentColor"
    >
      <path d="M12 0c.5 6.3 5.7 11.5 12 12-6.3.5-11.5 5.7-12 12-.5-6.3-5.7-11.5-12-12C6.3 11.5 11.5 6.3 12 0z" />
    </svg>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";

  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Comp>
  );
}

export function ArrowLink({
  children,
  href = "#",
  className = "",
  underline = false,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  underline?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-4 text-[11px] font-medium uppercase text-ink transition-colors hover:text-gold-dark ${
        underline ? "border-b border-line pb-2" : ""
      } ${className}`}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
        strokeWidth={1.25}
      />
    </a>
  );
}

export function SectionHeader({
  title,
  action,
  actionHref = "#",
  className = "",
}: {
  title: string;
  action?: string;
  actionHref?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-end gap-6 border-b border-line pb-5 ${className}`}>
      <h2 className="display text-[30px] leading-none text-ink md:text-[42px]">{title}</h2>
      <span aria-hidden="true" className="mb-1.5 hidden h-px min-w-0 flex-1 bg-line sm:block" />
      {action ? (
        <div className="ml-auto shrink-0 sm:ml-0">
          <ArrowLink href={actionHref} className="text-ink-muted">
            {action}
          </ArrowLink>
        </div>
      ) : null}
    </div>
  );
}

export function EditorialHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h2 className={`display text-[36px] text-ink md:text-[52px] ${className}`}>{children}</h2>;
}
