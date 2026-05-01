import Link from "next/link";
import { getWhatsAppLink, siteConfig } from "@/lib/site";

const quickLinks = [
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#vantagens", label: "Vantagens" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  const wa = getWhatsAppLink();

  return (
    <footer className="border-t border-brand-lead bg-brand-black py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="font-heading text-2xl font-black tracking-tight text-brand-white">
            ALGAYER
          </p>
          <span className="mt-1 block h-1 w-14 bg-brand-orange" aria-hidden />
          <p className="mt-4 text-sm leading-relaxed text-brand-gray-concrete">
            {siteConfig.tagline}. Steel Frame com precisão industrial e entrega
            previsível.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-brand-gray-concrete">
            Navegação
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-brand-gray-light hover:text-brand-orange transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-brand-gray-concrete">
            Contato
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-brand-gray-light">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-orange transition-colors">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <span className="text-brand-gray-concrete">{siteConfig.phoneDisplay}</span>
            </li>
            <li>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-orange hover:text-brand-copper"
              >
                WhatsApp
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-brand-gray-concrete hover:text-brand-orange transition-colors"
            >
              IG
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-brand-gray-concrete hover:text-brand-orange transition-colors"
            >
              in
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-brand-gray-concrete hover:text-brand-orange transition-colors"
            >
              YT
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-brand-lead px-6 pt-8 text-center text-xs text-brand-gray-concrete">
        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
