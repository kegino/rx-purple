import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface Props {
  keyword?: string;
  label: string;
  variant?: "primary" | "secondary" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary:
    "bg-primary text-primary-foreground font-bold shadow-lg shadow-amber-500/25 hover:brightness-105 active:scale-[0.98]",
  secondary:
    "bg-secondary text-secondary-foreground border border-white/10 hover:bg-secondary/80",
  whatsapp:
    "bg-whatsapp text-whatsapp-foreground font-bold shadow-lg shadow-emerald-500/25 hover:brightness-105 active:scale-[0.98]",
  ghost: "text-foreground hover:bg-white/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-6 py-3.5 text-base sm:text-lg",
};

export function WhatsAppButton({
  keyword = "RX Purple",
  label,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
}: Props) {
  return (
    <a
      href={whatsappUrl(keyword)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? `${label} via WhatsApp`}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
