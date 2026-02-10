import React from "react";

export default function PaperCTA({
  title = "Share Your Research at ICSCPSIA 2026",
  desc = "Submit your work and engage with an international community of researchers, academicians, and industry experts.",
  ctaLabel = "Submit Your Papers",
  ctaHref = "/papers",
  avatarSrc = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  accent = "#11b3d4",

  // ✅ bootstrap-like container control
  containerClassName = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
}) {
  return (
    <div className={containerClassName}>
      <div className="mt-10 rounded-3xl bg-blue-50 ring-1 ring-blue-200 p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-6">
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="h-16 w-16 rounded-2xl overflow-hidden ring-1 ring-blue-200 bg-blue-100">
            <img
              src={avatarSrc}
              alt="CTA Avatar"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <div className="text-lg font-extrabold text-slate-900">{title}</div>
            <div className="text-sm text-slate-700 mt-1">{desc}</div>
          </div>
        </div>

        <div className="w-full lg:w-auto lg:ml-auto">
          <a
            href={ctaHref}
            className="inline-flex w-full lg:w-auto justify-center items-center rounded-2xl px-7 py-4 font-extrabold shadow-lg transition text-white"
            style={{ backgroundColor: accent }}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
