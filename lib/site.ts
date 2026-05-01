/**
 * Dados do site — configure via variáveis de ambiente em produção.
 */
export const siteConfig = {
  name: "Algayer",
  tagline: "Construção inteligente em Steel Frame",
  /** Telefone internacional sem símbolos, ex: 5566999304666 */
  whatsappPhone:
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "") ??
    "5566999304666",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@algayer.com.br",
  phoneDisplay:
    process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "(66) 99930-4666",
} as const;

export function getWhatsAppLink(message?: string) {
  const text = encodeURIComponent(
    message ??
    "Olá, Algayer! Gostaria de falar com um consultor sobre Steel Frame."
  );
  return `https://wa.me/${siteConfig.whatsappPhone}?text=${text}`;
}
