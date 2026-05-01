"use client";

import Link from "next/link";
import { useState } from "react";
import { getWhatsAppLink } from "@/lib/site";
import { Button } from "./Button";

const links = [
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#vantagens", label: "Vantagens" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const wa = getWhatsAppLink();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-lead/60 bg-brand-black/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="#top"
          className="group flex flex-col"
          onClick={() => setOpen(false)}
        >
          <span className="font-heading text-xl font-black tracking-tight text-brand-white md:text-2xl">
            ALGAYER
          </span>
          <span className="h-0.5 w-0 bg-brand-orange transition-all group-hover:w-full" />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Principal"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-gray-light hover:text-brand-orange transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={wa} variant="primary" target="_blank" rel="noopener noreferrer">
            Falar com consultor
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand-lead text-brand-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-brand-lead bg-brand-black px-6 py-6 md:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-base font-medium text-brand-gray-light"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Button
              href={wa}
              variant="primary"
              className="mt-2 w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com consultor
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
