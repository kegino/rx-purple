import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, ShieldCheck, Tv, Film, Trophy, Headphones, Sparkles, ArrowRight } from "lucide-react";
import { canonicalUrl, pageMeta, SITE_URL } from "@/lib/seo";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { PlanCard, PLANS } from "@/components/PlanCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HOME_FAQ } from "@/content/faq";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { POSTS } from "@/content/posts";

const HERO_BG = "/hero-bg.webp";

const TITLE = "RX Purple — Player IPTV Premium sem travar com 35.000+ canais em 4K";
const DESCRIPTION =
  "RX Purple: o player IPTV mais rápido do Brasil com 35.000+ canais, filmes, séries e futebol em 4K. Servidores H265 anti-travamento, 2 telas inclusas e teste grátis no WhatsApp.";

const BENEFITS = [
  { icon: Zap, title: "Transmissão sem travamentos", desc: "Servidores H265 de alta densidade com CDN no Brasil para estabilidade real até nos maiores clássicos de futebol." },
  { icon: Tv, title: "35.000+ canais ao vivo", desc: "Grade nacional e internacional em 4K, Full HD e HD sempre atualizada com canais abertos e fechados." },
  { icon: Film, title: "Catálogo de filmes e séries", desc: "Mais de 80.000 títulos atualizados toda semana com os lançamentos mais recentes dublados e legendados." },
  { icon: Trophy, title: "Futebol e pay-per-view", desc: "Brasileirão, Copa do Brasil, Champions League, UFC, Libertadores e F1 com narração oficial sem corte." },
  { icon: ShieldCheck, title: "2 telas simultâneas inclusas", desc: "Assista na Smart TV da sala e no celular ou TV Box do quarto ao mesmo tempo sem pagar taxa extra." },
  { icon: Headphones, title: "Suporte humanizado no WhatsApp", desc: "Atendimento especializado todos os dias da semana para instalar, configurar e tirar qualquer dúvida." },
];

const STEPS = [
  { n: "01", title: "Escolha seu plano RX Purple", desc: "Selecione o período que melhor atende sua família: mensal, trimestral, semestral ou anual com desconto." },
  { n: "02", title: "Receba o acesso no WhatsApp", desc: "Nosso time envia seus dados de login, lista M3U e aplicativo oficial de forma imediata." },
  { n: "03", title: "Aproveite em qualquer tela", desc: "Abra o player na sua Smart TV, TV Box ou celular e comece a assistir em resolução 4K na mesma hora." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: "/",
      image: "/og-image.webp",
    }),
    links: [
      { rel: "canonical", href: canonicalUrl("/") },
      { rel: "preload", as: "image", href: HERO_BG, type: "image/webp", fetchpriority: "high" } as any,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "RX Purple — Player IPTV Premium",
          category: "Streaming IPTV",
          brand: { "@type": "Brand", name: "RX Purple" },
          description: DESCRIPTION,
          image: `${SITE_URL}/og-image.webp`,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            reviewCount: "8240",
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "BRL",
            lowPrice: "35",
            highPrice: "280",
            offerCount: PLANS.length,
            url: `${SITE_URL}/planos`,
            availability: "https://schema.org/InStock",
            offers: PLANS.map((p) => ({
              "@type": "Offer",
              name: `RX Purple ${p.name}`,
              price: p.price.replace(/[^\d]/g, ""),
              priceCurrency: "BRL",
              url: `${SITE_URL}/planos`,
              availability: "https://schema.org/InStock",
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQ.map((f) => ({
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
          "@type": "ItemList",
          name: "Últimos artigos do blog RX Purple",
          itemListElement: POSTS.slice(0, 6).map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/blog/${p.slug}`,
            name: p.title,
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />

      {/* Benefícios */}
      <section className="container-page py-24 sm:py-32">
        <SectionHeading
          eyebrow="Por que escolher o RX Purple"
          title={<>A tecnologia de IPTV que <span className="gradient-text">funciona de verdade</span></>}
          description="Diga adeus ao buffering e às listas amadoras que travam no meio do jogo. No RX Purple você tem infraestrutura de ponta."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
              <div className="grid size-11 place-items-center rounded-xl bg-primary/20 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="container-page py-20 border-t border-white/5">
        <SectionHeading
          eyebrow="Planos RX Purple"
          title={<>Preços justos <span className="gradient-text">sem pegadinhas</span></>}
          description="Todos os planos contam com a mesma grade completa de 35.000+ canais em 4K e 2 telas simultâneas inclusas."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => <PlanCard key={p.id} plan={p} />)}
        </div>
      </section>

      {/* Passos de ativação */}
      <section className="container-page py-24 border-t border-white/5">
        <SectionHeading
          eyebrow="Como funciona"
          title="Ativação imediata em 3 etapas simples"
          description="Você não precisa ser técnico. Em poucos minutos o RX Purple estará rodando na sua Smart TV."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="glass-card rounded-2xl p-8 transition-all hover:border-primary/30">
              <span className="font-display text-4xl font-bold gradient-text">{s.n}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner de Teste */}
      <section className="container-page py-16">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/20 via-card to-accent/20 p-8 sm:p-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3.5 py-1 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" /> Teste sem custo
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
            Teste o RX Purple agora mesmo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground sm:text-lg">
            Peça um teste grátis no WhatsApp e veja por que milhares de assinantes escolheram a estabilidade do RX Purple.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton keyword="Teste Grátis RX Purple" label="Solicitar Teste Grátis" variant="whatsapp" size="lg" />
            <WhatsAppButton keyword="Assinatura RX Purple" label="Assinar Agora" variant="primary" size="lg" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-20 border-t border-white/5">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Tudo o que você precisa saber sobre o RX Purple"
          description="Dúvidas comuns sobre instalação, aparelhos compatíveis, suporte e formas de pagamento."
        />
        <div className="mt-12 max-w-3xl mx-auto">
          <FaqAccordion items={HOME_FAQ} />
        </div>
      </section>

      {/* Artigos em Destaque */}
      <section className="container-page py-20 border-t border-white/5">
        <div className="flex items-end justify-between">
          <SectionHeading
            align="left"
            eyebrow="Blog RX Purple"
            title="Dicas e tutoriais sobre IPTV"
            description="Aprenda a configurar seu player, otimizar sua conexão e tirar o máximo proveito da sua Smart TV."
          />
          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Ver todos os artigos <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.slice(0, 3).map((p) => (
            <article key={p.slug} className="glass-card flex flex-col rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/30">
              <img src={p.image} alt={p.imageAlt} width={640} height={360} loading="lazy" className="h-44 w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.category}</span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug line-clamp-2">
                  <Link to={`/blog/${p.slug}`} className="hover:text-primary transition-colors">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-3 leading-relaxed">{p.description}</p>
                <div className="mt-auto pt-4 flex items-center justify-between text-xs text-muted-foreground border-t border-white/5">
                  <span>{p.readTime} de leitura</span>
                  <Link to={`/blog/${p.slug}`} className="text-primary font-semibold hover:underline">
                    Ler artigo →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
