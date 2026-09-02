import { createFileRoute } from "@tanstack/react-router";

import { AuraHeader } from "@/components/aura/AuraHeader";
import { AuraHero } from "@/components/aura/AuraHero";
import { BrandManifesto } from "@/components/aura/BrandManifesto";
import { StorePickup } from "@/components/aura/StorePickup";
import { AuraFooter } from "@/components/aura/AuraFooter";
import { CartBar } from "@/components/catalog/CartBar";
import { CartSheet } from "@/components/catalog/CartSheet";
import { CatalogExperience } from "@/components/catalog/CatalogExperience";
import { CartProvider, useCart } from "@/lib/cart";
import { useState } from "react";
import { Toaster } from "sonner";

const title = "AURA Acessórios — Joias e acessórios autorais";
const description =
  "Conheça os produtos disponíveis na AURA Acessórios e reserve suas peças para retirada na loja em Viçosa/MG.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <Storefront />
    </CartProvider>
  );
}

function Storefront() {
  const [cartOpen, setCartOpen] = useState(false);
  const { count } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <AuraHeader cartCount={count} onCartOpen={() => setCartOpen(true)} />
      <main>
        <AuraHero />
        <CatalogExperience onCartOpen={() => setCartOpen(true)} />
        <BrandManifesto />
        <StorePickup />
      </main>
      <AuraFooter />
      {count ? <div className="h-14 bg-coal sm:h-16" aria-hidden="true" /> : null}
      <CartBar onOpen={() => setCartOpen(true)} />
      <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} />
      <Toaster position="top-center" closeButton />
    </div>
  );
}
