export default function IntroSection() {
  return (
    <section className="border-b border-[rgba(0,0,0,0.06)]">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8 lg:px-24">
        <div className="border-x border-[rgba(0,0,0,0.06)] py-20 md:py-28 px-5 md:px-[49px]">
          <div className="grid md:grid-cols-[240px_1fr] gap-8 md:gap-12 items-start">
            <a href="#" className="inline-flex items-center gap-1 text-[#00a6f4] font-['Geist:Medium',sans-serif] font-medium text-[16px]">
              Introducing Aside <span aria-hidden="true">›</span>
            </a>
            <div className="space-y-8 max-w-[780px]">
              <p className="font-['Geist:Regular',sans-serif] text-[20px] leading-[30px] text-[#737373]">
                <strong className="font-['Geist:Medium',sans-serif] font-medium text-[#090b0c]">Today&apos;s AI browsers are broken.</strong>{" "}
                They never complete a task. They say “I can&apos;t do this” every time. They stop every time the work gets real, and they still lack the basics: speed and usability.
              </p>
              <p className="font-['Geist:Regular',sans-serif] text-[20px] leading-[30px] text-[#737373]">
                <strong className="font-['Geist:Medium',sans-serif] font-medium text-[#090b0c]">Aside is a browser rebuilt for people and agents.</strong>{" "}
                It works across your logged-in websites and handles complex work other agents can&apos;t: messages, payments, internal tools, and everything in between.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
