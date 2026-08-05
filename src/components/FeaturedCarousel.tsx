"use client";

import { useRef } from "react";
import type { Article } from "@/lib/data";
import FeaturedArticleCard from "./FeaturedArticleCard";
import CarouselArrowButton from "./CarouselArrowButton";

export default function FeaturedCarousel({ articles }: { articles: Article[] }) {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollByCard(dir: 1 | -1) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.firstElementChild as HTMLElement | null;
    const amount = card ? card.getBoundingClientRect().width + 20 : rail.clientWidth * 0.85;
    rail.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <div>
      <div
        ref={railRef}
        className="rail flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
      >
        {articles.map((article) => (
          <div
            key={article.url}
            className="w-[85%] flex-none snap-start sm:w-[420px]"
          >
            <FeaturedArticleCard article={article} />
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <CarouselArrowButton
          direction="left"
          label="Previous article"
          onClick={() => scrollByCard(-1)}
        />
        <CarouselArrowButton
          direction="right"
          label="Next article"
          onClick={() => scrollByCard(1)}
        />
      </div>
    </div>
  );
}
