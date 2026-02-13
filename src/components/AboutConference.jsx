import React from "react";

export default function AboutConferenceSection() {
  const dates = [
    { event: "Paper Submission Deadline", date: "15 March 2026" },
    { event: "Notification of Acceptance",  date: "15 April 2026" },
    { event: "Camera Ready Submission", date: "15 May 2026" },
    { event: "Early Registration Deadline",  date: "25 May 2026" },
    { event: "Conference Date",  date: "2-3 July 2026" },
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
            Discover the vision, purpose, and key milestones of ICSCPSIA.
          </p>
        </div>

        {/* TOP: Left Image + Right Text (equal width & height) */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* LEFT: Only Image */}
          <div className="h-full">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <img
                src="/session chairs/aboutconference.jpg"
                alt="Conference"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Only Text + Button */}
          <div className="h-full">
            <div className="h-full min-h-[420px] rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-7 flex flex-col">
              <span className="inline-flex w-fit rounded-full bg-[#42a1f5]/10 px-3 py-1 text-xs font-semibold text-[#42a1f5]">
                ICSCPSIA
              </span>

              <h3 className="mt-4 text-lg font-semibold text-slate-900 sm:text-xl">
                Be Part of a Leading Global Research Forum in 2026
              </h3>

              <div className="mt-3 space-y-4 text-sm leading-relaxed text-slate-600">
                <p>
                  The International Conference on Smart Cyber-Physical Systems and
                  Intelligent Analytics (ICSCPSIA 2026) is a premier international
                  forum bringing together researchers, academicians, and industry
                  experts working at the intersection of intelligent systems,
                  analytics, and cyber-physical integration.
                </p>

                <p>
                  The conference provides a high-quality platform for presenting
                  innovative research, exchanging advanced ideas, and building
                  collaborations that address complex challenges in next-generation
                  smart and autonomous systems.
                </p>

                <p>
                  With strong international participation anticipated, ICSCPSIA 2026
                  promises an intellectually stimulating and globally connected
                  academic experience.
                </p>
              </div>

              {/* keep button at bottom */}
              <div className="mt-auto pt-6">
                <a
                  href="/registration"
                  className="inline-flex items-center justify-center rounded-xl bg-[#42a1f5] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#42a1f5] focus:ring-offset-2"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* THEME FOCUS: Horizontal CTA strip below both cards */}
        <div className="mt-6">
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#42a1f5] ring-1 ring-slate-200">
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
                  <p className="mt-0.5 text-sm text-slate-600">
                    Smart Cyber-Physical Systems • Intelligent Analytics • Artificial
                    Intelligence • Machine Learning • Data-Driven System Design
                  </p>
                </div>
              </div>

              {/* optional CTA style chip (looks like CTA) */}
              <a
                href="/papers"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-100 transition"
              >
                Explore Call for Papers
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Dates + Venue */}
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
                <p className="text-sm text-slate-600">
                  Keep track of key submission milestones
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-3">
  {dates.map((d, idx) => (
    <li key={idx} className="grid grid-cols-[220px_1fr] gap-4 items-start">
      
      {/* Event Name */}
      <div className="flex items-start gap-3">
        <span className="mt-1.5 h-2 w-2 rounded-full bg-[#42a1f5]" />
        <span className="text-sm font-medium text-slate-900">
          {d.event}
        </span>
      </div>

      {/* Date */}
      <div className="text-sm text-slate-600">
        {d.date}
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
                <p className="text-xs font-semibold tracking-wide text-[#42a1f5]">
                  VENUE
                </p>
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
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  2–3 July 2026
                </p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-xs font-semibold text-slate-500">Timings</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  9:00 AM - 5:00 PM
                </p>
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
