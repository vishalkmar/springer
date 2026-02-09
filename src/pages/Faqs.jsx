export default function Faqs() {
  const faqs = [
    {
      q: "When and where will ICSCPSIA 2026 be held?",
      a: "ICSCPSIA 2026 will be held on 2–3 July 2026 at India International Centre, New Delhi, India.",
    },
    {
      q: "Who is organizing the conference?",
      a: "The conference is hosted and organized by Traveon Ventures LLP.",
    },
    {
      q: "Who can attend the conference?",
      a: "ICSCPSIA 2026 is open to researchers, academicians, scholars, students, industry professionals, practitioners, and innovators working in cyber-physical systems, intelligent analytics, AI, and related areas.",
    },
    {
      q: "How can I register for the conference?",
      a: "Registration will be available through the official conference website. Detailed registration categories and fees will be announced shortly.",
    },
    {
      q: "How do I submit an abstract or full paper?",
      a: "Authors can submit abstracts and full papers via the online submission system, following the guidelines and templates provided in the Call for Papers section.",
    },
    {
      q: "What topics will be covered at the conference?",
      a: "The conference covers topics including smart cyber-physical systems, intelligent analytics, AI, machine learning, data-driven modeling, control systems, robotics, smart infrastructure, and emerging interdisciplinary applications.",
    },
    {
      q: "Will there be opportunities to present my research?",
      a: "Yes. Accepted papers may be presented through oral presentations, poster sessions, and technical sessions.",
    },
    {
      q: "Can I attend without submitting a paper?",
      a: "Yes. Participants may attend as delegates or listeners without submitting a paper, subject to registration.",
    },
    {
      q: "Is there a conference registration fee?",
      a: "Yes. Registration fees will vary by category (author, student, delegate, etc.) and will be published on the conference website.",
    },
    {
      q: "Will there be networking opportunities?",
      a: "Yes. The conference will include networking sessions, panel discussions, and interactive forums to encourage collaboration and academic exchange.",
    },
    {
      q: "Are travel or accommodation options available?",
      a: "Information regarding recommended hotels and travel assistance will be shared closer to the conference dates.",
    },
    {
      q: "Can I become a sponsor or exhibitor?",
      a: "Yes. Institutions and organizations may participate as sponsors or exhibitors. Details will be available in the Sponsorship section.",
    },
    {
      q: "Will participants receive certificates?",
      a: "Yes. Certificates of participation and presentation will be provided to registered attendees and authors.",
    },
    {
      q: "How can I contact the organizing committee?",
      a: "You can contact the organizing committee through the official email and contact details listed on the conference website.",
    },
  ];

  const leftFaqs = faqs.slice(0, 7);
  const rightFaqs = faqs.slice(7);

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
              FAQs
            </p>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight uppercase text-white">
              Frequently Asked Questions
            </h1>
          </div>

          {/* Address */}
          <div className="mt-8 text-center">
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
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Quick answers to common questions about the conference.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT COLUMN */}
            <div className="space-y-4">
              {leftFaqs.map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4">
                    <span className="font-bold text-slate-900">{item.q}</span>

                    <span
                      className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "rgba(17,179,212,.12)",
                        color: "#11b3d4",
                      }}
                    >
                      <svg
                        className="h-5 w-5 transition-transform duration-300 group-open:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </summary>

                  <div className="px-5 pb-5 -mt-1 text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-4">
              {rightFaqs.map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4">
                    <span className="font-bold text-slate-900">{item.q}</span>

                    <span
                      className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "rgba(17,179,212,.12)",
                        color: "#11b3d4",
                      }}
                    >
                      <svg
                        className="h-5 w-5 transition-transform duration-300 group-open:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </summary>

                  <div className="px-5 pb-5 -mt-1 text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Small note */}
          <div className="mt-8 text-center text-xs text-slate-500">
            Still have a question? Contact the organizing team from the Contact page.
          </div>
        </div>
      </section>
    </>
  );
}
