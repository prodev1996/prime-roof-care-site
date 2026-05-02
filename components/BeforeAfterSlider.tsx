"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  title: string;
  location: string;
  detail?: string;
  aspect?: string;
  priority?: boolean;
  compact?: boolean;
};

export default function BeforeAfterSlider({
  before,
  after,
  title,
  location,
  detail,
  aspect = "aspect-[4/3]",
  priority = false,
  compact = false,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(58);

  return (
    <article className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_24px_60px_rgba(20,32,29,0.14)]">
      <div className={`relative ${aspect} overflow-hidden bg-slate-200`}>
        <Image
          src={before}
          alt={`${title} before`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={after}
            alt={`${title} after`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority={priority}
          />
        </div>

        <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#14201d] shadow-sm">
          Before
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-[#d99a2b] px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#14201d] shadow-sm">
          After
        </div>

        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_18px_rgba(0,0,0,0.35)]"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#12342d] text-white shadow-[0_14px_30px_rgba(0,0,0,0.28)]">
            <MoveHorizontal size={20} />
          </div>
        </div>

        <input
          type="range"
          min="5"
          max="95"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Compare before and after for ${title}`}
          className="before-after-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className={`grid gap-3 ${compact ? "p-4" : "p-5"}`}>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0f8a62]">
            {location}
          </p>
          <h3 className={`mt-2 font-black leading-tight text-[#14201d] ${compact ? "text-xl" : "text-2xl"}`}>
            {title}
          </h3>
          {detail ? (
            <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
