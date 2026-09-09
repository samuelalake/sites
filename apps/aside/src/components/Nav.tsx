import svgPaths from "@/imports/svg-rgxehr3pyp";

export default function Nav() {
  return (
    <nav className="absolute top-4 left-4 right-4 z-50 h-[56px] flex items-center justify-between px-3 md:px-6">
      {/* Logo */}
      <a href="/" className="relative h-[36px] w-[104px] flex-shrink-0">
        <svg className="absolute inset-0 h-full" fill="none" viewBox="0 0 108 36" preserveAspectRatio="xMidYMid meet">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p1392f280} fill="#090B0C" fillRule="evenodd" />
            <path d={svgPaths.p817bb00} fill="#090B0C" />
            <path d={svgPaths.p29c2b800} fill="#090B0C" />
            <path d={svgPaths.p23e55d80} fill="#090B0C" />
            <path d={svgPaths.p5e74d00} fill="#090B0C" />
            <path d={svgPaths.p23e27e00} fill="#090B0C" />
          </g>
        </svg>
      </a>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10">
        {["Features", "Use cases", "Resources", "Pricing"].map((item) => (
          <a
            key={item}
            href="#"
            className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#090b0c] hover:opacity-70 transition-opacity"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Download button */}
      <a
        href="#"
        className="bg-[#090b0c] text-[#fafafa] font-['displayFont:Medium','Plus_Jakarta_Sans',sans-serif] text-[14px] leading-[20px] px-[13px] py-[8px] rounded-full hover:opacity-90 transition-opacity"
      >
        Download
      </a>
    </nav>
  );
}
