import PaperSubmitForm from "../components/PaperForm";

export default function Papers(){

      return (
        <>
        <section className="relative overflow-hidden py-16 sm:py-20 bg-[#11b3d4] text-white">
          {/* soft gradient + glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/5 to-black/15" />
            <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/12 blur-3xl" />
            <div className="absolute -bottom-28 right-[-120px] h-[520px] w-[520px] rounded-full bg-black/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-center">
              <p className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-[11px] sm:text-xs font-bold tracking-widest ring-1 ring-white/25">
               SUBMIT YOUR PAPERS
              </p>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight uppercase text-white">
                SUBMIT YOUR PAPERS

              </h1>
             
            </div>



            <div className="mt-8 text-center">
              <p className="text-lg sm:text-xl font-extrabold">
                2-3 July 2026
              </p>
            </div>

            {/* Address */}
            <div className="mt-2 text-center">
              <p className="text-lg sm:text-xl font-extrabold">
                India International Centre, Lodhi, New Delhi-110003
              </p>
              <div className="mx-auto mt-3 h-[3px] w-56 sm:w-80 rounded-full bg-white/55" />
            </div>

          </div>
        </section>


        <section className="py-16 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0aaff0]">
        Paper Submission Guidelines
      </h2>
      <div className="mt-3 flex justify-center">
        <span
          className="h-[3px] w-16 rounded-full"
          style={{ backgroundColor: "#11b3d4" }}
        />
      </div>
      <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
        Please read and follow the guidelines carefully before submitting your manuscript.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid gap-5 md:grid-cols-2">
      {[
        {
          title: "Submission Format",
          icon: "📄",
          desc:
            "Authors are invited to submit original, unpublished research work in the form of full papers (up to 6 pages) in DOC/PDF/LaTeX format. Extra pages may be charged as per policy.",
          accent: "border-[#11b3d4]/40",
        },
        {
          title: "Submission Portal",
          icon: "🌐",
          desc:
            "Submissions should be made through the official conference submission portal using the provided link.",
          accent: "border-[#11b3d4]/40",
        
        },
        {
          title: "Review Process",
          icon: "🔍",
          desc:
            "All submissions will undergo a rigorous peer-review process by an expert panel. Papers will be evaluated based on originality, significance, and quality.",
          accent: "border-[#11b3d4]/40",
        },
        {
          title: "Paper Presentation",
          icon: "🎤",
          desc:
            "Accepted papers must be presented at the conference by at least one of the registered authors.",
          accent: "border-[#11b3d4]/40",
        },
        {
          title: "Unpublished Article",
          icon: "🧾",
          desc:
            "Only unpublished articles will be considered valid for submission.",
          accent: "border-[#11b3d4]/40",
        },
        {
          title: "Plagiarism",
          icon: "🛡️",
          desc:
            "Plagiarism is strictly prohibited. Similarity should be below 15%. The final decision on publication is at the discretion of the editorial team.",
          accent: "border-[#11b3d4]/40",
        },
        {
          title: "Copyright Forms",
          icon: "📝",
          desc:
            "Signed copyright forms must be submitted by the authors wherever required.",
          accent: "border-[#11b3d4]/40",
        },
        {
          title: "Individual Articles",
          icon: "📌",
          desc:
            "Individual articles must not exceed the page limit as per the publisher template guidelines.",
          accent: "border-[#11b3d4]/40",
        },
        {
          title: "Quality Images",
          icon: "🖼️",
          desc:
            "Use good quality images, typed equations, editable tables, and proper citations and references in your paper.",
          accent: "border-[#11b3d4]/40",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`group relative rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden ${item.accent}`}
        >
          {/* top accent line */}
          <div
            className="absolute inset-x-0 top-0 h-[3px]"
            style={{ backgroundColor: "#11b3d4" }}
          />

          <div className="p-6">
            <div className="flex items-start gap-4">
              <div
                className="h-11 w-11 rounded-xl flex items-center justify-center text-lg shrink-0"
                style={{ backgroundColor: "rgba(9, 151, 169, 0.14)" }}
              >
                <span>{item.icon}</span>
              </div>

              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0aaff0] group-hover:text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold"
                    style={{ color: "#11b3d4" }}
                  >
                    <span className="truncate">{item.linkText}</span>
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "#11b3d4" }}
                    />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<PaperSubmitForm/>
        </>
      )
}