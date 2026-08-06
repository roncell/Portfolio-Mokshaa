import PageHeader from "@/components/PageHeader";
import { beats, publications, resumeSummary } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 pt-16 md:px-16 md:pt-24">
      <PageHeader eyebrow="About" title="Mokshaa Shivlani" />

      <div className="mt-14 grid gap-16 lg:grid-cols-[1.3fr_1fr]">
        <div className="max-w-xl">
          <p className="text-lg leading-relaxed text-ink-soft">
            {resumeSummary}
          </p>

          <p className="mt-10 text-sm uppercase tracking-[0.2em] text-ink-faint">
            Currently writing for
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {publications.map((pub) => (
              <li key={pub.name} className="font-display text-lg italic text-ink-soft">
                {pub.name}
              </li>
            ))}
          </ul>
        </div>

        <aside className="border-t border-line pt-8 lg:border-t-0 lg:pt-0">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
            Beats
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {beats.map((beat) => (
              <li key={beat.slug}>
                <p className="font-display text-lg italic text-ink">{beat.name}</p>
                <p className="text-sm text-ink-soft">{beat.tagline}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
