import React from "react";
import { MapPin, ExternalLink, BadgeCheck, User2 } from "lucide-react";

/**
 * FIXES you asked:
 * ✅ Theme visible (#42a1f5) - header, chips, borders, hover glow
 * ✅ Button always visible (card layout fixed)
 * ✅ Only 3 cards per row on desktop
 * ✅ Whole grid centered on page
 */

const CHAIRS = [
  {
    name: "Yu-Chen Hu",
    designation:
      "Distinguished Professor at Tunghai University, Taiwan | Top 2% Scientist | Journal Editors | Senior Member of IEEE",
    location: "Taichung City, Taiwan",
    image: "", // put image url
    profileUrl: "#",
    verified: true,
  },
  {
    name: "Dr. Korhan Cengiz",
    designation:
      "World Top 2% Scientist / Associate Editor, IEEE Transactions on Intelligent Transportation Systems / Associate Editor, IEEE IoT Journal",
    location: "Istanbul, Türkiye",
    image: "",
    profileUrl: "#",
    verified: true,
  },
  {
    name: "Dr. Ahmed Elngar",
    designation:
      "Associate Professor and Head of Computer Science dept at FCAI, Beni-Suef University",
    location: "Egypt",
    image: "",
    profileUrl: "#",
    verified: true,
  },
];

function ChairAvatar({ src, name }) {
  return (
    <div className="relative">
      {src ? (
        <img
          src={src}
          alt={name}
          className="h-56 w-full object-contain"
          loading="lazy"
        />
      ) : (
        <div className="h-56 w-full bg-gradient-to-br from-[#42a1f5]/20 via-white to-slate-50 flex items-center justify-center">
          <div className="h-20 w-20 rounded-2xl bg-white ring-1 ring-slate-200 flex items-center justify-center shadow-sm">
            <User2 className="h-10 w-10 text-[#42a1f5]" />
          </div>
        </div>
      )}

      {/* Blue corner accent */}
      <div className="pointer-events-none absolute inset-0 rounded-t-3xl ring-1 ring-inset ring-black/5" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#42a1f5]/10 blur-3xl opacity-70" />
    </div>
  );
}

function SessionChairCard({ chair }) {
  const designation = chair.designation || chair.headline || "";

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#42a1f5]/40">
      {/* top theme line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#42a1f5] via-[#42a1f5]/70 to-[#42a1f5]/30" />

      {/* image */}
      <ChairAvatar src={chair.image} name={chair.name} />

      {/* content */}
      <div className="p-6 flex flex-col gap-3">
        {/* name */}
        <h3 className="text-center text-xl font-extrabold text-slate-900 leading-snug group-hover:text-[#42a1f5] transition-colors">
          {chair.name}
        </h3>

        {/* designation */}
        <p className="text-center text-sm leading-relaxed text-slate-600 line-clamp-4">
          {designation}
        </p>

        {/* location */}
        {chair.location ? (
          <div className="mt-1 flex items-center justify-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-[#42a1f5] shrink-0" />
            <span className="truncate">{chair.location}</span>
          </div>
        ) : null}

        {/* CTA (gap fix: mt-2 + no extra min-height) */}
        <a
          href={chair.profileUrl || "#"}
          target={chair.profileUrl && chair.profileUrl !== "#" ? "_blank" : undefined}
          rel={chair.profileUrl && chair.profileUrl !== "#" ? "noreferrer" : undefined}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#42a1f5]/10 px-4 py-3.5 text-sm font-bold text-[#42a1f5] ring-1 ring-[#42a1f5]/25 transition-all duration-300 hover:bg-[#42a1f5] hover:text-white hover:ring-[#42a1f5]"
        >
          View Full Profile
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* hover border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition-all duration-300 group-hover:ring-[#42a1f5]/20" />
    </div>
  );
}



export default function SessionChairsSection({
  title = "Conference Chairs",
  subtitle = " Distinguished academic leaders guiding the vision, quality, and direction of the conference.",
  chairs = CHAIRS,
}) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="inline-flex items-center rounded-full bg-[#42a1f5]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#42a1f5] ring-1 ring-[#42a1f5]/20">
            CONFERENCE LEADERSHIP
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
            {title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">{subtitle}</p>
        </div>

        {/* Centered grid with max width (so it stays centered even with 3 cards) */}
        <div className="mt-10 mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {chairs.map((chair, idx) => (
              <SessionChairCard key={idx} chair={chair} />
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
