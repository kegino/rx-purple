import { Check, Star } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  keyword: string;
  featured?: boolean;
  badge?: string;
}

export const PLAN_FEATURES = [
  "35.000+ Canais ao vivo em 4K/FHD",
  "2 telas simultâneas inclusas",
  "Filmes e Séries atualizados diariamente",
  "Qualidade 4K, Full HD, HD e SD",
  "Futebol ao vivo e todos os pay-per-view",
  "Desenhos animados e canais infantis",
  "Categoria Adulto (+18) com senha opcional",
  "Conteúdos Dublados e Legendados",
  "Servidores H265 anti-travamento com CDN",
  "Compatível com M3U, MAG, Xtream Codes",
  "Suporte prioritário via WhatsApp",
];

export const PLANS: Plan[] = [
  { id: "mensal", name: "Mensal", price: "R$35", period: "1 mês de acesso", keyword: "Plano Mensal RX Purple" },
  { id: "trimestral", name: "Trimestral", price: "R$90", period: "3 meses de acesso", keyword: "Plano Trimestral RX Purple" },
  { id: "semestral", name: "Semestral", price: "R$170", period: "6 meses de acesso", keyword: "Plano Semestral RX Purple" },
  { id: "anual", name: "Anual", price: "R$280", period: "12 meses de acesso", keyword: "Plano Anual RX Purple", featured: true, badge: "Mais escolhido" },
];

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1.5",
        plan.featured
          ? "bg-gradient-to-b from-primary/20 via-card to-card border-primary/50 shadow-glow"
          : "glass-card border-white/10 hover:border-primary/30",
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
          <Star className="size-3 fill-current" aria-hidden="true" /> {plan.badge}
        </span>
      )}
      <header className="text-center">
        <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
        <div className="mt-4 flex items-baseline justify-center gap-1">
          <span className="text-5xl font-bold tracking-tight text-foreground">{plan.price}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{plan.period}</p>
      </header>

      <ul className="mt-6 space-y-2.5 text-sm">
        {PLAN_FEATURES.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-col gap-2">
        <WhatsAppButton
          keyword={plan.keyword}
          label="Assinar Agora"
          variant={plan.featured ? "primary" : "whatsapp"}
        />
        <WhatsAppButton
          keyword={`Teste ${plan.name} RX Purple`}
          label="Fazer Teste Grátis"
          variant="ghost"
          size="sm"
        />
      </div>
    </article>
  );
}
