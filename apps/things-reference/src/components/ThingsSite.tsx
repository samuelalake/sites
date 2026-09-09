import { useState } from "react";
import svgPaths from "@/imports/ThingsToDoListAppForMacIOs/svg-uywy273vp2";
import imgImageThings from "@/imports/ThingsToDoListAppForMacIOs/4a6729e23190a7839a4ce6b903a617c03c456286.png";
import imgImageMeetThings from "@/imports/ThingsToDoListAppForMacIOs/e5388114c506383bc0d999ae2f82bbe2e0fc175c.png";
import imgImageFeatures from "@/imports/ThingsToDoListAppForMacIOs/63f9d608f7ab486ba7d9c4d035f334d4b7f9e451.png";
import imgImageScreenshots from "@/imports/ThingsToDoListAppForMacIOs/a0d44c5e102bc4f7da0a7811bcc8d6effb811fa0.png";
import imgImageGetThings from "@/imports/ThingsToDoListAppForMacIOs/d62ce88c1fd95504c85e0fc845d02e5680bd5add.png";
import imgImageWhatPeople from "@/imports/ThingsToDoListAppForMacIOs/d0a2b2362b7395a72eca6f8cffefbbf8bf125b77.png";
import imgXLogo from "@/imports/ThingsToDoListAppForMacIOs/a18f01c9c3dc7f2e2c21c34722f4dd3b83f061d2.png";
import imgAvatar0 from "@/imports/ThingsToDoListAppForMacIOs/b86535dcf6cb3c8aaa7367ee3af9383d35107147.png";
import imgAvatar1 from "@/imports/ThingsToDoListAppForMacIOs/92a7fbf6e162ca07d3fa2603be9ba28faaa5078c.png";
import imgAvatar2 from "@/imports/ThingsToDoListAppForMacIOs/021c8dec9f7bc242e2df3d4fd27fb86ecd785961.png";
import imgAvatar3 from "@/imports/ThingsToDoListAppForMacIOs/1c576993f9649c6c7d443fc360c93b416a73f29e.png";
import imgAvatar4 from "@/imports/ThingsToDoListAppForMacIOs/08aaba486958fb22f900b2619d3af741693150f7.png";
import imgAvatar5 from "@/imports/ThingsToDoListAppForMacIOs/bad699025957e8c24cb9c25b93a4f977a4514c53.png";
import imgAvatar6 from "@/imports/ThingsToDoListAppForMacIOs/e20bff8fcd45908496889718a466e21289f2965d.png";
import imgAvatar7 from "@/imports/ThingsToDoListAppForMacIOs/f427dcb062690f631b5e213c8c80fe258a3b2902.png";
import imgImageReadAllAboutIt from "@/imports/ThingsToDoListAppForMacIOs/b8476207dfd218ff430fe8fb11bdb5d3ef15e141.png";
import imgContainer2 from "@/imports/ThingsToDoListAppForMacIOs/df5a1d611cd761fd4ee1d94887d135127787dc38.png";
import imgContainer3 from "@/imports/ThingsToDoListAppForMacIOs/ee2f62f0c03ad66e70e3e5d76a111307765b7dc6.png";
import imgAwardScreenshot from "@/imports/ThingsToDoListAppForMacIOs/5d64e1f495c3279cf246eacecdb56185c28d2682.png";
import imgMacStoriesBest2023 from "@/imports/ThingsToDoListAppForMacIOs/cb8d3153cf08fa11423501bf48c780e1dcb74b49.png";
import imgMacStoriesBest2018 from "@/imports/ThingsToDoListAppForMacIOs/62acf07b942d807aa65ec3efb7eb536f90613a31.png";
import imgImageNewsletter from "@/imports/ThingsToDoListAppForMacIOs/285915b215ddb87845d4ca0fe9b56a4810fdfb40.png";
import imgCulturedCodeLogo from "@/imports/ThingsToDoListAppForMacIOs/a7cc0129e85aec86c661cc3a4934ba9398133f28.png";

const FONT_SEMIBOLD = "font-['SF_Pro:Semibold',_-apple-system,_BlinkMacSystemFont,_sans-serif]";
const FONT_REGULAR = "font-['SF_Pro:Regular',_-apple-system,_BlinkMacSystemFont,_sans-serif]";
const FONT_BOLD = "font-['SF_Pro:Bold',_-apple-system,_BlinkMacSystemFont,_sans-serif]";

const LIVE_ASSETS = {
  play: "/things-live/remotecontrol-play.svg",
  quoteMark: "/things-live/quote-mark.svg",
  quoteCaret: "/things-live/nicequote-bubble-tip.svg",
  mac: "/things-live/productcard-mac.svg",
  iPhoneWatch: "/things-live/productcard-iphone-watch.svg",
  iPad: "/things-live/productcard-ipad.svg",
  vision: "/things-live/productcard-vision.svg",
  macStore: "/things-live/appstore-mac-black.svg",
  iOSStore: "/things-live/appstore-ios-black.svg",
};

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[#f2f5f7] shadow-[0px_1px_0px_0px_rgba(38,52,74,0.15)] sticky top-0 z-50">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={imgImageThings} alt="Things" className="h-8 w-auto" />
          <span className={`${FONT_SEMIBOLD} text-[15px] text-[#303336] tracking-[-0.23px]`}>Things</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6">
          {["Features", "Support", "Blog"].map((label) => (
            <a key={label} href="#" className={`${FONT_SEMIBOLD} text-[15px] text-[rgba(38,52,74,0.5)] hover:text-[rgba(38,52,74,0.8)] transition-colors`}>{label}</a>
          ))}
        </nav>
        <button className="sm:hidden p-2 text-[rgba(38,52,74,0.6)]" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {open
              ? <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              : <path fillRule="evenodd" clipRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" />
            }
          </svg>
        </button>
      </div>
      {open && (
        <div className="sm:hidden bg-[#f2f5f7] border-t border-[rgba(38,52,74,0.1)] px-4 pb-3">
          {["Features", "Support", "Blog"].map((label) => (
            <a key={label} href="#" className={`block py-2 ${FONT_SEMIBOLD} text-[15px] text-[rgba(38,52,74,0.6)]`}>{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-[#f2f5f7]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8 pt-12 pb-0 flex flex-col items-center text-center">
        <img src={imgImageThings} alt="Things app icon" className="w-[160px] sm:w-[200px] h-auto" />
        <p className={`${FONT_REGULAR} text-[#44474b] text-lg sm:text-[22px] leading-relaxed mt-8 max-w-[520px]`}>
          Things is the award-winning personal task manager that helps you plan your day, manage your projects, and make real progress toward your goals.
        </p>
        <a href="#" className={`${FONT_SEMIBOLD} intro-video-link text-[#5c9cf5] text-lg sm:text-[22px] mt-4 mb-10`}>
          <img src={LIVE_ASSETS.play} alt="" aria-hidden="true" />
          Watch Introduction Video
        </a>
      </div>
      <div className="w-full overflow-hidden">
        <img src={imgImageMeetThings} alt="Things on all devices" className="w-full object-cover max-h-[480px] sm:max-h-none" />
      </div>
    </section>
  );
}

// ─── Simply Powerful ──────────────────────────────────────────────────────────

function SimplyPowerful() {
  return (
    <section className="bg-[#fbfcfe] pt-16 sm:pt-20 pb-0 overflow-hidden">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-2">
            <img src={imgImageFeatures} alt="" className="w-14 h-14" />
            <h2 className={`${FONT_BOLD} text-[#2c3138] text-[28px] sm:text-[36px] tracking-[0.37px]`}>Simply Powerful</h2>
          </div>
          <p className={`${FONT_REGULAR} text-[#44474b] text-base sm:text-[20px] leading-relaxed mt-6 max-w-[500px]`}>
            Things makes it easy. Within the hour, you'll have everything off your mind and neatly organized – from routine tasks to your biggest life goals – and you can start focusing on what matters today.
          </p>
          <a href="#" className={`${FONT_SEMIBOLD} text-[#5c9cf5] text-base sm:text-[20px] mt-4 mb-10`}>See features</a>
        </div>
      </div>
      <div className="max-w-[900px] mx-auto px-4 sm:px-0 overflow-visible">
        <img
          src={imgImageScreenshots}
          alt="Screenshots of Things on Mac, iPhone, iPad, and Apple Watch"
          className="w-full sm:w-[110%] sm:-ml-[5%] max-w-none object-contain"
        />
      </div>
    </section>
  );
}

// ─── Download CTA (Get Things, Get Done) ──────────────────────────────────────

function PromoBanner() {
  return (
    <div className="bg-[#27313f] rounded-[18px] p-5 flex gap-4 items-start shadow-sm mb-5">
      <div className="shrink-0 w-14 h-14 overflow-hidden relative">
        <div className="absolute inset-[5.56%_3.58%]">
          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 59.4239 56.8859" preserveAspectRatio="none">
            <path clipRule="evenodd" d={svgPaths.p2e2e380} fill="#FA1955" fillRule="evenodd" />
            <path d={svgPaths.p1b98d600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p35523080} stroke="white" strokeWidth="4" />
            <path d={svgPaths.p13a56980} stroke="white" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="min-w-0">
        <p className={`${FONT_BOLD} text-white text-[13px] uppercase tracking-wide`} style={{ fontFamily: "'SF Pro:Condensed Heavy', -apple-system, sans-serif" }}>
          Mac App Store Promotion
        </p>
        <p className={`${FONT_REGULAR} text-white/90 text-[14px] leading-snug mt-1`}>
          Get <strong>30%</strong> off the <strong>Mac</strong> version from August 31 to September 10. The price you see on the App Store already has the discount applied.
        </p>
      </div>
    </div>
  );
}

function PlatformCard({ title, lines, icon, storeBadge, badge, badgeLabel }: {
  title: string;
  lines: string[];
  icon: string;
  storeBadge: string;
  badge?: boolean;
  badgeLabel?: string;
}) {
  return (
    <div className="bg-[#f2f5f7] rounded-[18px] p-[18px] min-h-[314px] flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <img src={icon} alt="" aria-hidden="true" className="w-[100px] h-[100px] object-contain" />
        <p className={`${FONT_BOLD} text-[#303336] text-[18px] text-center mb-2`}>{title}</p>
        <div className={`${FONT_REGULAR} text-[rgba(0,7,18,0.44)] text-[13px] text-center leading-relaxed`}>
          {lines.map((l, i) => (
            <p key={i} className={i === 1 ? "line-through" : i === 2 ? `${FONT_SEMIBOLD} font-semibold` : undefined}>{l}</p>
          ))}
        </div>
        {badge && badgeLabel && (
          <div className="flex justify-center mt-2">
            <div className="relative inline-flex items-center bg-white/60 rounded-lg px-3 py-1 gap-1">
              <img src={imgContainer3} alt="" className="w-4 h-4 object-contain" />
              <span className="text-[#55606e] text-[11px] font-extrabold uppercase tracking-wide" style={{ fontFamily: "'SF Pro:Condensed Bold', -apple-system, sans-serif" }}>{badgeLabel}</span>
              <img src={imgContainer2} alt="" className="w-4 h-4 object-contain" />
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-center">
        <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">
          <img src={storeBadge} alt={title === "Mac" ? "Download on the Mac App Store" : "Download on the App Store"} className="h-10 w-auto" />
        </a>
      </div>
    </div>
  );
}

function GetThings() {
  return (
    <section className="bg-white pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <img src={imgImageGetThings} alt="" className="w-14 h-14" />
            <h2 className={`${FONT_BOLD} text-[#2c3138] text-[28px] sm:text-[36px] tracking-[0.37px]`}>Get Things, Get Done</h2>
          </div>
          <p className={`${FONT_REGULAR} text-[#44474b] text-base sm:text-[20px] leading-relaxed mt-6 max-w-[500px]`}>
            Whatever it is you want to accomplish in life, Things can help you get there. Install the app today and see what you can do!
          </p>
        </div>
        <PromoBanner />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <PlatformCard
            title="Mac"
            lines={["macOS 13.3 or later", "$49.99 (US)", "$34.99 (US)", "view in your currency"]}
            icon={LIVE_ASSETS.mac}
            storeBadge={LIVE_ASSETS.macStore}
            badge
            badgeLabel="30% Off"
          />
          <PlatformCard
            title="iPhone & Watch"
            lines={["iOS 16.4 or later", "$9.99 (US)", "view in your currency"]}
            icon={LIVE_ASSETS.iPhoneWatch}
            storeBadge={LIVE_ASSETS.iOSStore}
          />
          <PlatformCard
            title="iPad"
            lines={["iPadOS 16.4 or later", "$19.99 (US)", "view in your currency"]}
            icon={LIVE_ASSETS.iPad}
            storeBadge={LIVE_ASSETS.iOSStore}
          />
          <PlatformCard
            title="Vision Pro"
            lines={["visionOS 26 or later", "$29.99 (US)", "view in your currency"]}
            icon={LIVE_ASSETS.vision}
            storeBadge={LIVE_ASSETS.iOSStore}
          />
        </div>
      </div>
    </section>
  );
}

// ─── What People Are Saying ───────────────────────────────────────────────────

const TWEETS = [
  { avatar: imgAvatar0, name: "Gavin Hughes", date: "Aug 24", text: "@culturedcode, Things is such a joy to use and has been liberating my mind for nearly 20 years. Thank you 🙏🏻❤️" },
  { avatar: imgAvatar1, name: "Kenley", date: "Aug 5", text: "One thing that has helped me with ADHD is keeping tasks and projects organized. I've been using Things by @culturedcode recently and it's been amazing." },
  { avatar: imgAvatar2, name: "George", date: "Jul 21", text: "wild that in almost 10 years of Things 3 i've never encountered a single bug. i don't know how @culturedcode does it." },
  { avatar: imgAvatar3, name: "Grady Gaugler", date: "Jul 14", text: "@culturedcode Things is literally the one app I can't live without. I've tried the others and just can't leave Things. It's a timeless app" },
  { avatar: imgAvatar4, name: "スディプト", date: "May 16", text: "came back to Things @culturedcode — realized its unbeatable. such a good polished product. every other todo app is now a shitty AI app, trying to do too many things and not good at anything." },
  { avatar: imgAvatar5, name: "Prince Singh", date: "Apr 29", text: "Things 3 by @culturedcode is the most beautiful app i have ever seen. Attention to details is insane." },
  { avatar: imgAvatar6, name: "cienlim", date: "Mar 14", text: "in AI era, I still love using @culturedcode to manage my life & task just love its simplicity" },
  { avatar: imgAvatar7, name: "Justin Schueler", date: "Mar 5", text: "@kentdebruin Minimalist ui, powerful shortcuts and commands, focus, performance, no noise. With all hype and fancy stuff here and there, @culturedcode well crafted simplicity + powerful shortcuts is still the best (for me)." },
];

function TweetCard({ avatar, name, date, text }: { avatar: string; name: string; date: string; text: string }) {
  return (
    <div className="bg-white rounded-[13px] shadow-[0px_2px_4px_rgba(0,0,0,0.1),0px_0px_1px_rgba(0,0,0,0.1)] p-3 flex flex-col gap-2">
      <p className={`${FONT_REGULAR} text-[#303336] text-[13px] leading-[1.5] flex-1`}>{text}</p>
      <div className="flex items-center gap-2 mt-1">
        <img src={avatar} alt={name} className="w-8 h-8 rounded-[3px] object-cover shrink-0" />
        <div>
          <p className={`${FONT_BOLD} text-[#8e9196] text-[12px] leading-tight`}>{name}</p>
          <p className={`${FONT_REGULAR} text-[#8e9196] text-[12px]`}>{date}</p>
        </div>
        <div className="ml-auto">
          <img src={imgXLogo} alt="X" className="w-4 h-4 object-contain opacity-50" />
        </div>
      </div>
    </div>
  );
}

function WhatPeopleAreSaying() {
  return (
    <section className="bg-[#f2f5f7] py-16 sm:py-20">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <img src={imgImageWhatPeople} alt="" className="w-14 h-14" />
            <h2 className={`${FONT_BOLD} text-[#2c3138] text-[28px] sm:text-[36px] tracking-[0.37px]`}>What People Are Saying</h2>
          </div>
          <p className={`${FONT_REGULAR} text-[#44474b] text-base sm:text-[20px] leading-relaxed mt-6 max-w-[500px]`}>
            For more than a decade, Things has been helping people around the world get organized and achieve their goals. We love to hear it!
          </p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {TWEETS.map((t, i) => (
            <div key={i} className="break-inside-avoid">
              <TweetCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Read All About It ────────────────────────────────────────────────────────

function AwardBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center bg-[#eef0f2] rounded-lg px-2.5 py-1 gap-1.5 w-fit">
      <img src={imgContainer3} alt="" className="w-[14px] h-[14px] object-contain" />
      <span className="text-[#55606e] text-[11px] font-extrabold uppercase tracking-wide" style={{ fontFamily: "'SF Pro:Condensed Bold', -apple-system, sans-serif" }}>{label}</span>
      <img src={imgContainer2} alt="" className="w-[14px] h-[14px] object-contain" />
    </div>
  );
}

function QuoteCard({
  quote,
  outlet,
  author,
  badge,
  awardImg,
  caretSide,
}: {
  quote: React.ReactNode;
  outlet: React.ReactNode;
  author?: string;
  badge?: string;
  awardImg?: string;
  caretSide: "left" | "right";
}) {
  return (
    <div className="flex flex-col">
      <div
        className={`quote-bubble quote-bubble-${caretSide} bg-[#f2f5f7] rounded-[18px] p-[27px] relative flex-1`}
        style={{ "--quote-caret": `url(${LIVE_ASSETS.quoteCaret})` } as React.CSSProperties}
      >
        {awardImg && (
          <img src={awardImg} alt="" className="absolute right-4 top-0 h-20 object-contain" />
        )}
        <p className={`${FONT_REGULAR} text-[#303336] text-[17px] sm:text-[18px] leading-[1.35]`}>
          <img src={LIVE_ASSETS.quoteMark} alt="" aria-hidden="true" className="quote-mark quote-mark-start" />
          {quote}
          <img src={LIVE_ASSETS.quoteMark} alt="" aria-hidden="true" className="quote-mark quote-mark-end" />
        </p>
        {badge && (
          <div className="mt-3 flex justify-center">
            <AwardBadge label={badge} />
          </div>
        )}
      </div>
      <div className={`quote-attribution quote-attribution-${caretSide} pt-2.5 flex items-center gap-2`}>
        <div className="text-[#55606e]">{outlet}</div>
        {author && <span className={`${FONT_REGULAR} text-[#55606e] text-[13px]`}>{author}</span>}
      </div>
    </div>
  );
}

function MacStoriesLogo() {
  return (
    <svg className="h-6 w-auto" fill="none" viewBox="0 0 110 27.5">
      <path d={svgPaths.p397f1a40} fill="#55606E" />
      <path d={svgPaths.p28442470} fill="#55606E" />
    </svg>
  );
}

function AppleLogo() {
  return (
    <svg className="h-6 w-auto" fill="none" viewBox="0 0 28 29.75">
      <path d={svgPaths.p1c6e9e00} fill="#55606E" />
    </svg>
  );
}

function WirecutterLogo() {
  return (
    <svg className="h-5 w-auto" fill="none" viewBox="0 0 118.832 29.3869">
      <path d={svgPaths.p3090300} fill="#55606E" />
      <path d={svgPaths.p112fc5b0} fill="#55606E" />
      <path d={svgPaths.p18211e00} fill="#55606E" />
      <path d={svgPaths.p38fdce00} fill="#55606E" />
      <path d={svgPaths.p3c6015c0} fill="#55606E" />
      <path d={svgPaths.pc461000} fill="#55606E" />
      <path d={svgPaths.pb2d6400} fill="#55606E" />
      <path d={svgPaths.pbfe2000} fill="#55606E" />
      <path d={svgPaths.p27e9a040} fill="#55606E" />
      <path d={svgPaths.p1c433f80} fill="#55606E" />
      <path d={svgPaths.p307d4200} fill="#55606E" />
    </svg>
  );
}

function WiredLogo() {
  return (
    <svg className="h-5 w-auto" fill="none" viewBox="0 0 90 23.75">
      <path d={svgPaths.p8fd9b80} fill="#55606E" />
    </svg>
  );
}

function IMoreLogo() {
  return (
    <svg className="h-5 w-auto" fill="none" viewBox="0 0 60 22.672">
      <path d={svgPaths.p3ed73000} fill="#55606E" />
      <path d={svgPaths.p333c5100} fill="#55606E" />
      <path d={svgPaths.p17ebbd00} fill="#55606E" />
      <path d={svgPaths.p122f7900} fill="#55606E" />
      <path d={svgPaths.p27baf00} fill="#55606E" />
    </svg>
  );
}

const PRESS_QUOTES = [
  {
    quote: <><span className="underline">A joy to use and beautiful to look at</span>, Things 3 has been completely re-imagined to improve efficiency. Its thoughtful design and powerful features help you get organized and make the most out of every day. [...] Things 3 sets the standard for how apps should be designed and developed to be their best on every device.</>,
    outlet: <AppleLogo />,
    badge: "Apple Design Award Winner",
  },
  {
    quote: <>Things 3 is <span className="underline">the best task management app out there</span>. It is simple and easy to use, and it has a beautiful design. While being powerful enough for even the most detailed and organized power user, it is also simple enough for the rest of us.</>,
    outlet: <><span className={`${FONT_BOLD} text-[13px]`}>The Sweet Setup</span></>,
    author: "Shawn Blanc",
  },
  {
    quote: <>Things 3 offers the <span className="underline">best combination of design and functionality of any app we tested</span>, with nearly all the features of other power user applications and a delightful interface that never gets in the way of your work.</>,
    outlet: <WirecutterLogo />,
    author: "David Pierce",
  },
  {
    quote: <>There are <span className="underline">plenty of reasons to love Things</span>, such as its elegant design, excellent collection of keyboard shortcuts, fast sync, and support for Markdown notes in projects and tasks. However, the app's native support for Shortcuts is something special.</>,
    outlet: <MacStoriesLogo />,
    author: "Federico Viticci",
    badge: "Best New Feature",
    awardImg: imgMacStoriesBest2023,
  },
  {
    quote: <>Things never feels messy or overbearing, no matter the length of your task list. […] <span className="underline">It's more like a clean, crisp piece of paper, ready whenever you need it</span>.</>,
    outlet: <WiredLogo />,
    author: "David Pierce",
  },
  {
    quote: <>Things 3 has always been a top-notch task manager app, but this iteration is its absolute best. The developers have finally found the <span className="underline">perfect balance of easy use and robust features</span>. [...] I'm loving it, and I think you will too.</>,
    outlet: <IMoreLogo />,
    author: "Lory Gil",
  },
  {
    quote: <>Things 3 has an <span className="underline">amazing design</span> and aesthetic, and a ton of <span className="underline">powerful new features</span> that tie it all together. It's hard for me to resist when something looks this good yet still functions properly.</>,
    outlet: <><span className={`${FONT_BOLD} text-[13px]`}>AppAdvice</span></>,
    author: "Christine Chan",
  },
  {
    quote: <>You would be hard-pressed to find a better looking to-do app than Things. [...] It's simple, but <span className="underline">beautiful in its simplicity</span>. Screenshots don't quite do it the justice it deserves.</>,
    outlet: <MacStoriesLogo />,
    author: "Ryan Christoffel",
  },
  {
    quote: <>[…] let's end with an example of a piece of iOS software that is pure craft: Things. Each animation is purposeful. <span className="underline">Mainly, it is fun. It's a fun app to be in</span>. I was glad to open it ten years ago, and I am glad to open it today.</>,
    outlet: <><span className={`${FONT_BOLD} text-[13px]`}>Craig Mod</span></>,
  },
  {
    quote: <>Everyone needs a task manager—and Things is adaptable enough for anyone. […] <span className="underline">It's like the unicorn of productivity tools</span>: deep enough for serious work, surprisingly easy to use, and gorgeous enough to enjoy staring at.</>,
    outlet: <AppleLogo />,
    badge: "App Store Editors' Choice",
  },
  {
    quote: <>One quick glance at the new UI is all it takes to fall in love with it. The design team at Cultured Code have worked their magic all over the app, and every individual bit and pixel has been redesigned and <span className="underline">crafted to perfection</span>.</>,
    outlet: <><span className={`${FONT_BOLD} text-[13px]`}>Beautiful Pixels</span></>,
    author: "Preshit Deorukhkar",
  },
  {
    quote: <>For pushing the iPad down a path untraveled by other apps, Things 3.6 is the MacStories Selects <span className="underline">"Best App Update"</span> of 2018.</>,
    outlet: <MacStoriesLogo />,
    badge: "Best App Update",
    awardImg: imgMacStoriesBest2018,
  },
];

function ReadAllAboutIt() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <img src={imgImageReadAllAboutIt} alt="" className="w-14 h-14" />
            <h2 className={`${FONT_BOLD} text-[#2c3138] text-[28px] sm:text-[36px] tracking-[0.37px]`}>Read All About It</h2>
          </div>
          <p className={`${FONT_REGULAR} text-[#44474b] text-base sm:text-[20px] leading-relaxed mt-6 max-w-[520px]`}>
            Honored <em>twice</em> with the prestigious Apple Design Award, Things has won over critics with its unique blend of powerful functionality and ease-of-use. Here's what they have to say.
          </p>
        </div>

        <div className="mb-6 rounded-[18px] overflow-hidden shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1),0px_0px_0px_1px_rgba(0,0,0,0.05)]">
          <img src={imgAwardScreenshot} alt="Things – Apple Design Award Winner" className="w-full object-cover" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PRESS_QUOTES.map((q, i) => (
            <QuoteCard key={i} {...q} caretSide={i % 2 === 0 ? "left" : "right"} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

function Newsletter() {
  return (
    <section className="bg-[#f2f5f7] py-16 sm:py-20">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-2">
          <img src={imgImageNewsletter} alt="" className="w-14 h-14" />
          <h2 className={`${FONT_BOLD} text-[#2c3138] text-[28px] sm:text-[36px] tracking-[0.37px]`}>Things Newsletter</h2>
        </div>
        <p className={`${FONT_REGULAR} text-[#44474b] text-base sm:text-[20px] leading-relaxed mt-6 max-w-[500px]`}>
          Subscribe to our newsletter to stay up-to-date on Things' latest news. We only send it out a few times per year when we have something interesting to tell you.
        </p>
        <div className="mt-10 w-full max-w-[500px]">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="me@example.com"
              className={`${FONT_REGULAR} flex-1 bg-white border border-[#dfe3e8] rounded-[6px] px-3 py-2 text-[15px] text-[#303336] placeholder-[#818489] outline-none focus:border-[#5c9cf5] focus:ring-1 focus:ring-[#5c9cf5]`}
            />
            <button className="bg-[#4f91fb] text-white rounded-[8px] px-6 py-2 text-[14px] font-semibold shrink-0 hover:bg-[#3d80ea] transition-colors">
              Subscribe
            </button>
          </div>
          <p className={`${FONT_REGULAR} text-[#9299a4] text-[13px] leading-relaxed mt-4 text-left`}>
            Your privacy is very important to us. We'll only ever use your address to send you this newsletter, and you can{" "}
            <a href="#" className="underline">unsubscribe</a> at any time. See our{" "}
            <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const FOOTER_COLS = [
  {
    heading: "Products",
    links: ["Things for Mac", "Things for iPhone", "Things for Watch", "Things for iPad", "Things for Vision"],
  },
  {
    heading: "Support",
    links: ["Help", "Contact", "Getting Productive"],
  },
  {
    heading: "News",
    links: ["Blog", "Newsletter", "Status Board"],
  },
  {
    heading: "Company",
    links: ["About Us", "Jobs", "Privacy Policy", "Terms", "Press"],
  },
];

function Footer() {
  return (
    <footer className="bg-[#f2f5f7] pt-12 pb-8">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8 border-t border-[rgba(0,28,70,0.12)] pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <p className={`${FONT_BOLD} text-[rgba(0,15,36,0.46)] text-[13px] mb-2`}>{col.heading}</p>
              <ul className="space-y-1.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className={`${FONT_REGULAR} text-[rgba(0,15,36,0.46)] text-[13px] hover:text-[rgba(0,15,36,0.7)] transition-colors`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[rgba(0,28,70,0.06)] pt-6 flex justify-center">
          <a href="#" className="flex items-center gap-1.5 opacity-50 hover:opacity-70 transition-opacity">
            <span className="block w-5 h-5 overflow-hidden" aria-hidden="true">
              <img src={imgCulturedCodeLogo} alt="" className="h-5 w-auto max-w-none" />
            </span>
            <span className={`${FONT_REGULAR} text-[rgba(0,15,36,0.46)] text-[13px]`}>Cultured Code</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ThingsSite() {
  return (
    <div className="min-h-full">
      <Nav />
      <Hero />
      <SimplyPowerful />
      <GetThings />
      <WhatPeopleAreSaying />
      <ReadAllAboutIt />
      <Newsletter />
      <Footer />
    </div>
  );
}
