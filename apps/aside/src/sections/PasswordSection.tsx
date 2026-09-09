import svgPaths from "@/imports/svg-rgxehr3pyp";
import imgImageSecretsStayInvisibleToAi from "@/imports/e60966a84cad8457ebf2f4970758caca6d473b82.png";
import imgImageHumanApprovalAtTheEdge from "@/imports/fceaf1c40f58d58b5ce28a18f6495123948ed67b.png";
import imgImageARecordOfEveryAccess from "@/imports/211775414bdcb4d887aa582ff6a8372d7b253be3.png";
import imgImagePasswordManager from "@/imports/e6cea731e40fc1ad4edd56c2000e2872c90be9b8.png";

const featureTiles = [
  {
    img: imgImageSecretsStayInvisibleToAi,
    title: "Secrets stay invisible to AI",
    desc: " Credentials are autofilled into websites, not exposed to the agent.",
  },
  {
    img: imgImageHumanApprovalAtTheEdge,
    title: "Human approval at the edge",
    desc: " Sensitive actions like payments, posts, and messages always wait for your confirmation.",
  },
  {
    img: imgImageARecordOfEveryAccess,
    title: "A record of every access",
    desc: " Every credential use is logged, so you know exactly what the agent touched.",
  },
];

export default function PasswordSection() {
  return (
    <section className="border-b border-[rgba(0,0,0,0.06)]">
      <div className="max-w-[1536px] mx-auto px-24">
        <div className="border-x border-[rgba(0,0,0,0.06)] px-[49px] py-24">
          <div className="flex items-center gap-[2px] mb-6">
            <p className="font-['Geist:Medium',sans-serif] font-medium leading-[24px] text-[#00a6f4] text-[16px]">Password Manager</p>
            <div className="size-[16px]">
              <svg className="size-full" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p3c537500} fill="#00A6F4" />
              </svg>
            </div>
          </div>
          <h2 className="font-['displayFont:Regular','Plus_Jakarta_Sans',sans-serif] text-[44px] leading-[48px] text-[#090b0c]">
            Password that *************.
          </h2>
          <p className="font-['Geist:Regular',sans-serif] font-normal text-[18px] leading-[28px] text-[#737373] mt-4 max-w-2xl">
            AI agents stop at login screen and ask you to log in every time.{" "}
            Aside lets agents sign in through autofill, without ever exposing your credentials to the AI.
          </p>
        </div>
        <div className="border-x border-[rgba(0,0,0,0.06)] pb-24">
          <div className="flex gap-6 px-px">
            {featureTiles.map(({ img, title, desc }) => (
              <div key={title} className="flex-1 flex flex-col">
                <div className="bg-[#f5f5f5] h-[320px] rounded-[11.2px] overflow-hidden">
                  <img src={img} alt={title} className="size-full object-cover" />
                </div>
                <div className="px-4 py-5">
                  <p className="font-['Geist:Medium',sans-serif] font-medium text-[16px] leading-[24px] text-[#090b0c]">
                    {title}
                    <span className="font-['Geist:Regular',sans-serif] font-normal text-[#737373]">{desc}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-dashed border-[rgba(0,0,0,0.06)]" />
        <div className="border-x border-[rgba(0,0,0,0.06)] flex gap-6">
          <div className="flex-1 flex flex-col px-16 py-12">
            <div>
              <p className="font-['displayFont:Medium','Plus_Jakarta_Sans',sans-serif] font-medium text-[30px] leading-[36px] text-[#090b0c]">
                Aside Password Manager
              </p>
              <p className="font-['displayFont:Medium','Plus_Jakarta_Sans',sans-serif] font-medium text-[30px] leading-[36px] text-[rgba(115,115,115,0.6)] mt-px">
                The first password manager built for agents.
              </p>
            </div>
            <div className="mt-4">
              <button className="bg-[#f5f5f5] h-[40px] px-[13px] rounded-[16.8px] font-['Geist:Medium',sans-serif] font-medium text-[16px] leading-[24px] text-[#171717] hover:bg-[#e5e5e5] transition-colors">
                Learn more
              </button>
            </div>
            <div className="mt-auto pt-8 flex flex-col gap-4">
              <div>
                <p className="font-['Geist:Medium',sans-serif] font-medium text-[16px] leading-[24px] text-[#090b0c]">Hardware-backed E2E encryption</p>
                <p className="font-['Geist:Regular',sans-serif] text-[16px] leading-[24px] text-[#737373]">Your data is fully encrypted locally and protected by Secure Enclave.</p>
              </div>
              <div>
                <p className="font-['Geist:Medium',sans-serif] font-medium text-[16px] leading-[24px] text-[#090b0c]">Scoped access and audit log</p>
                <p className="font-['Geist:Regular',sans-serif] text-[16px] leading-[24px] text-[#737373]">Give the agent access only to what each task needs. See what it used, when, and why.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#22292b] w-[560px] shrink-0 h-[468px] overflow-hidden">
            <img src={imgImagePasswordManager} alt="Password Manager" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
