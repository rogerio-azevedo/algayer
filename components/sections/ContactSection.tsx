"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getWhatsAppLink, siteConfig } from "@/lib/site";

const projectTypes = [
  "Residencial",
  "Comercial",
  "Industrial / galpão",
  "Incorporação",
  "Ainda estou definindo",
];

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const type = String(fd.get("type") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const text = [
      `Olá, ${siteConfig.name}!`,
      "",
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `E-mail: ${email}`,
      `Tipo de projeto: ${type}`,
      "",
      message,
    ].join("\n");

    const url = getWhatsAppLink(text);
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("sent");
    form.reset();
  }

  return (
    <section
      id="contato"
      className="scroll-mt-24 bg-brand-graphite py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionLabel>Contato</SectionLabel>
          <h2 className="font-heading text-3xl font-black tracking-tight text-brand-white md:text-4xl lg:text-5xl">
            Vamos projetar sua obra{" "}
            <span className="text-brand-orange">no ritmo certo.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-gray-light">
            Envie sua mensagem ou fale direto pelo WhatsApp. Retornamos com
            clareza técnica e próximos passos — sem promessa vazia.
          </p>

          <ul className="mt-10 space-y-4 text-brand-gray-light">
            <li>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gray-concrete">
                WhatsApp
              </span>
              <p className="mt-1">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-orange hover:text-brand-copper"
                >
                  Iniciar conversa →
                </a>
              </p>
            </li>
            <li>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gray-concrete">
                E-mail
              </span>
              <p className="mt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-brand-orange transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
            </li>
            <li>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gray-concrete">
                Telefone
              </span>
              <p className="mt-1">{siteConfig.phoneDisplay}</p>
            </li>
          </ul>

          <div className="mt-12 rounded-2xl border border-brand-lead bg-brand-black/40 p-6">
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange">
              SLA Algayer
            </p>
            <p className="mt-2 text-sm text-brand-gray-concrete">
              Primeira resposta em horário comercial em até{" "}
              <strong className="text-brand-gray-light">24 horas úteis</strong>,
              com checklist do que precisamos para orçar com precisão.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-brand-lead bg-brand-black/30 p-8 md:p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="text-xs font-bold uppercase tracking-widest text-brand-gray-concrete"
              >
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-brand-lead bg-brand-graphite px-4 py-3 text-brand-white outline-none ring-brand-orange/0 transition placeholder:text-brand-gray-concrete focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                placeholder="Como devemos te chamar?"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="text-xs font-bold uppercase tracking-widest text-brand-gray-concrete"
                >
                  Telefone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  className="mt-2 w-full rounded-xl border border-brand-lead bg-brand-graphite px-4 py-3 text-brand-white outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                  placeholder="(DDD) 9XXXX-XXXX"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-bold uppercase tracking-widest text-brand-gray-concrete"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-brand-lead bg-brand-graphite px-4 py-3 text-brand-white outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                  placeholder="voce@empresa.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="type"
                className="text-xs font-bold uppercase tracking-widest text-brand-gray-concrete"
              >
                Tipo de projeto
              </label>
              <select
                id="type"
                name="type"
                required
                className="mt-2 w-full rounded-xl border border-brand-lead bg-brand-graphite px-4 py-3 text-brand-white outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione
                </option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-xs font-bold uppercase tracking-widest text-brand-gray-concrete"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-2 w-full resize-y rounded-xl border border-brand-lead bg-brand-graphite px-4 py-3 text-brand-white outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                placeholder="Metragem aproximada, cidade, prazo desejado…"
              />
            </div>
            <Button type="submit" variant="primary" className="w-full sm:w-auto">
              Enviar e abrir WhatsApp
            </Button>
            {status === "sent" ? (
              <p className="text-sm text-brand-orange" role="status">
                Formulário processado — confira se a aba do WhatsApp abriu
                corretamente.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
