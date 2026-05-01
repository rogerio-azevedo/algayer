import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  /** Navbar usa priority para LCP */
  priority?: boolean;
};

export function BrandLogo({
  className = "h-9 w-auto md:h-11",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Algayer"
      width={920}
      height={172}
      className={`object-contain object-left ${className}`.trim()}
      priority={priority}
    />
  );
}
