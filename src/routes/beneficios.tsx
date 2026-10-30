import { createFileRoute } from "@tanstack/react-router";
import { Zap, Tv, Film, Trophy, ShieldCheck, Headphones, Smartphone, Sparkles, Server, Wifi } from "lucide-react";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Benefícios do RX Purple — Por que somos a melhor escolha em IPTV";
const DESCRIPTION =
  "Descubra os diferenciais do RX Purple: servidores H265 de alta densidade no Brasil, 35.000 canais em 4K, 2 telas simultâneas e suporte humano.";

const VANTAGENS = [
  { icon: Zap, title: "Streaming sem travamentos", desc: "Rede CDN com servidores espalhados pelo Brasil garante sinal contínuo até nas finais mais assistidas do futebol." },
  { icon: Tv, title: "Mais de 35.000 canais", desc: "Grade completa de canais nacionais e internacionais em 4K, Full HD e HD sempre com áudio e imagem limpos." },
  { icon: Film, title: "Catálogo completo sob demanda", desc: "Milhares de filmes e séries recém-saídos do cinema, com opções dubladas e legendadas atualizadas todo dia." },
  { icon: Trophy, title: "Esportes e todos os pay-per-view", desc: "Todos os campeonatos de futebol, UFC, F1, NBA e ligas europeias inclusos em qualquer plano sem taxa extra." },
  { icon: Smartphone, title: "Compatível com tudo", desc: "Use no seu televisor Samsung, LG, Android TV, TV Box, Fire Stick, iPhone, iPad, celular ou computador." },
  { icon: ShieldCheck, title: "2 telas simultâneas inclusas", desc: "Assista com sua família em dois dispositivos diferentes ao mesmo tempo sem pagar adicionais." },
  { icon: Server, title: "Codec H.265 de última geração", desc: "Gasta até metade da banda de internet em comparação a sistemas antigos, garantindo máxima fluidez." },
  { icon: Headphones, title: "Suporte todos os dias", desc: "Equipe especializada pronta para ajudar na instalação, configuração do player e renovação de acesso." },
];

export const Route = createFileRoute("/beneficios")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/beneficios" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Benefícios", item: `${SITE_URL}/beneficios` },
          ],
        }),
      },
    ],
  }),
  component: BeneficiosPage,
});

function BeneficiosPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Benefícios" }]} />
      </div>
      <section className="container-page pb-24">
        <SectionHeading
          eyebrow="Vantagens Exclusivas"
          title={<>Tudo o que você espera de uma <span className="gradient-text">TV do futuro</span></>}
          description="Desenvolvemos o RX Purple para entregar qualidade incomparável, acabando com as frustrações de listas comuns."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VANTAGENS.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
              <div className="grid size-12 place-items-center rounded-xl bg-primary/20 text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <WhatsAppButton keyword="Quero testar benefícios RX Purple" label="Solicitar Teste Grátis no WhatsApp" variant="whatsapp" size="lg" />
        </div>
      </section>
    </div>
  );
}
