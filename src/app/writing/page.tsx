import PageHeader from "@/components/PageHeader";
import { substack, substackPosts } from "@/lib/data";

export const metadata = {
  title: "Writing — Mokshaa Shivlani",
};

export default function WritingPage() {
  return (
    <div className="px-6 pb-24 pt-16 md:px-16 md:pt-24">
      <PageHeader
        eyebrow={substack.eyebrow}
        title={substack.name}
        dek={substack.tagline}
      />

      <a
        href={substack.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-ink underline-accent"
      >
        Subscribe on Substack &rarr;
      </a>

      <div className="mt-16 flex flex-col divide-y divide-line border-t border-line">
        {substackPosts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 py-8 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <div className="flex-1">
              <h2 className="font-display text-2xl italic text-ink transition-colors group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                {post.excerpt}
              </p>
            </div>
            <span className="whitespace-nowrap text-xs uppercase tracking-[0.2em] text-ink-faint">
              {post.date}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
