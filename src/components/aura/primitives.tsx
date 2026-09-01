import { useEffect, useRef, useState, type ReactNode } from "react";

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
      className={`group inline-flex items-center gap-3 label-xs text-ink transition-colors hover:text-gold-dark ${
        underline ? "border-b border-line pb-2" : ""
      } ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[5px]"
      >
        →
      </span>
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
    <div
      className={`flex items-center gap-4 border-b border-line-light pb-4 sm:gap-8 ${className}`}
    >
      <h2 className="label-xs shrink-0 text-ink">{title}</h2>
      <span aria-hidden="true" className="hidden h-px min-w-0 flex-1 bg-line-light sm:block" />
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
  return (
    <h2 className={`display text-[clamp(30px,3.2vw,48px)] text-ink ${className}`}>{children}</h2>
  );
}
