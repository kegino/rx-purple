import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Clock, ShieldCheck, Mail } from "lucide-react";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_PHONE } from "@/lib/whatsapp";

const TITLE = "Contato RX Purple — Suporte e Atendimento via WhatsApp";
const DESCRIPTION =
  "Entre em contato com a equipe do RX Purple. Atendimento humanizado todos os dias da semana para dúvidas, suporte técnico e ativações.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/contato" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contato RX Purple",
          url: `${SITE_URL}/contato`,
        }),
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Contato" }]} />
      </div>
      <section className="container-page pb-24">
        <SectionHeading
          eyebrow="Canal de Atendimento"
          title={<>Fale com o time do <span className="gradient-text">RX Purple</span></>}
          description="Nosso suporte é 100% humano e ágil diretamente no WhatsApp. Sem filas longas ou robôs complicados."
        />

        <div className="mt-14 max-w-2xl mx-auto glass-card rounded-3xl p-8 sm:p-12 text-center border border-primary/30">
          <div className="grid size-16 mx-auto place-items-center rounded-2xl bg-primary/20 text-primary">
            <MessageCircle className="size-8" />
          </div>
          <h2 className="mt-6 font-display text-2xl font-bold sm:text-3xl">WhatsApp Oficial</h2>
          <p className="mt-3 text-muted-foreground">
            Atendimento disponível todos os dias das 08h às 23h para ativação de planos, testes e suporte técnico.
          </p>

          <div className="mt-8 flex justify-center">
            <WhatsAppButton keyword="Contato direto RX Purple" label="Iniciar Conversa no WhatsApp" variant="whatsapp" size="lg" />
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-4 text-xs text-muted-foreground">
            <div className="flex items-center justify-center gap-1.5">
              <Clock className="size-4 text-primary" /> Resposta em poucos minutos
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck className="size-4 text-primary" /> Atendimento seguro
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
