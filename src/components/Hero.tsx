import { Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16">
      <img
        src={heroBg}
        alt="RX Purple — Player IPTV premium com filmes, séries e 35.000 canais em 4K"
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      {/* Camadas escuras calibradas para contraste total dos botões e títulos */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/90 via-background/65 to-background"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background/80 via-transparent to-background/80"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-black/35" aria-hidden="true" />

      <div className="container-page relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-300 backdrop-blur-md">
          <span className="size-2 rounded-full bg-whatsapp animate-pulse" aria-hidden="true" />
          Servidores H265 ativos — teste liberado no WhatsApp
        </div>

        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          RX Purple — <span className="gradient-text">Player IPTV em 4K</span>
          <span className="block text-foreground">com +35.000 canais sem travar</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          A experiência de streaming mais estável e rápida do Brasil. Canais ao vivo, futebol, filmes e lançamentos com tecnologia anti-buffering e ativação imediata a partir de <strong className="text-foreground">R$35</strong>.
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
          <WhatsAppButton
            keyword="Teste Grátis RX Purple"
            label="Fazer Teste Grátis"
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
          />
          <WhatsAppButton
            keyword="Assinatura RX Purple"
            label="Assinar Agora"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          />
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1" aria-label="Avaliação 4,9 de 5 estrelas">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
            <span className="ml-2 font-semibold text-foreground">4,9/5</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Mais de <strong className="text-foreground">8.200 clientes ativos</strong> assistindo no RX Purple
          </p>
        </div>
      </div>
    </section>
  );
}
