import PageHeader from "@/components/PageHeader";
import ArticleCard from "@/components/ArticleCard";
import { articlesByBeat, beats } from "@/lib/data";

export const metadata = {
  title: "Portfolio — Mokshaa Shivlani",
};

export default function PortfolioPage() {
  return (
    <div className="px-6 pb-24 pt-16 md:px-16 md:pt-24">
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work, by beat"
        dek="A cross-section of published writing across fashion, health & beauty, art & culture, and food & travel."
      />

      <div className="mt-16 flex flex-col gap-20">
        {beats.map((beat) => (
          <section key={beat.slug} id={beat.slug} className="scroll-mt-24">
            <div className="flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-display text-3xl italic text-ink">{beat.name}</h2>
              <p className="max-w-sm text-sm text-ink-soft">{beat.tagline}</p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articlesByBeat(beat.slug).map((article) => (
                <ArticleCard key={article.url} article={article} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
