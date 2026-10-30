import { createFileRoute } from "@tanstack/react-router";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";

const TITLE = "Política de Privacidade — RX Purple";
const DESCRIPTION = "Política de Privacidade do RX Purple: saiba como tratamos e protegemos seus dados pessoais de acordo com a LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/politica-de-privacidade" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Política de Privacidade", item: `${SITE_URL}/politica-de-privacidade` },
          ],
        }),
      },
    ],
  }),
  component: PoliticaDePrivacidadePage,
});

function PoliticaDePrivacidadePage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Política de Privacidade" }]} />
      </div>
      <section className="container-page pb-24 max-w-3xl">
        <SectionHeading eyebrow="Transparência" title="Política de Privacidade" />
        <div className="mt-10 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <p>Esta Política de Privacidade descreve como o <strong>RX Purple</strong> coleta, armazena, utiliza e protege os dados dos usuários que acessam o site <strong>https://rxpurple.website</strong> e contratam nossos serviços.</p>
          <h2 className="font-display text-lg font-semibold text-foreground">1. Coleta de Informações</h2>
          <p>Coletamos apenas as informações estritamente necessárias para a prestação do serviço e atendimento ao cliente, como número de WhatsApp, comprovantes de pagamento e identificadores técnicos do aplicativo utilizado.</p>
          <h2 className="font-display text-lg font-semibold text-foreground">2. Uso dos Dados</h2>
          <p>Seus dados são utilizados exclusivamente para liberação do acesso, envio de instruções de configuração, avisos sobre o serviço e suporte técnico. Nunca vendemos, alugamos ou compartilhamos dados com terceiros para fins de publicidade.</p>
          <h2 className="font-display text-lg font-semibold text-foreground">3. Segurança</h2>
          <p>Adotamos medidas de segurança técnicas e administrativas compatíveis com os padrões do mercado para proteger suas informações contra acessos não autorizados e vazamentos.</p>
          <h2 className="font-display text-lg font-semibold text-foreground">4. Seus Direitos (LGPD)</h2>
          <p>Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de solicitar a confirmação, correção ou exclusão dos seus dados cadastrais a qualquer momento pelo nosso canal oficial de atendimento.</p>
        </div>
      </section>
    </div>
  );
}
