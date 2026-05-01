import Image from "next/image";

import type { CatalogProject } from "@/lib/catalog";

type CatalogProjectMasonryProps = {
  projects: CatalogProject[];
};

export function CatalogProjectMasonry({ projects }: CatalogProjectMasonryProps) {
  return (
    <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
      {projects.map((p) => (
        <article
          key={p.title}
          className={`group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-brand-lead bg-brand-lead ${
            p.tall ? "aspect-3/4" : "aspect-4/3"
          }`}
        >
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-black via-brand-black/20 to-transparent opacity-90 transition group-hover:opacity-95" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="font-heading text-xl font-bold text-brand-white">{p.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
