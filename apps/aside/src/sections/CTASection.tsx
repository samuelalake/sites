import svgPaths from "@/imports/svg-rgxehr3pyp";
import imgContainer1 from "@/imports/51ace833ac9ed381049171f0f14f8a589c128e09.png";

export default function CTASection() {
  return (
    <section>
      <div className="max-w-[1536px] mx-auto px-24 pt-24">
        <div
          className="relative rounded-[22.4px] overflow-hidden"
          style={{ minHeight: 372 }}
        >
          <img
            src={imgContainer1}
            alt=""
            className="absolute inset-0 size-full object-cover pointer-events-none"
          />
          <div className="relative flex flex-col items-center justify-center py-32 px-8 text-center">
            <h2 className="font-['displayFont:Regular','Plus_Jakarta_Sans',sans-serif] text-[44px] leading-[48px] text-[#090b0c] max-w-2xl">
              Crafted for both human and agent.
              <br />
              Start using today.
            </h2>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 bg-[#090b0c] text-[#fafafa] h-[44px] pl-[11px] pr-[13px] rounded-[16.8px] hover:opacity-90 transition-opacity"
            >
              <div className="size-[18px] shrink-0">
                <svg className="size-full" fill="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p706480} fill="#FAFAFA" />
                </svg>
              </div>
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[16px] leading-[24px]">
                Download for macOS
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
