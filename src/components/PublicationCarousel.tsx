"use client";

import { useRef, useState } from "react";
import type { Publication } from "@/lib/data";
import CarouselArrowButton from "./CarouselArrowButton";

function PublicationMark({ pub }: { pub: Publication }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (pub.logo && !imageFailed) {
    const img = (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={pub.logo}
        alt={pub.name}
        onError={() => setImageFailed(true)}
        className={`w-auto opacity-80 grayscale transition-opacity group-hover:opacity-100 group-hover:grayscale-0 ${pub.logoHeightClass ?? "h-6"}`}
      />
    );

    if (pub.logoOnDark) {
      return (
        <span className="flex items-center rounded-sm bg-ink px-4 py-2.5">
          {img}
        </span>
      );
    }

    return img;
  }

  return (
    <span
      className={`whitespace-nowrap text-ink-soft transition-colors group-hover:text-accent ${pub.logotype}`}
    >
      {pub.name}
    </span>
  );
}

export default function PublicationCarousel({
  publications,
}: {
  publications: Publication[];
}) {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollByAmount(dir: 1 | -1) {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir * rail.clientWidth * 0.6, behavior: "smooth" });
  }

  return (
    <div className="flex items-center gap-4">
      <div
        ref={railRef}
        className="rail flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto"
      >
        {publications.map((pub) => (
          <a
            key={pub.name}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-20 flex-none snap-start items-center justify-center rounded-sm border border-line bg-paper-raised px-8 transition-colors hover:border-accent"
          >
            <PublicationMark pub={pub} />
          </a>
        ))}
      </div>
      <div className="flex flex-none items-center gap-2">
        <CarouselArrowButton
          direction="left"
          label="Previous publication"
          onClick={() => scrollByAmount(-1)}
        />
        <CarouselArrowButton
          direction="right"
          label="Next publication"
          onClick={() => scrollByAmount(1)}
        />
      </div>
    </div>
  );
}
