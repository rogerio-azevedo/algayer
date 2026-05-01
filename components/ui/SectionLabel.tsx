type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`mb-4 flex items-center gap-3 ${className}`.trim()}>
      <span
        className="h-px w-10 shrink-0 bg-brand-orange"
        aria-hidden
      />
      <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
        {children}
      </span>
    </div>
  );
}
