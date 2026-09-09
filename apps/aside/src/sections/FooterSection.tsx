import svgPaths from "@/imports/svg-rgxehr3pyp";

const footerColumns = [
  {
    heading: "Features",
    links: [
      { label: "Browser agent" },
      { label: "Password Manager" },
      { label: "Memory" },
    ],
  },
  {
    heading: "Use cases",
    links: [
      { label: "Operations" },
      { label: "Hiring Teams" },
      { label: "Sales" },
      { label: "Developers" },
      { label: "Researchers" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog" },
      { label: "Changelog", external: true },
      { label: "Docs", external: true },
      { label: "Community", external: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About" },
      { label: "Careers", external: true },
    ],
  },
];

function ExternalArrow() {
  return (
    <svg className="inline-block size-[14px] ml-0.5 -mt-0.5" fill="none" viewBox="0 0 14 14">
      <path d={svgPaths.p3d316e00} fill="#090B0C" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.06)]">
      <div className="max-w-[1536px] mx-auto px-24 py-24">
        <div className="flex items-start justify-between mb-12">
          <div className="relative h-[36px] w-[108px]">
            <svg className="h-full" fill="none" viewBox="0 0 108 36" preserveAspectRatio="xMidYMid meet">
              <g>
                <path clipRule="evenodd" d={svgPaths.p1392f280} fill="#090B0C" fillRule="evenodd" />
                <path d={svgPaths.p817bb00} fill="#090B0C" />
                <path d={svgPaths.p29c2b800} fill="#090B0C" />
                <path d={svgPaths.p23e55d80} fill="#090B0C" />
                <path d={svgPaths.p5e74d00} fill="#090B0C" />
                <path d={svgPaths.p23e27e00} fill="#090B0C" />
              </g>
            </svg>
          </div>
          <div className="flex items-center gap-6">
            {["Pricing", "Terms", "Privacy"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#090b0c] hover:opacity-70 transition-opacity"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-0 mb-16">
          {footerColumns.map((col) => (
            <div key={col.heading} className="w-[240px] shrink-0">
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[rgba(115,115,115,0.8)] mb-3">
                {col.heading}
              </p>
              <div className="flex flex-col gap-0">
                {col.links.map(({ label, external }) => (
                  <a
                    key={label}
                    href="#"
                    className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[28px] text-[#090b0c] hover:opacity-70 transition-opacity"
                  >
                    {label}
                    {external && <ExternalArrow />}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-8 border-t border-[rgba(0,0,0,0.06)]">
          <p className="font-['Geist:Regular',sans-serif] text-[14px] leading-[20px] text-[#737373]">
            © 2026 Aside Computer Inc.
          </p>
          <div className="flex items-center gap-2">
            <a href="#" aria-label="Follow us on X" className="size-[20px] flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg className="size-full" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.pfe92700} fill="#737373" />
              </svg>
            </a>
            <a href="#" aria-label="Follow us on LinkedIn" className="size-[20px] flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg className="size-full" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.pe192280} fill="#737373" />
              </svg>
            </a>
            <a href="#" aria-label="Backed by Y Combinator" className="size-[20px] flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg className="size-full" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p27b0dc00} fill="#737373" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
