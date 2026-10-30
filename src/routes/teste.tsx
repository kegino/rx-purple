import { createFileRoute } from "@tanstack/react-router";
import { Zap, Tv, CheckCircle2, MessageCircle } from "lucide-react";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Teste RX Purple Grátis — Peça seu Acesso Imediato no WhatsApp";
const DESCRIPTION =
  "Solicite seu teste grátis no RX Purple e experimente 35.000+ canais, futebol ao vivo e filmes em 4K sem travar. Ativação em minutos, sem cartão de crédito.";

const VANTAGENS_TESTE = [
  "Acesso total à grade de 35.000+ canais em 4K e Full HD",
  "Todos os canais de futebol e pay-per-view liberados",
  "Catálogo completo de filmes e séries sob demanda",
  "Zero custo e sem necessidade de cartão de crédito",
  "Suporte guiado pelo WhatsApp para instalar em minutos",
  "Comprovação real da estabilidade sem travamentos",
];

export const Route = createFileRoute("/teste")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/teste" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Teste Grátis", item: `${SITE_URL}/teste` },
          ],
        }),
      },
    ],
  }),
  component: TestePage,
});

function TestePage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Teste Grátis" }]} />
      </div>
      <section className="container-page pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            eyebrow="Teste Sem Compromisso"
            title={<>Experimente o RX Purple <span className="gradient-text">sem pagar nada</span></>}
            description="Tire a prova real da nossa qualidade. Assista aos seus programas favoritos em 4K e veja por que quem testa o RX Purple aprova."
          />

          <div className="mt-12 glass-card rounded-3xl p-8 sm:p-12 border border-primary/30">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">O que você vai receber no teste gratuito:</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 text-left">
              {VANTAGENS_TESTE.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton keyword="Teste Grátis RX Purple Página" label="Solicitar Teste Imediato no WhatsApp" variant="whatsapp" size="lg" />
              <WhatsAppButton keyword="Assinatura Direta RX Purple" label="Ver Planos e Assinar" variant="primary" size="lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
