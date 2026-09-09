import svgPaths from "@/imports/svg-rgxehr3pyp";
import imgCanvas from "@/imports/4af73de09868ecf3edc8c73e93e74d76204d92fd.png";
import imgCanvas1 from "@/imports/6734c29756df0701cfaa1ba52d085596cb4c9718.png";
import imgCanvas2 from "@/imports/37216b41150db366a7772123252cf180fe345da4.png";
import imgImageIllustration1 from "@/imports/d16a3f665ef290f40b18618051fa493d4347fb08.png";
import imgImageIllustration2 from "@/imports/beb4da6ebcb80ec5cb3ab4b0a556e62f10be91e1.png";
import HorizontalScroller from "@/components/HorizontalScroller";

const featureTiles = [
  {
    img: imgCanvas,
    title: "Signing in",
    desc: " Aside signs in and works across your email, dashboards, and internal tools.",
  },
  {
    img: imgCanvas1,
    title: "Communications",
    desc: " Aside handles comments, replies, and follow-ups for you.",
  },
  {
    img: imgCanvas2,
    title: "Docs and Spreadsheets",
    desc: " Aside can work with files directly on your computer.",
  },
];

const benchmarkData = [
  { label: "Aside", score: 99.0, color: "#1F6FFF" },
  { label: "Browser Use", score: 97.7, color: "#D4D4D4" },
  { label: "GPT-5.4", score: 92.8, color: "#D4D4D4" },
  { label: "Claude Opus 4.8", score: 84.0, color: "#D4D4D4" },
  { label: "ChatGPT Atlas", score: 70.0, color: "#D4D4D4" },
];

function BenchmarkChart() {
  const max = 100;
  return (
    <div className="flex flex-col gap-0 w-full max-w-[943px]">
      {benchmarkData.map(({ label, score, color }, i) => (
        <div key={label} className={`flex items-center gap-4 h-[56px] ${i > 0 ? "border-t border-[rgba(0,0,0,0.06)]" : ""}`}>
          <div className="w-[180px] shrink-0">
            <p className={`font-['Geist:Medium',sans-serif] font-medium text-[16px] leading-[24px] ${i === 0 ? "text-[#090b0c]" : "text-[#737373]"}`}>{label}</p>
          </div>
          <div className="flex-1 h-[18px] bg-[#f0f0f0] overflow-hidden">
            <div
              className="h-full transition-all"
              style={{ width: `${(score / max) * 100}%`, background: color }}
            />
          </div>
          <div className="w-[80px] text-right">
            <p className={`font-['Geist:Medium',sans-serif] font-medium text-[16px] leading-[24px] ${i === 0 ? "text-[#090b0c]" : "text-[#737373]"}`}>{score}%</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AnythingSection() {
  return (
    <section className="border-b border-[rgba(0,0,0,0.06)]">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8 lg:px-24">
        <div className="border-x border-[rgba(0,0,0,0.06)] bg-gradient-to-b from-[#fafafa] to-white">
          <div className="px-5 md:px-[49px] pt-20 md:pt-24 pb-10 md:pb-6">
            <div className="flex items-center justify-center gap-[2px] mb-6">
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[16px] leading-[24px] text-[#00a6f4]">Unlimited capability</p>
              <div className="size-[16px]">
                <svg className="size-full" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p3c537500} fill="#00A6F4" />
                </svg>
              </div>
            </div>
            <h2 className="font-['displayFont:Regular','Plus_Jakarta_Sans',sans-serif] text-[34px] leading-[40px] md:text-[44px] md:leading-[48px] text-[#090b0c] text-center">
              Anything you do in a browser,
              <br />
              Aside can do for you.
            </h2>
          </div>
        </div>
        <div className="border-x border-[rgba(0,0,0,0.06)] px-5 md:px-12 lg:px-[169px] py-16 md:py-24">
          <p className="font-['Geist:Regular',sans-serif] font-normal text-[18px] leading-[28px] text-[#090b0c] max-w-[703px]">
            Unlike other AI agents that rely on integrations, Aside just uses websites and accounts directly, just like you do. That means you can ask any task in your mind anytime you need. The only wall is the imagination.
          </p>
        </div>
        <div className="border-x border-[rgba(0,0,0,0.06)] pb-16 md:pb-24">
          <HorizontalScroller label="browser capabilities">
            {featureTiles.map(({ img, title, desc }) => (
              <div key={title} className="flex min-w-[320px] snap-start flex-col lg:min-w-0">
                <div className="bg-[#f5f5f5] h-[260px] md:h-[320px] rounded-[11.2px] overflow-hidden">
                  <img src={img} alt={title} className="size-full object-contain" />
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
        <div className="border-b border-dashed border-[rgba(0,0,0,0.06)]" />
        <div className="border-x border-[rgba(0,0,0,0.06)] px-5 md:px-[49px] pb-16 md:pb-24 overflow-hidden">
          <div className="pt-12 mb-8">
            <h3 className="font-['displayFont:Medium','Plus_Jakarta_Sans',sans-serif] font-medium text-[30px] leading-[40px] text-[#090b0c]">
              The SOTA browser agent.
            </h3>
            <p className="font-['Geist:Regular',sans-serif] text-[16px] leading-[24px] text-[#737373] mt-3 max-w-[800px]">
              Aside ranked #1 on three browser agent benchmarks: Online-Mind2Web, BU-Bench-V1, and Odysseys, surpassing OpenAI, Anthropic, and Browser Use.{" "}
              <a href="#" className="font-['Geist:Medium',sans-serif] font-medium text-[#00a6f4] underline">Learn more</a>
            </p>
          </div>
          <BenchmarkChart />
          <div className="mx-auto mt-8 flex w-fit items-center rounded-[14px] bg-[#f5f5f5] p-1">
            <div className="bg-white h-[36px] px-[13px] flex items-center rounded-[10px] shadow-sm">
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#090b0c]">Online-Mind2Web</p>
            </div>
            <button className="h-[36px] px-[13px] flex items-center rounded-[10px]">
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[rgba(9,11,12,0.6)]">BU Bench v1</p>
            </button>
            <button className="h-[36px] px-[13px] flex items-center rounded-[10px]">
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[rgba(9,11,12,0.6)]">Odyssey</p>
            </button>
          </div>
        </div>
        <div className="border-b border-dashed border-[rgba(0,0,0,0.06)]" />
        <div className="border-x border-[rgba(0,0,0,0.06)] bg-gradient-to-b from-white to-[#fafafa] overflow-hidden">
          <div className="px-5 md:px-12 lg:px-[169px] py-14 md:py-16">
            <h3 className="font-['displayFont:Medium','Plus_Jakarta_Sans',sans-serif] font-medium text-[30px] leading-[40px] text-[#090b0c]">
              {"Memory that knows what you're working on."}
            </h3>
            <p className="font-['Geist:Regular',sans-serif] text-[18px] leading-[28px] text-[#737373] mt-3 max-w-[703px]">
              Aside knows which sites to use for which work. It turns your browsing history into memory, so you{" "}
              {"don't have to repeat context every time. All memory stays local on your device and is never shared with anyone."}
              {" "}
              <a href="#" className="text-[#00a6f4] underline">Learn more</a>
            </p>
          </div>
          <div className="relative flex justify-center pb-0 overflow-hidden h-[330px] md:h-[384px]">
            <div className="relative min-w-[760px] md:min-w-0 max-w-[896px] w-full mx-auto overflow-hidden h-full origin-top-left scale-[0.62] md:scale-100">
              <div className="memory-prompt absolute left-0 top-4 bg-[#f5f5f5] rounded-[16.8px] max-w-[320px] px-4 py-[10px] z-10">
                <p className="font-['Geist:Medium',sans-serif] font-medium text-[16px] leading-[24px] text-[#090b0c] w-[288px]">
                  Find the candidate I opened yesterday and prep interview notes
                </p>
              </div>
              <div className="memory-panel-back absolute left-[352px] top-10 opacity-60 overflow-hidden rounded-tl-[16.8px] rounded-tr-[16.8px] w-[432px] h-[384px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border-t border-l border-r border-[rgba(0,0,0,0.08)]">
                <img src={imgImageIllustration1} alt="" className="size-full object-cover" />
              </div>
              <div className="memory-panel-front absolute left-[464px] top-0 overflow-hidden rounded-tl-[16.8px] rounded-tr-[16.8px] w-[432px] h-[384px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border-t border-l border-r border-[rgba(0,0,0,0.08)]">
                <img src={imgImageIllustration2} alt="" className="size-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
