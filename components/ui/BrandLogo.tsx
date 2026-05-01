import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  /** Navbar usa priority para LCP */
  priority?: boolean;
  /** Branca para fundos escuros; preta para fundos claros */
  variant?: "white" | "black";
};

const LOGO_SRC: Record<NonNullable<BrandLogoProps["variant"]>, string> = {
  white: "/logo_branca.svg",
  black: "/logo_preta.svg",
};

export function BrandLogo({
  className = "h-9 w-auto md:h-11",
  priority = false,
  variant = "white",
}: BrandLogoProps) {
  return (
    <Image
      src={LOGO_SRC[variant]}
      alt="Algayer"
      width={920}
      height={172}
      className={`object-contain object-left ${className}`.trim()}
      priority={priority}
    />
  );
}
