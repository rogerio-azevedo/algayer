import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Algayer | Steel Frame — Construção inteligente",
    template: "%s | Algayer",
  },
  description:
    "Construtora especializada em Steel Frame: mais rápido, seguro e eficiente. Projetos residenciais e comerciais com tecnologia industrializada.",
  keywords: [
    "steel frame",
    "construção",
    "Algayer",
    "Light Steel Framing",
    "obra rápida",
  ],
  openGraph: {
    title: "Algayer | Steel Frame — Construção inteligente",
    description:
      "Steel Frame: prazo reduzido, precisão industrial e sustentabilidade. Solicite seu orçamento.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-black text-brand-white">
        {children}
      </body>
    </html>
  );
}
