import { type ReactNode, useRef } from "react";

type HorizontalScrollerProps = {
  children: ReactNode;
  columns?: 3 | 4;
  label: string;
};

export default function HorizontalScroller({ children, columns = 3, label }: HorizontalScrollerProps) {
  const railRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    railRef.current?.scrollBy({ left: direction * 344, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={railRef}
        aria-label={label}
        className={`flex gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory px-px pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid ${
          columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {children}
      </div>
      <div className="mt-3 flex justify-end gap-2 px-1 lg:hidden">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label={`Previous ${label}`}
          className="grid size-10 place-items-center rounded-full border border-black/10 bg-white text-xl shadow-sm transition hover:bg-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a6f4]"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label={`Next ${label}`}
          className="grid size-10 place-items-center rounded-full border border-black/10 bg-white text-xl shadow-sm transition hover:bg-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a6f4]"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}
