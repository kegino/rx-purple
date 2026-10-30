import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, ArrowLeft } from "lucide-react";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getPost, POSTS } from "@/content/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Artigo não encontrado — RX Purple" }, { name: "robots", content: "noindex" }],
      };
    }
    const path = `/blog/${params.slug}`;
    return {
      ...pageMeta({
        title: `${loaderData.title} — Blog RX Purple`,
        description: loaderData.description,
        path,
        image: loaderData.image,
        ogType: "article",
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: loaderData.title,
            description: loaderData.description,
            image: loaderData.image.startsWith("http") ? loaderData.image : `${SITE_URL}${loaderData.image}`,
            datePublished: loaderData.date,
            dateModified: loaderData.date,
            author: { "@type": "Organization", name: loaderData.author, url: SITE_URL },
            publisher: {
              "@type": "Organization",
              name: "RX Purple",
              logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon-512.png` },
            },
            mainEntityOfPage: `${SITE_URL}${path}`,
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
              { "@type": "ListItem", position: 3, name: loaderData.title, item: `${SITE_URL}${path}` },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: loaderData.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="pt-24">
      <div className="container-page py-10">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.title }]} />
      </div>

      <header className="container-page pb-8 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" /> Voltar ao blog RX Purple
        </Link>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl max-w-4xl mx-auto leading-[1.1]">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>Por <strong className="text-foreground">{post.author}</strong></span>
          <span>•</span>
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden="true" /> {post.readTime}
          </span>
          <span>•</span>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
            {post.category}
          </span>
        </div>
      </header>

      <figure className="container-page mt-6 max-w-5xl">
        <div className="aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 glass-card">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1280}
            height={720}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>
      </figure>

      <div className="container-page mt-10 pb-16">
        <div className="mx-auto max-w-3xl space-y-5 text-lg text-muted-foreground leading-relaxed">
          {post.body.map((paragraph: string, i: number) => (<p key={i}>{paragraph}</p>))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl glass-card rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Pronto para testar o RX Purple?</h2>
            <p className="mt-2 text-muted-foreground">Teste grátis, sem cartão, ativação imediata no WhatsApp.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppButton keyword={`Teste RX Purple via ${post.slug}`} label="Fazer Teste Grátis" variant="whatsapp" />
              <WhatsAppButton keyword={`Assinatura RX Purple via ${post.slug}`} label="Assinar Agora" variant="primary" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Perguntas frequentes</h2>
          <div className="mt-6"><FaqAccordion items={post.faq} /></div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Continue lendo</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group glass-card rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.imageAlt} loading="lazy" decoding="async" width={800} height={500} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
