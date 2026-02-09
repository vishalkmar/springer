import React from "react";

/**
 * ICSCPSIA Showcase (3-in-1)
 * Layout order:
 * 1) About ICSCPSIA (image left + content right + small gallery + CTA)
 * 2) Agenda (left intro + right image + timeline day-wise)
 * 3) Submit Your Papers (3 feature cards + big CTA strip)
 *
 * Theme: Dark navy + white + accent #11b3d4
 * Just replace images/text/links below.
 */

export default function ConferenceDetails() {
  const accent = "#11b3d4";

  const about = {
    title: "About ICSCPSIA",
    subtitle:
      "Welcome to the International Conference on Computational Intelligence and Computing Technologies & AI (ICSCPSIA)",
    body: [
      "Set to unfold from January 22–23, 2026, ICSCPSIA offers a platform to present groundbreaking research, publish your papers, showcase your ideas through engaging poster presentations, and establish global partnerships.",
      "Our conference draws a vibrant audience, including researchers, scholars, academicians, industry professionals, exhibitors, and enthusiasts, all converging to exchange ideas and insights across the vast landscape of diverse yet interconnected fields.",
      "Under the theme \"Bridging Disciplines, Inspiring Innovation\", ICSCPSIA provides a dynamic convergence of knowledge, research, and industry expertise. Participants will have the opportunity to present groundbreaking research and publish their work in the CPS–IEEE Explore Digital Library as part of the conference proceedings.",
    ],
    primaryCta: { label: "Register Now", href: "/registration" },
    images: {
      hero:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1400&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=900&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=900&auto=format&fit=crop",
      ],
    },
  };

  const agenda = {
    heading: "Agenda",
    kicker: "ICSCPSIA: Where AI, ML, IoT & Computer Science Converge",
    intro:
      "Join us on 22–23 January 2026 at India International Centre, Lodhi Estate, New Delhi, India for a transformative conference exploring the latest advancements in AI, ML, IoT, and computer science.",
    ctas: [
      { label: "Register Now", href: "/registration", variant: "primary" },
      { label: "View Speakers", href: "/speakers", variant: "outline" },
    ],
    sideImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
    days: [
      {
        dateLabel: "January 22: A Journey into Innovation",
        items: [
          {
            title: "Keynote Session I",
            desc: "Opening insights on AI, ML, IoT, and Computer Science.",
            time: "09:30 – 10:15",
          },
          {
            title: "Keynote Session II",
            desc: "Emerging trends and future opportunities in interdisciplinary research.",
            time: "10:30 – 11:15",
          },
          {
            title: "Breakout Sessions: Diving Deep into Research",
            desc: "Paper presentations across key tracks and topic areas.",
            time: "11:30 – 13:00",
          },
          {
            title: "Networking & Collaboration",
            desc: "Connect with peers, mentors, and industry professionals.",
            time: "14:00 – 15:30",
          },
        ],
      },
      {
        dateLabel: "January 23: Industry Insights & Collaboration",
        items: [
          {
            title: "Keynote Session III",
            desc: "Insights from global experts and industry leaders.",
            time: "09:30 – 10:15",
          },
          {
            title: "Breakout Sessions: Research Presentations",
            desc: "Advanced research presentations and technical discussions.",
            time: "10:30 – 12:30",
          },
          {
            title: "Panel Discussion",
            desc: "Expert panel exploring current trends and future directions.",
            time: "13:30 – 14:30",
          },
          {
            title: "Networking & Collaborative Meetings",
            desc: "Focused collaboration with industry partners and academia.",
            time: "15:00 – 16:30",
          },
        ],
      },
    ],
  };

  const submit = {
    title: "Submit Your Papers",
    subtitle: "ICSCPSIA: Advancing Research in AI, ML, IoT, and Computer Science",
    cards: [
      {
        title: "Submit Original Research",
        desc: "Present impactful and groundbreaking work across AI, ML, IoT, and Computer Science.",
      },
      {
        title: "Global Audience",
        desc: "Engage with an international research community and build meaningful collaborations.",
      },
      {
        title: "Prestigious Publication",
        desc: "Accepted papers may be published in CPS / IEEE Xplore (as applicable).",
      },
    ],
    strip: {
      title: "Share Your Expertise at ICSCPSIA",
      desc: "Submit your research and join leading scholars and industry professionals from around the world.",
      cta: { label: "Submit Your Papers", href: "/submission" },
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    },
  };

  return (
    <div className="bg-white text-slate-900">
      {/* subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(900px 450px at 20% 15%, rgba(17,179,212,.15) 0%, rgba(255,255,255,0) 60%)," +
            "radial-gradient(900px 500px at 85% 20%, rgba(17,179,212,.1) 0%, rgba(255,255,255,0) 55%)," +
            "radial-gradient(900px 600px at 55% 90%, rgba(17,179,212,.08) 0%, rgba(255,255,255,0) 60%)",
        }}
      />

      {/* 1) ABOUT */}
      <section className="relative py-14 sm:py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11b3d4 ]">{about.title}</h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
              {about.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Image collage */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden ring-1 ring-blue-200 shadow-2xl">
                <img
                  src={about.images.hero}
                  alt="ICSCPSIA"
                  className="w-full h-[280px] sm:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {about.images.gallery.map((src, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden ring-1 ring-blue-200 bg-blue-50"
                  >
                    <img
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-28 sm:h-32 object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* floating CTA badge */}
              <a
                href={about.primaryCta.href}
                className="group absolute left-6 bottom-24 sm:bottom-28 inline-flex items-center gap-3 rounded-2xl px-5 py-4 bg-white ring-1 ring-blue-200 backdrop-blur-md shadow-xl hover:bg-blue-50 transition"
              >
                <span
                  className="h-10 w-10 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: accent }}
                >
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 5l7 7-7 7" />
                    <path d="M3 12h18" />
                  </svg>
                </span>
                <div className="leading-tight">
                  <div className="text-xs font-semibold text-slate-600">Quick Action</div>
                  <div className="font-extrabold text-slate-900">{about.primaryCta.label}</div>
                </div>
              </a>
            </div>

            {/* Right: content */}
            <div className="rounded-3xl bg-blue-50 ring-1 ring-blue-200 p-7 sm:p-8">
              <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-slate-700">
                {about.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={about.primaryCta.href}
                  className="inline-flex justify-center items-center rounded-2xl px-6 py-4 font-extrabold shadow-lg transition text-white"
                  style={{ backgroundColor: accent }}
                >
                  {about.primaryCta.label}
                </a>
                <a
                  href="/about"
                  className="inline-flex justify-center items-center rounded-2xl px-6 py-4 font-bold bg-white ring-1 ring-blue-300 text-slate-900 hover:bg-blue-50 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) AGENDA */}
      <section className="relative py-14 sm:py-16 border-t border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: accent }}>{agenda.heading}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left intro */}
            <div className="rounded-3xl bg-blue-50 ring-1 ring-blue-200 p-7 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
                <span style={{ color: accent }}>{agenda.kicker.split(":")[0]}:</span>{" "}
                {agenda.kicker.split(":").slice(1).join(":").trim()}
              </h3>
              <p className="mt-3 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                {agenda.intro}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {agenda.ctas.map((c, i) =>
                  c.variant === "primary" ? (
                    <a
                      key={i}
                      href={c.href}
                      className="inline-flex items-center justify-center rounded-2xl px-6 py-4 font-extrabold shadow-lg transition text-white"
                      style={{ backgroundColor: accent }}
                    >
                      {c.label}
                    </a>
                  ) : (
                    <a
                      key={i}
                      href={c.href}
                      className="inline-flex items-center justify-center rounded-2xl px-6 py-4 font-bold bg-white ring-1 ring-blue-300 text-slate-900 hover:bg-blue-50 transition"
                    >
                      {c.label}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Right image */}
            <div className="rounded-3xl overflow-hidden ring-1 ring-blue-200 shadow-2xl">
              <img
                src={agenda.sideImage}
                alt="Agenda"
                className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-12 space-y-10">
            {agenda.days.map((day, dIdx) => (
              <div key={dIdx}>
                <h4 className="text-lg sm:text-xl font-extrabold" style={{ color: accent }}>{day.dateLabel}</h4>

                <div className="mt-6 grid lg:grid-cols-2 gap-6">
                  <div className="relative">
                    {/* vertical line */}
                    <div className="absolute left-3 top-0 bottom-0 w-px bg-blue-200" />
                    <div className="space-y-4">
                      {day.items.map((item, i) => (
                        <div key={i} className="relative pl-10">
                          {/* dot */}
                          <div
                            className="absolute left-[6px] top-5 h-3 w-3 rounded-full"
                            style={{ backgroundColor: accent }}
                          />
                          <div className="rounded-2xl bg-blue-50 ring-1 ring-blue-200 p-5 hover:bg-blue-100 transition">
                            <div className="flex items-start justify-between gap-4">
                              <h5 className="font-extrabold text-slate-900">{item.title}</h5>
                              <span className="text-xs font-bold text-slate-600 whitespace-nowrap">
                                {item.time}
                              </span>
                            </div>
                            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* right side: optional highlight card */}
                  <div className="rounded-3xl bg-blue-50 ring-1 ring-blue-200 p-6 sm:p-7">
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-600">
                      Highlights
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                      <li className="flex gap-3">
                        <span
                          className="mt-1 h-2.5 w-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: accent }}
                        />
                        Keynotes from international experts and academic leaders
                      </li>
                      <li className="flex gap-3">
                        <span
                          className="mt-1 h-2.5 w-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: accent }}
                        />
                        Paper presentations, posters, and technical discussions
                      </li>
                      <li className="flex gap-3">
                        <span
                          className="mt-1 h-2.5 w-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: accent }}
                        />
                        Networking sessions with academia and industry participants
                      </li>
                    </ul>

                    <div className="mt-6 rounded-2xl bg-white ring-1 ring-blue-300 p-5">
                      <div className="font-extrabold text-slate-900">Conference Venue</div>
                      <div className="mt-1 text-sm text-slate-700">
                        India International Centre, Lodhi Estate, New Delhi, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) SUBMIT YOUR PAPERS */}
      <section className="relative py-14 sm:py-16 border-t border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: accent }}>{submit.title}</h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">{submit.subtitle}</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {submit.cards.map((c, i) => (
              <div
                key={i}
                className="rounded-3xl bg-blue-50 ring-1 ring-blue-200 p-6 hover:bg-blue-100 transition shadow-sm"
              >
                <div
                  className="h-10 w-10 rounded-2xl flex items-center justify-center mb-4 text-white"
                  style={{ backgroundColor: accent }}
                >
                  <span className="font-extrabold">{i + 1}</span>
                </div>
                <h3 className="font-extrabold text-lg text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-10 rounded-3xl bg-blue-50 ring-1 ring-blue-200 p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-6">
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="h-16 w-16 rounded-2xl overflow-hidden ring-1 ring-blue-200 bg-blue-100">
                <img
                  src={submit.strip.avatar}
                  alt="Speaker"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-lg font-extrabold text-slate-900">{submit.strip.title}</div>
                <div className="text-sm text-slate-700 mt-1">{submit.strip.desc}</div>
              </div>
            </div>

            <div className="w-full lg:w-auto lg:ml-auto">
              <a
                href={submit.strip.cta.href}
                className="inline-flex w-full lg:w-auto justify-center items-center rounded-2xl px-7 py-4 font-extrabold shadow-lg transition text-white"
                style={{ backgroundColor: accent }}
              >
                {submit.strip.cta.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
