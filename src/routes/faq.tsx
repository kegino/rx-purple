import { createFileRoute } from "@tanstack/react-router";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FULL_FAQ } from "@/content/faq";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "FAQ RX Purple — Perguntas Frequentes sobre IPTV e Instalação";
const DESCRIPTION =
  "Tire todas as suas dúvidas sobre o RX Purple: aparelhos compatíveis, velocidade de internet, teste grátis, qualidade 4K e suporte via WhatsApp.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/faq" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FULL_FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
          ],
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "FAQ" }]} />
      </div>
      <section className="container-page pb-24">
        <SectionHeading
          eyebrow="Tire suas Dúvidas"
          title={<>Perguntas Frequentes sobre o <span className="gradient-text">RX Purple</span></>}
          description="Reunimos as respostas para as perguntas mais comuns dos nossos clientes para você assinar com total segurança."
        />
        <div className="mt-14 max-w-3xl mx-auto">
          <FaqAccordion items={FULL_FAQ} />
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Ainda tem alguma pergunta específica?</p>
          <WhatsAppButton keyword="Dúvida específica FAQ RX Purple" label="Falar com o Suporte RX Purple" variant="whatsapp" size="lg" />
        </div>
      </section>
    </div>
  );
}
