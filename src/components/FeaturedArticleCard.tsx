"use client";

import { useState } from "react";
import type { Article } from "@/lib/data";
import { beatColor, beatName, initialsMark } from "@/lib/data";

export default function FeaturedArticleCard({ article }: { article: Article }) {
  const color = beatColor(article.beat);
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = article.image && !imageFailed;

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-paper-raised transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(33,29,23,0.35)]"
    >
      <div className="flex flex-1 flex-col gap-3.5 p-5 pb-5 sm:p-7 sm:pb-5">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]">
          <span className="text-accent">Home</span>
          <span className="text-ink-faint">&rsaquo;</span>
          <span className="text-ink-faint">{beatName(article.beat)}</span>
        </div>

        <h3 className="font-display text-[1.4rem] font-semibold leading-[1.25] text-ink">
          {article.title}
        </h3>

        <p className="text-sm leading-relaxed text-ink-soft [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
          {article.excerpt}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2 pt-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-ink text-[10px] font-medium tracking-tight text-paper-raised">
              MS
            </span>
            <span className="whitespace-nowrap text-xs text-ink-soft">
              {article.date ? `${article.date} · ` : ""}by Mokshaa Shivlani
            </span>
          </div>
          <span
            className={`whitespace-nowrap font-display text-sm italic ${color.text}`}
          >
            {article.publication}
          </span>
        </div>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden border-t border-line">
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
            <span className="font-display text-5xl italic text-paper-raised/90">
              {initialsMark(article.publication)}
            </span>
          </div>
        )}
      </div>
    </a>
  );
}
