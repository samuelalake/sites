import svgPaths from "@/imports/svg-rgxehr3pyp";
import imgImageLocalByDefault from "@/imports/448baf47544e42b9aad533f6cc1617507a86ffef.png";
import imgImageEncryptedByYourPassword from "@/imports/0e70f2405dba6d6a5980bd2853e6057ec9d66ea0.png";
import imgImageSandboxWithGuardrails from "@/imports/f22d1e2386f3aaa0595d1dc3e40c672249ba335e.png";
import HorizontalScroller from "@/components/HorizontalScroller";

const tiles = [
  {
    img: imgImageLocalByDefault,
    title: "Local by default",
    desc: " Your data never leaves your device unless you choose to sync it.",
  },
  {
    img: imgImageEncryptedByYourPassword,
    title: "Encrypted by your password",
    desc: " Everything is locked behind your passphrase — not a company's keys.",
  },
  {
    img: imgImageSandboxWithGuardrails,
    title: "Sandbox with guardrails",
    desc: " Agents operate in a walled environment with no silent network access.",
  },
  {
    img: null,
    title: "Bring your own subscription",
    desc: " Connect your existing AI subscriptions. No middleman sees your data.",
  },
];

export default function PrivacySection() {
  return (
    <section className="bg-[#fafafa] border-b border-[rgba(0,0,0,0.06)]">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8 lg:px-24">
        <div className="border-x border-[rgba(0,0,0,0.06)] px-5 md:px-[49px] py-16 md:py-24">
          <div className="flex items-center justify-center gap-[2px] mb-6">
            <p className="font-['Geist:Medium',sans-serif] font-medium text-[16px] leading-[24px] text-[#00a6f4]">Privacy and control</p>
            <div className="size-[16px]">
              <svg className="size-full" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p3c537500} fill="#00A6F4" />
              </svg>
            </div>
          </div>
          <h2 className="font-['displayFont:Regular','Plus_Jakarta_Sans',sans-serif] text-[34px] leading-[40px] md:text-[44px] md:leading-[48px] text-[#090b0c] text-center">
            Private enough to use real data.
          </h2>
          <p className="font-['Geist:Regular',sans-serif] text-[18px] leading-[28px] text-[#737373] text-center mt-6 max-w-2xl mx-auto">
            Aside runs on your device, keeps data protected, and gates sensitive actions for your review.
          </p>
        </div>
        <div className="border-x border-[rgba(0,0,0,0.06)] pb-16 md:pb-24">
          <HorizontalScroller columns={4} label="privacy and control features">
            {tiles.map(({ img, title, desc }) => (
              <div key={title} className="flex min-w-[320px] snap-start flex-col lg:min-w-0">
                <div className="bg-[#f5f5f5] h-[260px] lg:h-[320px] rounded-[11.2px] overflow-hidden flex items-center justify-center">
                  {img ? (
                    <img src={img} alt={title} className="size-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center gap-3" aria-label="Supported AI subscriptions">
                      {[["✣", "#090b0c"], ["A", "#d97757"], ["◇", "#7357ff"]].map(([mark, color]) => (
                        <span key={mark} className="grid size-14 place-items-center rounded-full bg-white text-[24px] font-medium shadow-sm" style={{ color }}>
                          {mark}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="px-4 py-5">
                  <p className="font-['Geist:Medium',sans-serif] font-medium text-[16px] leading-[24px] text-[#090b0c]">
                    {title}
                    <span className="font-['Geist:Regular',sans-serif] font-normal text-[#737373]">{desc}</span>
                  </p>
                </div>
              </div>
            ))}
          </HorizontalScroller>
        </div>
      </div>
    </section>
  );
}
