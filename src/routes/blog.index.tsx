import { createFileRoute, Link } from "@tanstack/react-router";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { POSTS } from "@/content/posts";

const TITLE = "Blog RX Purple — Dicas, Tutoriais e Novidades sobre IPTV";
const DESCRIPTION =
  "Artigos e tutoriais completos sobre IPTV: como configurar em Smart TVs, otimização de conexão Wi-Fi, codecs H.265 e melhores práticas de streaming.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/blog" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog RX Purple",
          url: `${SITE_URL}/blog`,
          description: DESCRIPTION,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          ],
        }),
      },
    ],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Blog" }]} />
      </div>
      <section className="container-page pb-24">
        <SectionHeading
          eyebrow="Artigos e Tutoriais"
          title={<>Central de Conhecimento <span className="gradient-text">RX Purple</span></>}
          description="Conteúdo prático para você dominar a tecnologia de IPTV e extrair a máxima qualidade de imagem da sua Smart TV."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.slug} className="glass-card flex flex-col rounded-2xl overflow-hidden transition-all hover:-translate-y-1.5 hover:border-primary/40">
              <img src={p.image} alt={p.imageAlt} width={640} height={360} loading="lazy" className="h-48 w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <span className="font-semibold text-primary uppercase tracking-wider">{p.category}</span>
                  <span>{p.readTime}</span>
                </div>
                <h2 className="font-display text-xl font-bold leading-snug">
                  <Link to={`/blog/${p.slug}`} className="hover:text-primary transition-colors">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3 leading-relaxed">{p.description}</p>
                <div className="mt-auto pt-5 flex items-center justify-between text-xs border-t border-white/5">
                  <span className="text-muted-foreground">{p.date}</span>
                  <Link to={`/blog/${p.slug}`} className="text-primary font-semibold hover:underline">
                    Ler artigo completo →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
