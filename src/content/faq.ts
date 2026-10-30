export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "O que é o RX Purple e como funciona?",
    a: "O RX Purple é uma plataforma e player de IPTV premium com mais de 35.000 canais ao vivo, filmes e séries em resolução 4K, Full HD e HD. O sinal é transmitido via internet com servidores dedicados H.265. Após solicitar o acesso pelo WhatsApp, você recebe a lista e as credenciais para assistir em minutos.",
  },
  {
    q: "O RX Purple realmente não trava nos jogos de futebol?",
    a: "Não trava. Nossa infraestrutura utiliza servidores dedicados com CDN distribuída em múltiplos pontos do Brasil e codec H.265 de alta eficiência. Isso garante máxima fluidez mesmo durante finais de campeonatos e horários de pico.",
  },
  {
    q: "Em quais aparelhos o RX Purple funciona?",
    a: "O RX Purple é compatível com praticamente todos os dispositivos: Smart TVs (Samsung Tizen, LG webOS, Roku, Android TV), TV Box, Fire TV Stick, computadores (Windows/Mac), celulares e tablets (Android e iOS).",
  },
  {
    q: "Quantos aparelhos posso conectar ao mesmo tempo?",
    a: "Todos os planos do RX Purple já incluem 2 telas simultâneas inclusas sem custo adicional. Caso sua família precise de mais acessos, pontos extras podem ser adicionados diretamente pelo atendimento no WhatsApp.",
  },
  {
    q: "Como faço para testar o RX Purple antes de contratar?",
    a: "Basta clicar em 'Solicitar Teste Grátis' para falar conosco no WhatsApp. Nosso time libera um teste imediato para você conferir a qualidade dos canais em 4K e a estabilidade sem travar.",
  },
  {
    q: "Quais são as formas de pagamento disponíveis?",
    a: "Aceitamos Pix com liberação imediata, cartão de crédito em até 12x e boleto bancário por meio de gateways protegidos com criptografia de ponta a ponta.",
  },
];

export const FULL_FAQ: FaqItem[] = [
  ...HOME_FAQ,
  {
    q: "Qual a velocidade de internet necessária para usar o RX Purple?",
    a: "Recomendamos pelo menos 15 Mbps de conexão para canais em Full HD e a partir de 30 Mbps para conteúdo em 4K. Para a melhor estabilidade, recomendamos conectar a TV ou TV Box via cabo de rede.",
  },
  {
    q: "O RX Purple é legal e seguro?",
    a: "Sim, o RX Purple opera como distribuidor de tecnologia de streaming de listas autorizadas. Cabe ao usuário usufruir dos canais de acordo com a legislação do seu país.",
  },
  {
    q: "O RX Purple oferece suporte técnico após a contratação?",
    a: "Com certeza. Temos uma equipe de suporte humano atendendo todos os dias no WhatsApp para ajudar em qualquer dúvida de configuração, troca de aplicativo ou renovação.",
  },
  {
    q: "Como faço para renovar meu plano RX Purple?",
    a: "A renovação não é automática e você nunca terá cobranças surpresas no seu cartão. Quando seu período estiver próximo do fim, nosso suporte entrará em contato pelo WhatsApp para você renovar se desejar.",
  },
];
