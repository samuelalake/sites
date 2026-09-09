import imgContainer from "@/imports/596620ee7b6f1de2cb903b8b6e7d8e1eb8d5bbd3.png";
import imgImageUserProfile from "@/imports/0327ce93adb51662f3272ee1798fda5a178fdcb1.png";
import imgImage3 from "@/imports/e685f60f7f32886347f5f7ecebfea605ca366202.png";
import imgImage4 from "@/imports/8af35aab9bba813be1256fe04b5ea37e32853425.png";
import imgImage5 from "@/imports/a58248e8f14f1be7e9423bd347d2144d57c089f5.png";
import imgImage6 from "@/imports/70a9800b7a9b6450acb0b84f9ee5b5eb8560291b.png";
import imgImage7 from "@/imports/a4aaf1938d0d51ad6fc90ce53287438265268927.png";
import imgImage8 from "@/imports/4d9da035494679b722abb8bc9484f87fff5520fa.png";
import imgImage2 from "@/imports/85cd5ed4d4e0f25ce0d9af64e10827645cc71f96.png";
import svgPaths from "@/imports/svg-rgxehr3pyp";

function YCBadge() {
  return (
    <div className="inline-flex items-center gap-[2px] h-[24px] px-[11px] py-px rounded-full border border-[rgba(9,11,12,0.2)]">
      <p className="font-['displayFont:Regular','Plus_Jakarta_Sans',sans-serif] text-[12px] leading-[16px] text-[rgba(9,11,12,0.7)] tracking-[0.12px]">
        Backed by Y Combinator
      </p>
      <div className="relative size-[12px] ml-px opacity-50">
        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 12 12">
          <path d={svgPaths.p6333f0} fill="#090B0C" fillOpacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function DownloadButton() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-[6px] bg-[#090b0c] text-[#fafafa] px-[13px] py-px h-[40px] rounded-full hover:opacity-90 transition-opacity"
    >
      <div className="relative size-[16px] shrink-0">
        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 16 16">
          <path d={svgPaths.p38e0100} fill="#FAFAFA" />
        </svg>
      </div>
      <span className="font-['Geist:Regular',sans-serif] font-[450] text-[16px] leading-[24px]">
        Download for macOS
      </span>
    </a>
  );
}

function BrowserChrome() {
  return (
    <div className="h-[38px] bg-white/90 flex items-center justify-between px-[14px] shrink-0">
      <div className="flex items-center gap-[7px]">
        <div className="size-[10.8px] rounded-full bg-[#ff6467]" />
        <div className="size-[10.8px] rounded-full bg-[#ffb900]" />
        <div className="size-[10.8px] rounded-full bg-[#00c950]" />
      </div>
      <div className="flex items-center gap-1 opacity-50">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d={svgPaths.p1ff1b00} fill="#090B0C" />
        </svg>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d={svgPaths.p22bd5a00} fill="#090B0C" />
        </svg>
      </div>
      <div className="flex-1 mx-3 flex items-center gap-[7px] text-[12.6px] font-['Geist:Regular',sans-serif] text-[#737373]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 opacity-70">
          <path clipRule="evenodd" d={svgPaths.p1fbbf880} fill="#737373" fillRule="evenodd" />
        </svg>
        <span className="font-['Geist:Medium',sans-serif] font-medium text-[#737373]">Aside</span>
        <div className="bg-[rgba(10,10,10,0.25)] w-0 h-[14.4px]" />
        <span className="truncate">Cancel subscription and request refunds · Chats</span>
      </div>
      <div className="opacity-50">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d={svgPaths.p11ef6e00} fill="#090B0C" />
        </svg>
      </div>
    </div>
  );
}

function SidebarItem({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="h-[28.8px] flex items-center gap-[7.2px] px-[7.2px] py-[3.6px] rounded-[7.56px] text-[12.6px]">
      <div className="size-[14.4px] shrink-0 flex items-center justify-center">{icon}</div>
      <span className="font-['Geist:Regular',sans-serif] font-[450] text-[#090b0c] truncate">{label}</span>
    </div>
  );
}

function BrowserSidebar() {
  return (
    <div className="w-[230px] shrink-0 flex flex-col h-full border-r border-black/5">
      <div className="h-[28.8px] flex items-center justify-between pl-[14.4px] pr-[7.2px] shrink-0">
        <div className="flex items-center gap-[7.2px]">
          <img src={imgImageUserProfile} alt="" className="size-[18px] rounded-full object-cover" />
          <span className="font-['Geist:Medium',sans-serif] font-medium text-[12.6px] text-[#090b0c] tracking-[-0.126px]">Work</span>
        </div>
        <div className="size-[25.2px] bg-[rgba(255,255,255,0.85)] rounded-[10px] shadow-sm flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path clipRule="evenodd" d={svgPaths.p356e2e00} fill="#737373" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="px-[7.2px] pb-[7.2px] pt-[3.6px]">
        <div className="h-[25.2px] flex items-center px-[7.2px]">
          <span className="font-['Geist:Medium',sans-serif] font-medium text-[11.7px] text-[#737373]">Bookmarks</span>
        </div>
        {[
          { label: "Gmail", color: "#FB413B" },
          { label: "Figma", color: "#0ACF83" },
          { label: "WhatsApp", color: "#25D366" },
          { label: "Vercel", color: "#000" },
        ].map(({ label }) => (
          <SidebarItem key={label} label={label} icon={
            <div className="size-[14.4px] rounded-[2px] bg-[#f0f0f0]" />
          } />
        ))}
      </div>
      <div className="flex-1 px-[7.2px] pb-[7.2px] pt-[3.6px] overflow-hidden">
        <div className="h-[25.2px] flex items-center px-[7.2px]">
          <span className="font-['Geist:Medium',sans-serif] font-medium text-[11.7px] text-[#737373]">Tabs</span>
        </div>
        <SidebarItem label="New Tab" icon={
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d={svgPaths.p71c5b00} fill="#737373" />
          </svg>
        } />
        <div className="h-[28.8px] flex items-center gap-[7.2px] px-[7.2px] py-[3.6px] rounded-[10px] bg-[rgba(255,255,255,0.85)] shadow-[0px_0px_0px_0.45px_rgba(10,10,10,0.15),0px_1.8px_3.6px_-1.8px_rgba(0,0,0,0.05)] text-[12.6px]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
            <path clipRule="evenodd" d={svgPaths.p2259f380} fill="#737373" fillRule="evenodd" />
          </svg>
          <span className="font-['Geist:Regular',sans-serif] font-[450] text-[#090b0c] truncate text-[11px]">Cancel subscription and request refunds ⋅ Tasks</span>
        </div>
        <SidebarItem label="Instagram" icon={<div className="size-[14.4px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500" />} />
        <SidebarItem label="Aside Browser | Notion" icon={<div className="size-[14.4px] bg-[#2F3437] rounded-[2px]" />} />
        <SidebarItem label="Y Combinator" icon={
          <img src={imgImage5} alt="" className="size-full rounded-[2px] object-cover" />
        } />
      </div>
    </div>
  );
}

function AgentChatArea() {
  return (
    <div className="flex-1 min-w-0 flex flex-col h-full overflow-hidden">
      <div className="h-[39.6px] shrink-0 flex items-center justify-between px-[5.4px] border-b border-black/5">
        <div className="flex items-center gap-[5.4px]">
          <div className="size-[28.8px] rounded-[10px] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path clipRule="evenodd" d={svgPaths.p1fbbf880} fill="#737373" fillRule="evenodd" />
            </svg>
          </div>
          <span className="font-['Geist:Medium',sans-serif] font-medium text-[12.6px] text-[#0a0a0a] tracking-[-0.126px]">
            Cancel subscription and request refunds
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden px-[21.6px] pt-[18px] pb-[14.4px] flex flex-col gap-[10.8px]">
        <div className="flex justify-end">
          <div className="bg-[rgba(10,10,10,0.08)] px-[10.8px] py-[5.4px] rounded-[15px] text-[12.6px] font-['Geist:Regular',sans-serif] text-[#0a0a0a]">
            cancel all unused subscriptions and request refunds
          </div>
        </div>
        <div className="text-[12.6px] font-['Geist:Regular',sans-serif] text-[#0a0a0a]">
          {"First, I'll check your credit card statement to find subscriptions from last month."}
        </div>
        <div className="flex flex-col gap-[10.8px]">
          <div className="flex items-center gap-[9px] text-[12.6px] text-[#737373]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
              <path d={svgPaths.p29eca680} fill="#737373" />
            </svg>
            <span>
              Searched browsing history and memory for{" "}
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[#00a6f4]">Credit card</span>
            </span>
          </div>
          <div className="ml-[21.6px] bg-white rounded-[10px] shadow-[0px_0px_0px_0.45px_rgba(10,10,10,0.15),0px_0.9px_2.7px_0px_rgba(0,0,0,0.1)] overflow-hidden">
            {[
              { icon: imgImage2, title: "Card Overview  |  Chase", source: "chase.com", time: "3d ago" },
              { icon: null, title: "MEMORY.md", source: "User's bank and the credit card is Chase.", time: "8d ago" },
              { icon: null, title: "Jun's Chase", source: "Passkey", time: "Passwords" },
            ].map((row, i) => (
              <div key={i} className={`flex items-center gap-[5.4px] px-[3.6px] py-[3.6px] h-[25.2px] ${i > 0 ? "border-t border-black/5" : ""}`}>
                {row.icon ? (
                  <img src={row.icon} alt="" className="size-[14.4px] rounded-[5px] object-cover shrink-0" />
                ) : (
                  <div className="size-[14.4px] shrink-0 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d={i === 1 ? svgPaths.p233c0300 : svgPaths.p11501f80} fill="#737373" clipRule="evenodd" fillRule="evenodd" />
                    </svg>
                  </div>
                )}
                <span className="font-['Geist:Medium',sans-serif] font-medium text-[10.8px] text-[rgba(10,10,10,0.85)] shrink-0">{row.title}</span>
                <span className="flex-1 text-[10.8px] font-['Geist:Regular',sans-serif] text-[#737373] truncate">{row.source}</span>
                <span className="text-[10.8px] font-['Geist:Medium',sans-serif] font-medium text-[#737373] shrink-0">{row.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[12.6px] font-['Geist:Regular',sans-serif] text-[#0a0a0a]">
          You paid for Netflix, Amazon Prime, and LinkedIn Premium last month. Next, I&apos;ll check those services in parallel.
        </div>
      </div>
      <div className="shrink-0 px-[14.4px] pb-[3.6px]">
        <div className="bg-white rounded-full shadow-[0px_9px_13.5px_0px_rgba(0,0,0,0.1),0px_3.6px_5.4px_0px_rgba(0,0,0,0.1)] h-[36px] flex items-center px-[5.4px]">
          <div className="size-[25.2px] bg-[#f5f5f5] rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path clipRule="evenodd" d={svgPaths.p5d4d72} fill="#737373" fillRule="evenodd" />
            </svg>
          </div>
          <span className="flex-1 px-[7.2px] text-[12.6px] font-['Geist:Regular',sans-serif] text-[#737373]">
            Reply, @ for context
          </span>
          <div className="size-[25.2px] bg-[#0a0a0a] rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d={svgPaths.p3d06e500} fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubBrowserPanels() {
  const panels = [
    { img: imgImage6, logo: imgImage4, label: "Netflix" },
    { img: imgImage7, logo: null, label: "Manage Premium account", isLinkedIn: true },
    { img: imgImage8, logo: imgImage5, label: "Amazon Prime membership" },
  ];
  return (
    <div className="w-[331px] shrink-0 flex flex-col items-end pr-[18px] pt-[18px] gap-[10.8px] overflow-hidden">
      {panels.map(({ img, logo, label, isLinkedIn }, i) => (
        <div key={i} className="w-[306px] h-[191.7px] bg-white rounded-[15px] shadow-[0px_0px_0px_0.45px_rgba(10,10,10,0.15),0px_3.6px_5.4px_-0.9px_rgba(0,0,0,0.1)] overflow-hidden shrink-0">
          <img src={img} alt={label} className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 h-[28.8px] bg-[rgba(229,229,229,0.8)] flex items-center gap-[5.4px] px-[10.8px] rounded-t-[15px]">
            {logo ? (
              <img src={logo} alt="" className="size-[14.4px] rounded-[5px] object-cover shrink-0" />
            ) : isLinkedIn ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                <path d={svgPaths.pc256f80} fill="#0A66C2" />
              </svg>
            ) : null}
            <span className="font-['Geist:Medium',sans-serif] font-medium text-[10.8px] text-[#262626] truncate flex-1">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function BrowserMockup() {
  return (
    <div
      className="relative rounded-[20px] overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.64)",
        boxShadow: "0px 0px 0px 0.45px rgba(9,11,12,0.2), 0px 18px 22.5px -4.5px rgba(0,0,0,0.1), 0px 7.2px 9px -5.4px rgba(0,0,0,0.1)",
      }}
    >
      <div className="absolute inset-0 rounded-[20px] shadow-[inset_0px_0px_0px_0.9px_rgba(255,255,255,0.8)] pointer-events-none z-10" />
      <BrowserChrome />
      <div className="flex" style={{ height: 610 }}>
        <BrowserSidebar />
        <div
          className="flex-1 min-w-0 bg-[rgba(255,255,255,0.8)] overflow-hidden"
          style={{ boxShadow: "inset 0px 0px 0px 0.45px rgba(10,10,10,0.15)" }}
        >
          <div className="flex h-full">
            <AgentChatArea />
            <div className="relative">
              <SubBrowserPanels />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[993px] rounded-[33.6px] overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
      <div className="absolute inset-0 bg-[#f5f5f5] rounded-[33.6px]" />
      <img
        src={imgContainer}
        alt=""
        className="absolute inset-0 size-full object-cover rounded-[33.6px] pointer-events-none"
      />
      <div className="relative flex flex-col items-center pt-[120px] pb-16 px-6">
        <YCBadge />
        <h1 className="font-['displayFont:Regular','Plus_Jakarta_Sans',sans-serif] text-[48px] leading-[52px] text-[#090b0c] text-center tracking-[-0.48px] mt-8 mb-8 max-w-3xl">
          The most intelligent AI assistant,
          <br />
          {" but it's a browser."}
        </h1>
        <DownloadButton />
      </div>
      <div className="relative px-[60px] pb-[71px]">
        <BrowserMockup />
      </div>
    </section>
  );
}
