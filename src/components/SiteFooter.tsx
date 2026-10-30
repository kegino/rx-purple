import { Link } from "@tanstack/react-router";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/5 bg-background">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <img src="/logo-rx.webp" alt="RX Purple" width={36} height={36} loading="lazy" className="size-9 drop-shadow-[0_0_12px_color-mix(in_oklab,var(--primary)_50%,transparent)]" />
            <span>RX Purple</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            RX Purple é a plataforma definitiva de streaming IPTV em 4K. Servidores H265 ultrarrápidos, grade completa de futebol, filmes e séries sem travamento e atendimento humanizado todos os dias pelo WhatsApp.
          </p>
          <div className="mt-6">
            <WhatsAppButton keyword="RX Purple" label="Falar no WhatsApp" size="sm" />
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-wider text-foreground uppercase">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/planos" className="hover:text-foreground">Planos RX Purple</Link></li>
            <li><Link to="/beneficios" className="hover:text-foreground">Benefícios</Link></li>
            <li><Link to="/como-funciona" className="hover:text-foreground">Como Funciona</Link></li>
            <li><Link to="/teste" className="hover:text-foreground">Teste Grátis</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog IPTV</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">Perguntas Frequentes</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-wider text-foreground uppercase">Legal</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contato" className="hover:text-foreground">Contato</Link></li>
            <li><Link to="/politica-de-privacidade" className="hover:text-foreground">Política de Privacidade</Link></li>
            <li><Link to="/termos-de-uso" className="hover:text-foreground">Termos de Uso</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-page py-6 text-center text-xs text-muted-foreground">
          © {year} RX Purple. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
