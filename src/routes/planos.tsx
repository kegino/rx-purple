import { createFileRoute } from "@tanstack/react-router";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { PlanCard, PLANS } from "@/components/PlanCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Planos RX Purple — Preços a partir de R$35/mês com 2 Telas";
const DESCRIPTION =
  "Confira os planos do RX Purple: mensal R$35, trimestral R$90, semestral R$170 e anual R$280. Mais de 35.000 canais em 4K, futebol ao vivo, filmes e séries sem travamento.";

export const Route = createFileRoute("/planos")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/planos" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Planos RX Purple",
          url: `${SITE_URL}/planos`,
          itemListElement: PLANS.map((p, i) => ({
            "@type": "Offer",
            position: i + 1,
            name: `RX Purple ${p.name}`,
            price: p.price.replace("R$", "").replace(/\s/g, ""),
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/planos`,
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
            { "@type": "ListItem", position: 2, name: "Planos", item: `${SITE_URL}/planos` },
          ],
        }),
      },
    ],
  }),
  component: PlanosPage,
});

function PlanosPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Planos" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Planos de Assinatura"
          title={<>Escolha o seu plano <span className="gradient-text">RX Purple</span></>}
          description="Acesso total a todos os canais em 4K, pay-per-view de esportes e lançamentos. Todos os planos contam com 2 telas simultâneas inclusas."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => <PlanCard key={p.id} plan={p} />)}
        </div>

        <div className="mt-16 glass-card rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Dúvidas sobre qual plano assinar?</h2>
          <p className="mt-3 text-muted-foreground">Fale com um dos nossos atendentes no WhatsApp e receba suporte na hora para escolher a melhor opção.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton keyword="Dúvidas sobre Planos RX Purple" label="Falar com atendente" variant="whatsapp" />
            <WhatsAppButton keyword="Teste RX Purple" label="Fazer Teste Grátis" variant="primary" />
          </div>
        </div>
      </section>
    </div>
  );
}
