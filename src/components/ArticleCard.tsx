"use client";

import { useState } from "react";
import type { Article } from "@/lib/data";
import { beatColor, initialsMark } from "@/lib/data";

export default function ArticleCard({ article }: { article: Article }) {
  const color = beatColor(article.beat);
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = article.image && !imageFailed;

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-sm border border-line bg-paper-raised transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(33,29,23,0.35)]"
    >
      <div className="relative h-40 w-full overflow-hidden">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.image}
            alt=""
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className={`flex h-full items-center justify-center ${color.bg}`}>
            <span className="font-display text-6xl italic text-paper-raised/90">
              {initialsMark(article.publication)}
            </span>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_60%)]" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-ink-faint">
          <span className={color.text}>{article.publication}</span>
          {article.date && <span>{article.date}</span>}
        </div>
        <h3 className="font-display text-xl italic leading-snug text-ink transition-colors group-hover:text-accent">
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-soft">{article.excerpt}</p>
        <span className="mt-auto pt-2 text-xs uppercase tracking-[0.2em] text-ink-faint transition-colors group-hover:text-accent">
          Read the piece &rarr;
        </span>
      </div>
    </a>
  );
}
