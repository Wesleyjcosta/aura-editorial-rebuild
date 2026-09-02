"use client";

import { useEffect, useRef, type CSSProperties } from "react";

export interface MetroHeroProps {
  imageSrc?: string;
  videoSrc?: string;
  title?: string;
  scrollHint?: string;
  tagline?: string;
  signature?: { name: string; url: string } | false;
  scrubDistance?: number;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

const DEFAULT_IMAGE = "/aura-jewel-hero-3d.png";

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

function lerp(current: number, target: number, amount: number) {
  return current + (target - current) * amount;
}

export default function MetroHero({
  imageSrc = DEFAULT_IMAGE,
  videoSrc,
  scrollHint = "DESLIZE",
  tagline = "O detalhe muda tudo.",
  scrubDistance = 2400,
  id,
  className = "",
  style,
}: MetroHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let rafId = 0;
    let targetProgress = reduceMotion ? 1 : 0;
    let currentProgress = targetProgress;
    let touchStartY = 0;
    let hasStartedScrolling = false;

    function applyScene(progress: number) {
      const safeProgress = clamp(progress, 0, 1);

      if (imageRef.current) {
        const scale = 1.12 + safeProgress * 0.1;
        const y = safeProgress * -20;
        imageRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
        imageRef.current.style.filter = `saturate(${1 + safeProgress * 0.08}) contrast(${
          1.02 + safeProgress * 0.04
        })`;
      }

      if (titleRef.current) {
        const fade = 1 - clamp(safeProgress / 0.45, 0, 1);
        titleRef.current.style.opacity = String(fade);
        titleRef.current.style.transform = `translateY(${(1 - fade) * -20}px)`;
        titleRef.current.style.filter = `blur(${(1 - fade) * 7}px)`;
      }

      if (taglineRef.current) {
        const reveal = clamp((safeProgress - 0.58) / 0.3, 0, 1);
        taglineRef.current.style.opacity = String(reveal);
        taglineRef.current.style.transform = `translateY(${(1 - reveal) * 18}px)`;
        taglineRef.current.style.filter = `blur(${(1 - reveal) * 7}px)`;
      }

      if (hintRef.current) {
        hintRef.current.style.opacity = hasStartedScrolling || safeProgress >= 1 ? "0" : "1";
      }

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${safeProgress})`;
      }
    }

    function canControlScroll(deltaY: number) {
      if (reduceMotion || deltaY === 0) return false;

      const rect = section.getBoundingClientRect();
      const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
      if (!isVisible) return false;

      const isAtHeroGate = window.scrollY <= section.offsetTop + 2;
      const canScrubForward = deltaY > 0 && targetProgress < 1;
      const canScrubBackward = deltaY < 0 && targetProgress > 0;

      return isAtHeroGate && (canScrubForward || canScrubBackward);
    }

    function addDelta(deltaY: number) {
      targetProgress = clamp(targetProgress + deltaY / scrubDistance, 0, 1);
      if (targetProgress > 0.001) hasStartedScrolling = true;
      applyScene(currentProgress);
    }

    const onWheel = (e: WheelEvent) => {
      if (!canControlScroll(e.deltaY)) return;
      addDelta(e.deltaY);
      e.preventDefault();
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? touchStartY;
      const deltaY = touchStartY - y;
      if (!canControlScroll(deltaY)) {
        touchStartY = y;
        return;
      }

      touchStartY = y;
      addDelta(deltaY);
      e.preventDefault();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    applyScene(targetProgress);

    function frame() {
      currentProgress = lerp(currentProgress, targetProgress, 0.12);
      applyScene(currentProgress);
      rafId = requestAnimationFrame(frame);
    }

    if (!reduceMotion) {
      rafId = requestAnimationFrame(frame);
    }

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(rafId);
    };
  }, [scrubDistance]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative isolate overflow-hidden bg-coal text-white ${className}`}
      style={{
        height: "calc(100svh - 105px)",
        minHeight: "640px",
        ...style,
      }}
    >
      <img
        ref={imageRef}
        src={videoSrc || imageSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full object-cover object-[54%_54%]"
        style={{
          height: "calc(100% + 72px)",
          transform: "translate3d(0, 0, 0) scale(1.12)",
          transformOrigin: "50% 54%",
          willChange: "transform, filter",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,5,0.36),rgba(6,6,5,0.02)_42%,rgba(6,6,5,0.72)),linear-gradient(90deg,rgba(6,6,5,0.72),rgba(6,6,5,0.06)_50%,rgba(6,6,5,0.5))]" />

      <div className="aura-container relative z-10 flex h-full flex-col justify-between py-8 md:py-10 lg:py-12">
        <div className="flex items-center justify-between gap-6 text-[9px] font-medium uppercase text-white/75">
          <span>AURA Acessórios</span>
          <span className="hidden sm:block">Peça única · Render 3D</span>
        </div>

        <div
          ref={titleRef}
          className="pointer-events-none flex-1 will-change-transform"
          aria-hidden="true"
        />

        <div
          ref={taglineRef}
          className="pointer-events-none absolute right-0 bottom-[15vh] left-0 px-6 text-center opacity-0 will-change-transform"
        >
          <p className="display mx-auto max-w-[760px] text-[34px] leading-[1.04] text-white md:text-[58px]">
            {tagline}
          </p>
        </div>

        <div
          ref={hintRef}
          className="mx-auto flex flex-col items-center gap-2 text-[10px] font-medium uppercase text-white/70 transition-opacity duration-500"
        >
          <span>{scrollHint}</span>
          <span className="h-8 w-px origin-top bg-white/55 motion-safe:animate-pulse" aria-hidden="true" />
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 z-20 h-0.5 bg-white/10">
        <div
          ref={progressBarRef}
          className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[#c88b37] via-[#ffe1a0] to-white"
        />
      </div>
    </section>
  );
}
