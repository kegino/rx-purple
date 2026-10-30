import { createFileRoute } from "@tanstack/react-router";
import { Download, Tv, KeyRound, PlayCircle } from "lucide-react";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Como Funciona o RX Purple — Passo a Passo para Assistir em Minutos";
const DESCRIPTION =
  "Veja como é simples começar a usar o RX Purple. Ativação via WhatsApp em minutos, instalação guiada e suporte para qualquer Smart TV.";

const ETAPAS = [
  { icon: KeyRound, n: "01", title: "Escolha o seu plano", desc: "Selecione o plano ideal para você no site e fale com nosso atendimento pelo WhatsApp." },
  { icon: Download, n: "02", title: "Receba as instruções", desc: "Enviamos o passo a passo com o aplicativo oficial e as credenciais prontas para o seu aparelho." },
  { icon: Tv, n: "03", title: "Configure em poucos cliques", desc: "Basta inserir seu usuário e senha no player do seu televisor, TV Box ou smartphone." },
  { icon: PlayCircle, n: "04", title: "Aproveite em 4K", desc: "Grade completa de 35.000+ canais, futebol e estreias de cinema liberados imediatamente." },
];

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/como-funciona" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Como Funciona", item: `${SITE_URL}/como-funciona` },
          ],
        }),
      },
    ],
  }),
  component: ComoFuncionaPage,
});

function ComoFuncionaPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Como Funciona" }]} />
      </div>
      <section className="container-page pb-24">
        <SectionHeading
          eyebrow="Passo a Passo"
          title={<>Ativação rápida <span className="gradient-text">sem enrolação</span></>}
          description="Você não precisa de aparelhos adicionais caros nem de técnico na sua casa. Tudo funciona pela internet em minutos."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ETAPAS.map((e) => (
            <div key={e.n} className="glass-card rounded-2xl p-7 transition-all hover:border-primary/40">
              <span className="font-display text-4xl font-bold gradient-text">{e.n}</span>
              <h2 className="mt-4 font-display text-xl font-semibold">{e.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Quer ver funcionando agora mesmo?</h2>
          <p className="mt-3 text-muted-foreground">Solicite um teste sem compromisso no WhatsApp e confira a qualidade antes de assinar.</p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton keyword="Teste Grátis Como Funciona RX Purple" label="Solicitar Teste Grátis no WhatsApp" variant="whatsapp" size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
