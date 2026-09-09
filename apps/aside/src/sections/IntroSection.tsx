export default function IntroSection() {
  return (
    <section className="border-b border-[rgba(0,0,0,0.06)]">
      <div className="max-w-[1536px] mx-auto px-24">
        <div className="border-x border-[rgba(0,0,0,0.06)] flex gap-16 items-start pb-24 pt-36 px-[49px]">
          <div className="w-[623px] shrink-0 flex flex-col gap-0">
            <p className="font-['displayFont:Regular','Plus_Jakarta_Sans',sans-serif] text-[44px] leading-[52px] text-[#090b0c]">
              {"Today's AI browsers are broken."}
            </p>
          </div>
          <div className="flex-1">
            <p className="font-['displayFont:Regular','Plus_Jakarta_Sans',sans-serif] text-[44px] leading-[52px] text-[#737373]">
              Aside is a browser rebuilt for people and agents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
