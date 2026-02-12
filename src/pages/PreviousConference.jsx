import React from "react";
import { CalendarDays, MapPin, ArrowRight, ExternalLink } from "lucide-react";

import { useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";


export default function PreviousConference() {

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
                           Previous Conference
                        </p>

                        <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight uppercase text-white">
                             Previous Conference
                        </h1>


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

     <PreviousConferenceCard/>

     {/* stste cards for events  */}

     <section className="bg-[#f6f8fc] py-14">
  <div className="max-w-6xl mx-auto px-4">

    {/* Section Title */}
    

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Dates Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-black/5 p-8 text-center hover:shadow-xl transition">
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-[#42a1f5] text-white shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2h-1V3m-10 0v2H6a2 2 0 00-2 2v11a2 2 0 002 2z" />
          </svg>
        </div>

        <div className="mt-5 text-xs font-bold uppercase tracking-wide text-slate-500">
          Dates
        </div>

        <div className="mt-2 text-lg font-extrabold text-slate-900">
          22 - 23 January 2026 (Hybrid Mode)
        </div>
      </div>

      {/* Venue Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-black/5 p-8 text-center hover:shadow-xl transition">
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-[#42a1f5] text-white shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        <div className="mt-5 text-xs font-bold uppercase tracking-wide text-slate-500">
          Venue
        </div>

        <div className="mt-2 text-lg font-extrabold text-slate-900 leading-relaxed">
          India International Centre, Lodhi Estate, New Delhi, India
        </div>
      </div>

      {/* Members Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-black/5 p-8 text-center hover:shadow-xl transition">
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-[#42a1f5] text-white shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M17 20h5V4H2v16h5m10 0a4 4 0 10-8 0m8 0H9" />
          </svg>
        </div>

        <div className="mt-5 text-xs font-bold uppercase tracking-wide text-slate-500">
          Members
        </div>

        <div className="mt-2 text-lg font-extrabold text-slate-900">
          150+ Members
        </div>
      </div>

    </div>

  </div>
</section>




    <GlimpsesGallery/>


        </>
    )
}




 function PreviousConferenceCard({
  imageUrl = "/ic2.jpg",
  title = "ICCICT 2026",
  description = ` We successfully organized ICCICT 2026 as a prestigious international conference, bringing together researchers, academics, and industry professionals from across the globe. The conference served as a dynamic platform for presenting cutting-edge research, fostering meaningful collaborations, and addressing contemporary challenges in computational intelligence, computing technologies, and artificial intelligence. With participation from over 150 delegates representing more than 20 countries, ICCICT 2026 delivered an intellectually enriching, globally connected, and impactful experience for all participants.`,
  locationText = "India International Centre, Lodhi Estate, New Delhi, India",
  learnMoreHref = "/previous-conference",
  visitSiteHref = "https://iccict.org/",
}) {
  return (
    <section className="bg-[#f6f8fc] py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-black/5 overflow-hidden">
          {/* Image */}
          <div className="relative">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-[230px] sm:h-[320px] object-cover"
            />

            {/* Previous badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-extrabold bg-white/90 text-[#1e4aa8] shadow-md">
                Previous
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-extrabold text-gray-900">{title}</h3>

            <p className="mt-3 text-gray-600 leading-relaxed ">
              {description}
            </p>

            {/* Meta row */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-[#42a1f5]" />
                <span className="font-semibold">22-23 January 2026</span>
              </div>

              <div className="flex items-center gap-2 sm:justify-end">
                <MapPin className="w-4 h-4 text-[#42a1f5]" />
                <span className="font-semibold">{locationText}</span>
              </div>
            </div>

            {/* Bottom actions */}
            <div className="mt-7 flex items-center justify-between gap-4">
              {/* <a
                href={learnMoreHref}
                className="inline-flex items-center gap-2 text-[#42a1f5] font-extrabold hover:underline"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </a> */}

              <a
                href={visitSiteHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#42a1f5] text-white font-extrabold shadow-md hover:bg-[#2f86d8] transition"
              >
                Visit Site <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






 function GlimpsesGallery() {
  const images = useMemo(
    () => [
      // LEFT COLUMN (stacked like screenshot)
     
      { src: "/ic2.jpg", alt: "ICCICT Glimpse 2" },
      { src: "/ic3.jpg", alt: "ICCICT Glimpse 3" },
       { src: "/ic9.jpg", alt: "ICCICT Glimpse 6" },


      // MIDDLE COLUMN tiles
      { src: "/ic4.jpg", alt: "ICCICT Glimpse 5" },
      { src: "/ic5.jpg", alt: "ICCICT Glimpse 6" },

      { src: "/ic1.jpg", alt: "ICCICT Glimpse 5" },
     

      // RIGHT COLUMN tiles
      { src: "/ic8.jpg", alt: "ICCICT Glimpse 7" },
      { src: "/ic10.jpg", alt: "ICCICT Glimpse 8" },
      { src: "/ic12.jpg", alt: "ICCICT Glimpse 9" },
    ],
    []
  );

  // layout indices (like your screenshot)
  const left = images.slice(0, 4);
  const mid = images.slice(3, 6);
  const right = images.slice(6,9);

  const flat = images; // for lightbox navigation
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const openAt = (idx) => {
    setActive(idx);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = () => setActive((p) => (p - 1 + flat.length) % flat.length);
  const next = () => setActive((p) => (p + 1) % flat.length);

  return (
    <section className="bg-[#f6f8fc] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#42a1f5]/10 text-[#1e4aa8] font-extrabold">
            <Images className="w-5 h-5 text-[#42a1f5]" />
            Glimpses Gallery
          </div>
          <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#42a1f5]">
        Glimpses of ICCICT Conference
      </h2>
      <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-[#42a1f5] to-[#00bcd4] rounded-full"></div>
    </div>
         
        </div>

        {/* Mosaic Grid */}
        {/* Mosaic Grid (3 columns, each column = 3 equal tiles, equal height/width) */}
<div className="bg-white rounded-2xl shadow-xl border border-black/5 p-4 sm:p-5">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    {/* Column 1 (3 images) */}
    <div className="grid grid-rows-3 gap-4">
      {left.slice(0, 3).map((img, i) => (
        <Tile
          key={img.alt + i}
          src={img.src}
          alt={img.alt}
          onClick={() => openAt(i)}
          heightClass="h-[220px] sm:h-[260px]"
        />
      ))}
    </div>

    {/* Column 2 (3 images) */}
    <div className="grid grid-rows-3 gap-4">
      {mid.slice(0, 3).map((img, i) => {
        const idx = 3 + i; // next 3
        return (
          <Tile
            key={img.alt + i}
            src={img.src}
            alt={img.alt}
            onClick={() => openAt(idx)}
            heightClass="h-[220px] sm:h-[260px]"
          />
        );
      })}
    </div>

    {/* Column 3 (3 images) */}
    <div className="grid grid-rows-3 gap-4">
      {right.slice(0, 3).map((img, i) => {
        const idx = 6 + i; // last 3
        return (
          <Tile
            key={img.alt + i}
            src={img.src}
            alt={img.alt}
            onClick={() => openAt(idx)}
            heightClass="h-[220px] sm:h-[260px]"
          />
        );
      })}
    </div>

  </div>
</div>

      </div>

      {/* Lightbox */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={close}
              className="absolute -top-12 right-0 text-white/90 hover:text-white"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="relative bg-black">
                <img
                  src={flat[active]?.src}
                  alt={flat[active]?.alt}
                  className="w-full max-h-[75vh] object-contain"
                />

                {/* controls */}
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 text-white rounded-full p-3"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 text-white rounded-full p-3"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="px-5 py-4 flex items-center justify-between">
                <div className="font-bold text-slate-900">
                  {flat[active]?.alt || "Gallery Image"}
                </div>
                <div className="text-sm text-slate-500 font-semibold">
                  {active + 1} / {flat.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Tile({ src, alt, onClick, heightClass }) {
  const hasSrc = Boolean(src);

  return (
    <button
      onClick={onClick}
      className={`group relative w-full ${heightClass} rounded-xl overflow-hidden border border-black/5 bg-[#eef3fb] shadow-sm hover:shadow-lg transition`}
      aria-label={alt}
      type="button"
    >
      {hasSrc ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-400 font-semibold">
          Image
        </div>
      )}

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* theme corner accent */}
      <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-[#42a1f5] opacity-90" />
    </button>
  );
}
