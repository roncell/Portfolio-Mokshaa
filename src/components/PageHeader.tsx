export default function PageHeader({
  eyebrow,
  title,
  dek,
}: {
  eyebrow: string;
  title: string;
  dek?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h1 className="mt-4 font-display text-4xl italic leading-tight text-ink text-balance sm:text-5xl">
        {title}
      </h1>
      {dek && <p className="mt-5 text-base leading-relaxed text-ink-soft">{dek}</p>}
    </div>
  );
}
