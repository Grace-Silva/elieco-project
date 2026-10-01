import { createFileRoute } from "@tanstack/react-router";
import { WireframeApp } from "@/components/wireframe-app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wireframes e-commerce — Elieco" },
      { name: "description", content: "Prototipo navegable de escritorio y móvil para la tienda sostenible Elieco." },
      { property: "og:title", content: "Wireframes e-commerce — Elieco" },
      { property: "og:description", content: "Recorridos de compra, personalización, comunidad y contacto para Elieco." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <WireframeApp />;
}
