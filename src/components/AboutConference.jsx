import React from "react";

export default function AboutConferenceSection() {
  const dates = [
    { label: "Submit Your Papers", value: "October 15, 2025" },
    // { label: "Last Date of Paper Submission", value: "December 25, 2025" },
    // { label: "Notification of Acceptance", value: "January 05, 2026" },
    // { label: "Last Date for Camera Ready", value: "January 10, 2026" },
    // { label: "Last Date of Registration", value: "January 10, 2026" },
    // { label: "Conference Dates", value: "January 22-23, 2026" },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#42a1f5] sm:text-3xl">
            About the Conference
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
            Discover the vision, purpose, and key milestones of  ICSCPSIA 2026.
          </p>
        </div>

        {/* Top: Image left, Info right */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Image */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="aspect-[16/10] w-full sm:aspect-[16/9]">
                <img
                  src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80"
                  alt="Conference"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-7">
              <p className="inline-flex rounded-full bg-[#42a1f5]/10 px-3 py-1 text-xs font-semibold text-[#42a1f5]">
              ICSCPSIA 2026
              </p>

              <h3 className="mt-4 text-lg font-semibold text-slate-900 sm:text-xl">
               International Conference on Smart Cyber-Physical Systems and Intelligent Analytics
              </h3>

              <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
                <p>
                  The conference aims to promote interdisciplinary collaboration by connecting theoretical research with real-world applications across domains such as smart grids, robotics, aerospace, healthcare, manufacturing, and intelligent infrastructure.
                </p>
                <p>
                  It brings together the global research community to share innovations, foster collaboration, and shape the future of intelligent and resilient cyber-physical systems.
                </p>
                
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#42a1f5] ring-1 ring-slate-200">
                    {/* info icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 16v-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 8h.01"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Theme Focus</p>
                    <p className="text-sm text-slate-600">
                      Computational Intelligence • AI • ML • Data Science • Emerging Computing
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#register"
                  className="inline-flex items-center justify-center rounded-xl bg-[#42a1f5] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#42a1f5] focus:ring-offset-2"
                >
                  Register Now
                </a>
                <a
                  href="#call-for-papers"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#42a1f5] focus:ring-offset-2"
                >
                  Call for Papers
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Two half width horizontal cards */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Important Dates */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#42a1f5]/10 text-[#42a1f5] ring-1 ring-[#42a1f5]/20">
                {/* calendar icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3v3M16 3v3M4.5 9.5h15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 6h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#42a1f5]">
                  IMPORTANT DATES
                </p>
                <p className="text-sm text-slate-600">Keep track of key submission milestones</p>
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              {dates.map((d, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#42a1f5]" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{d.label}</p>
                    <p className="text-sm text-slate-600">{d.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Venue */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#42a1f5]/10 text-[#42a1f5] ring-1 ring-[#42a1f5]/20">
                {/* pin icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#42a1f5]">VENUE</p>
                <p className="text-sm text-slate-600">Conference location details</p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">
                India International Centre
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Lodhi Estate, New Delhi, India
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-xs font-semibold text-slate-500">Dates</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">22-23 Jan, 2026</p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-xs font-semibold text-slate-500">Timings</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=India%20International%20Centre%20Lodhi%20Estate%20New%20Delhi"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#42a1f5] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#42a1f5] focus:ring-offset-2"
            >
              {/* map icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18 3 20V6l6-2 6 2 6-2v14l-6 2-6-2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 4v14M15 6v14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
