import { createFileRoute } from "@tanstack/react-router";

import { AuraHeader } from "@/components/aura/AuraHeader";
import { AuraHero } from "@/components/aura/AuraHero";
import { BrandManifesto } from "@/components/aura/BrandManifesto";
import { AuraDetails } from "@/components/aura/AuraDetails";
import { FeaturedCollection } from "@/components/aura/FeaturedCollection";
import { ProductShelf } from "@/components/aura/ProductShelf";
import { LookAura } from "@/components/aura/LookAura";
import { CategoryDiscovery } from "@/components/aura/CategoryDiscovery";
import { StorePickup } from "@/components/aura/StorePickup";
import { BrandStory } from "@/components/aura/BrandStory";
import { InstagramGallery } from "@/components/aura/InstagramGallery";
import { AuraFooter } from "@/components/aura/AuraFooter";

const title = "AURA Acessórios — Joias e acessórios autorais";
const description =
  "Peças autorais em dourado que iluminam sua presença. Coleção Luminar, curadoria AURA e retirada na loja em Viçosa/MG.";

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
    <div className="min-h-screen bg-background">
      <AuraHeader />
      <main>
        <AuraHero />
        <BrandManifesto />
        <AuraDetails />
        <FeaturedCollection />
        <ProductShelf />
        <LookAura />
        <CategoryDiscovery />
        <StorePickup />
        <BrandStory>
          <InstagramGallery />
        </BrandStory>
      </main>
      <AuraFooter />
    </div>
  );
}
