import { createFileRoute } from "@tanstack/react-router";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";

const TITLE = "Termos de Uso — RX Purple";
const DESCRIPTION = "Termos de Uso do serviço RX Purple: condições gerais de contratação, utilização do player e responsabilidades.";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/termos-de-uso" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Termos de Uso", item: `${SITE_URL}/termos-de-uso` },
          ],
        }),
      },
    ],
  }),
  component: TermosDeUsoPage,
});

function TermosDeUsoPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Termos de Uso" }]} />
      </div>
      <section className="container-page pb-24 max-w-3xl">
        <SectionHeading eyebrow="Contrato" title="Termos de Uso" />
        <div className="mt-10 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <p>Ao contratar e utilizar os serviços do <strong>RX Purple</strong>, você concorda com os termos e condições descritos neste documento.</p>
          <h2 className="font-display text-lg font-semibold text-foreground">1. Objeto do Serviço</h2>
          <p>O RX Purple disponibiliza tecnologia de player e listas de acesso para reprodução de conteúdo de mídia pela internet (IPTV) em dispositivos compatíveis.</p>
          <h2 className="font-display text-lg font-semibold text-foreground">2. Uso e Telas Simultâneas</h2>
          <p>Cada assinatura contratada dá direito ao uso simultâneo de 2 telas. O compartilhamento indevido de acessos com terceiros além do limite contratado poderá acarretar bloqueio temporário por segurança.</p>
          <h2 className="font-display text-lg font-semibold text-foreground">3. Requisitos de Conexão</h2>
          <p>A estabilidade e qualidade da transmissão em 4K e Full HD dependem de uma conexão de internet banda larga estável fornecida pelo provedor do usuário.</p>
          <h2 className="font-display text-lg font-semibold text-foreground">4. Suporte e Renovação</h2>
          <p>O suporte técnico é prestado via WhatsApp em horário comercial estendido. As assinaturas são pré-pagas sem fidelidade ou renovação automática obrigatória.</p>
        </div>
      </section>
    </div>
  );
}
