import React from "react";
import { GraduationCap, Building2 } from "lucide-react";

/**
 * Keynote Speakers Section (Theme: #11b3d4)
 * ✅ Add speakers by pushing object in SPEAKERS array
 * ✅ Responsive: stacked on mobile, clean rows on desktop
 * ✅ Professional UI like your screenshot
 */

const THEME = "#11b3d4";

const SPEAKERS = [
  {
    name: "Professor Meena Jha",
    title: "Head of the Technology and Pedagogy",
    university: "Central Queensland University",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600",
    desc:
      "Professor Meena Jha is a highly respected academic leader and researcher in Artificial Intelligence, AI-enabled education, and responsible AI. She holds BE and ME degrees in Computer Science and a PhD from UNSW Australia, and currently serves as Head of the Technology and Pedagogy at Central Queensland University. She has published extensively, led major research projects, supervised scholars, and contributed to international collaborations across AI, smart cities, healthcare, and education.",
  },
  {
    name: "Dr. Neyra Radwan",
    title: "Associate Professor",
    university: "Liva University, UAE",
    image:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=600",
    desc:
      "Dr. Neyra Radwan is an Associate Professor with over 20 years of experience in teaching, training, research, and community service. She has held leadership roles in QA and accreditation, contributed to curriculum development, and supervised academic programs. Her work focuses on quality assurance, student development, and impactful academic practices across institutions.",
  },
  {
    name: "Dr. Anirban Chakraborti",
    title: "Distinguished Researcher",
    university: "Jawaharlal Nehru University, New Delhi, India",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
    desc:
      "Dr. Anirban Chakraborti is a distinguished physicist and interdisciplinary researcher specializing in complex systems, econophysics, and computational finance. He has held academic and research positions internationally, contributed to high-impact collaborations, and published widely. His work bridges theory and real-world applications with measurable scientific influence.",
  },
  {
    name: "Mr. Sanjay Chopra",
    title: "Global CTO",
    university: "AI & Automation Platforms | HCL Software",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600",
    desc:
      "Hands-on Enterprise Architect and CTO with expertise in large-scale digital transformation and strategy. Experienced across multi-hybrid cloud, DevOps, and AI/ML ecosystems. Known for building scalable platforms, driving adoption, and delivering outcome-focused engineering for global enterprises.",
  },
  {
    name: "Dr. Deepali Virmani",
    title: "Associate Professor",
    university: "SGT University, India",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600",
    desc:
      "Dr. Deepali Virmani is a distinguished academic leader with extensive experience in Computer Science and Innovation. She has published widely, contributed to international journals and conferences, and actively supports research-driven initiatives. Her work spans AI, cybersecurity, and responsible computing, with strong academic leadership and mentoring.",
  },
  {
    name: "Dr. Shakya",
    title: "Professor",
    university: "Tribhuvan University, Nepal",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=600",
    desc:
      "Dr. Shakya holds a Ph.D. in Computer Engineering and has served in senior leadership roles across academia. His expertise includes AI, IoT, cybersecurity, and smart systems. He has contributed to research policy, academic governance, and international collaborations, supporting innovation and future-ready education.",
  },
];

function SpeakerRow({ s }) {
  return (
    <div
      className="rounded-2xl border bg-white shadow-sm overflow-hidden"
      style={{ borderColor: `${THEME}40` }}
    >
      <div className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-slate-50">
              <img
                src={s.image}
                alt={s.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                  {s.name}
                </h3>

                <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 text-sm">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-bold"
                    style={{ background: `${THEME}10`, color: THEME }}
                  >
                    <GraduationCap className="h-4 w-4" />
                    {s.title}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-slate-50 text-slate-700 ring-1 ring-slate-200 font-semibold">
                    <Building2 className="h-4 w-4" style={{ color: THEME }} />
                    {s.university}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-slate-600">
              {s.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KeynoteSpeakersSection({
  title = "Keynote Speakers",
  subtitle = "Distinguished academic and industry leaders supporting the conference.",
  speakers = SPEAKERS,
}) {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: THEME }}>
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* List */}
        <div className="space-y-5">
          {speakers.map((s, i) => (
            <SpeakerRow key={i} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
