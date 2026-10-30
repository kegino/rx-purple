# Lotus IPTV — Site profissional completo

Vou construir o site Lotus IPTV em TanStack Start com foco em conversão, SEO e performance.

## Identidade visual
- Baixar a imagem de referência para `src/assets/hero-bg.jpg` e extrair paleta (tons escuros cinematográficos + accent quente para CTA — provavelmente vermelho/âmbar de alta conversão).
- Tema escuro premium com glassmorphism sutil, gradientes e sombras profundas.
- Tipografia: par moderno (ex.: Space Grotesk + Inter) via `<link>` no `__root`.
- Tokens em `src/styles.css` (oklch): background dark, primary de conversão, accent, gradientes, sombras.

## Estrutura de rotas (TanStack file-based)
```
src/routes/
  __root.tsx           → shell + Header/Footer + JSON-LD Organization/WebSite
  index.tsx            → Home (Hero AIDA, benefícios, planos preview, prova social, FAQ preview, CTA)
  planos.tsx
  beneficios.tsx
  como-funciona.tsx
  teste.tsx
  faq.tsx
  contato.tsx
  politica-de-privacidade.tsx
  termos-de-uso.tsx
  blog.index.tsx
  blog.$slug.tsx       → renderiza artigo de src/content/posts.ts
  sitemap[.]xml.ts     → atualizar com todas as rotas + posts
```

## Componentes compartilhados (`src/components/`)
- `SiteHeader` (nav sticky com blur), `SiteFooter`, `WhatsAppButton` (ícone SVG oficial, animação hover, link com sufixo dinâmico da keyword), `PlanCard`, `BenefitCard`, `FaqAccordion` (shadcn), `Breadcrumb`, `Hero`, `SectionHeading`, `Testimonials`, `JsonLd`.

## Hero
- Background: imagem baixada + overlay gradiente escuro (`from-black/90 via-black/70 to-black/50`).
- Headline AIDA agressiva, subheadline, CTAs "Fazer Teste" e "Assinar Agora" com ícone WhatsApp, prova social ⭐ 4,9/5 + 7.400+ clientes.

## Planos
- 4 cards (Mensal R$35, Trimestral R$90, Semestral R$170, Anual R$280) com lista completa de features, badge "Mais popular" no Anual, CTA WhatsApp.

## Blog (5 artigos, por último)
- Conteúdo em `src/content/posts.ts` (título, slug, description, imagem, corpo MDX-like via componente, FAQ, CTA).
- Artigos: "IPTV Sem Travar vale a pena?", "Como escolher um IPTV?", "IPTV para Smart TV", "IPTV para Futebol", "Guia completo sobre IPTV".
- Cada post: Breadcrumb, JSON-LD BlogPosting + FAQPage, links internos, CTA WhatsApp.

## SEO técnico
- `head()` por rota com title/description únicos, canonical relativo, OG, Twitter Card.
- JSON-LD via `scripts` no `head()`:
  - `__root`: Organization, WebSite (com SearchAction)
  - Home: Service + Offer + AggregateRating + FAQPage
  - Planos: ItemList/OfferCatalog
  - FAQ: FAQPage
  - Blog posts: BlogPosting + BreadcrumbList + FAQPage
  - Contato: ContactPoint
- `sitemap[.]xml.ts` atualizado com todas as rotas + posts, BASE_URL `https://lotusiptv.website`.
- `public/robots.txt` com `Sitemap:` apontando para o domínio.
- `public/site.webmanifest`.
- Favicon: gerar SVG simples com iniciais "X" no accent color + PNGs derivados.

## Palavras-chave (hub semântico)
Principal: **Lotus IPTV**. Secundárias: iptv sem travar, iptv 4k, iptv smart tv, iptv android, iptv futebol, lista iptv, teste iptv grátis, melhor iptv. Distribuídas em H1/H2, meta, alt, âncoras internas.

## WhatsApp
Helper `whatsappUrl(keyword)` que monta `https://api.whatsapp.com/send?phone=5545999064377&text=Olá,%20Gostaria%20de%20falar%20sobre%20o%20{keyword}` — cada botão passa a keyword contextual (Teste, Plano Anual, Suporte, Lotus IPTV, etc.).

## Acessibilidade e performance
- `<main>` único por rota, hierarquia H1→H6, alt em todas imagens, aria-labels nos ícones, contraste WCAG AA, `loading="lazy"` e `decoding="async"` em imagens não-hero, width/height definidos, fontes via `<link rel="preconnect">`.

## Deploy — Dockerfile para EasyPanel
- `Dockerfile` multi-stage: builder (bun install + bun run build) → runner (node:20-alpine servindo `.output/server/index.mjs` na porta 3000).
- `.dockerignore`.
- `easypanel` recebe apenas o repo + Dockerfile.

## Ordem de execução
1. Baixar imagem hero + gerar favicon.
2. Tokens de tema em `styles.css` + tipografia no `__root`.
3. Helpers (`whatsapp.ts`, `seo.ts`, `JsonLd.tsx`).
4. Header/Footer + WhatsAppButton.
5. Home com Hero + Planos + Benefícios + FAQ preview.
6. Páginas: Planos, Benefícios, Como Funciona, Teste, FAQ, Contato, Privacidade, Termos.
7. Blog (index + 5 posts).
8. Sitemap + robots.txt + manifest.
9. Dockerfile + .dockerignore.
10. Revisão final (a11y, SEO, links).

## Detalhes técnicos
- Tudo é frontend estático — sem backend/DB, sem Lovable Cloud (não solicitado).
- Imagens externas (TMDB) baixadas localmente e convertidas para uso via `import` (Vite serve otimizado). Para outras imagens do blog, uso ilustrações geradas ou placeholders WebP.
- Canonical relativo (`/planos`) — funciona sob `lotusiptv.website` após deploy.
- Sem dependências extras além do que já está no template + `lucide-react` (já disponível).

Confirma que posso seguir?