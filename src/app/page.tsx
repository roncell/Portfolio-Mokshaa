import Link from "next/link";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import { articles, beats, substack } from "@/lib/data";

const featured = [
  articles[1], // Harper's Bazaar — Met Gala
  articles[0], // ELLE — boyfriend's clothes
  articles[3], // Cosmopolitan — cycle training
  articles[6], // CULTURED — Tribeca
  articles[7], // CULTURED — Performa
  articles[9], // Harper's Bazaar — slow cooking
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 px-6 pb-24 pt-16 md:px-16 md:pt-24">
      {/* Hero */}
      <section className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          Journalist &mdash; Fashion, Beauty &amp; Culture
        </p>
        <h1 className="mt-6 font-display text-3xl italic leading-[1.2] text-ink text-balance sm:text-4xl md:text-5xl">
          Mokshaa Shivlani writes about the clothes we wear, and the stories
          they tell.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
          Bylines in Harper&rsquo;s Bazaar, ELLE, Vogue, Cosmopolitan, and
          CULTURED, covering fashion, health &amp; beauty, art &amp; culture,
          and food &amp; travel.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link
            href="/portfolio"
            className="text-sm uppercase tracking-[0.2em] text-ink underline-accent"
          >
            View the portfolio
          </Link>
          <Link
            href="/about"
            className="text-sm uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"
          >
            About Mokshaa
          </Link>
        </div>
      </section>

      {/* Featured rail */}
      <section>
        <div className="flex items-end justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-faint">
            Selected Work
          </p>
          <Link
            href="/portfolio"
            className="hidden text-xs uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-accent sm:inline"
          >
            Full portfolio &rarr;
          </Link>
        </div>
        <div className="mt-6">
          <FeaturedCarousel articles={featured} />
        </div>
      </section>

      {/* Beats */}
      <section>
        <p className="text-xs uppercase tracking-[0.3em] text-ink-faint">
          The Beats
        </p>
        <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {beats.map((beat) => (
            <Link
              key={beat.slug}
              href={`/portfolio#${beat.slug}`}
              className="group flex flex-col justify-between gap-8 bg-paper-raised p-7 transition-colors hover:bg-paper"
            >
              <span className="font-display text-2xl italic text-ink transition-colors group-hover:text-accent">
                {beat.name}
              </span>
              <span className="text-sm leading-relaxed text-ink-soft">
                {beat.tagline}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Substack teaser */}
      <section className="flex flex-col items-start justify-between gap-6 border-y border-line py-10 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {substack.eyebrow}
          </p>
          <p className="mt-3 max-w-md font-display text-2xl italic text-ink">
            {substack.name} &mdash; {substack.tagline}
          </p>
        </div>
        <a
          href={substack.url}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap text-sm uppercase tracking-[0.2em] text-ink underline-accent"
        >
          Read on Substack
        </a>
      </section>
    </div>
  );
}
