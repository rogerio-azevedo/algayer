import type { ComponentProps } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-orange text-brand-black hover:bg-brand-copper focus-visible:outline-brand-orange",
  ghost:
    "border border-brand-gray-concrete bg-transparent text-brand-white hover:border-brand-orange hover:text-brand-orange",
};

type BaseProps = {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
};

type ButtonLinkProps = BaseProps &
  ComponentProps<"a"> & {
    href: string;
  };

type ButtonNativeProps = BaseProps &
  Omit<ComponentProps<"button">, "className"> & {
    href?: undefined;
  };

export type ButtonProps = ButtonLinkProps | ButtonNativeProps;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    className = "",
    children,
    ...rest
  } = props;
  const cls = `${base} ${variants[variant]} ${className}`.trim();

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorRest } = rest;
    return (
      <a href={href} className={cls} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { type = "button", ...btnRest } = rest as ComponentProps<"button">;
  return (
    <button type={type} className={cls} {...btnRest}>
      {children}
    </button>
  );
}
