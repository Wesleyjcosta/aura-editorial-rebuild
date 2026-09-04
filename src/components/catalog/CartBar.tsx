import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { brl } from "@/lib/catalog";

export function CartBar({ onOpen }: { onOpen: () => void }) {
  const { count, total } = useCart();
  if (count === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-2 pb-[max(6px,env(safe-area-inset-bottom))] sm:px-4 sm:pb-3">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Ver sacola com ${count} ${count === 1 ? "peça" : "peças"}, total ${brl(total)}`}
        className="pointer-events-auto flex min-h-12 w-full max-w-lg items-center gap-3 rounded-[2px] border border-foreground bg-foreground px-4 py-2 text-background shadow-lg transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:px-5"
      >
        <ShoppingBag className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />

        <span className="min-w-0 text-left">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-background/70">
            Sacola · {count} {count === 1 ? "peça" : "peças"}
          </span>
          <span className="block text-[11px] font-medium text-background">Ver seleção</span>
        </span>

        <span className="ml-auto shrink-0 text-sm font-semibold tabular-nums text-background">
          {brl(total)}
        </span>
        <span aria-hidden="true" className="text-base leading-none text-background/70">
          →
        </span>
      </button>
    </div>
  );
}
