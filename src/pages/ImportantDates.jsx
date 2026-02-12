
import React from "react";
import { CalendarDays, ArrowRight, Info } from "lucide-react";


export default function ImportantDate(){
   
      return(<>
      
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
                   Dates 
              </p>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight uppercase text-white">
               Important Dates
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

        <ImportantDatesSection/> 

      </>)
}




/**
 * IMPORTANT DATES section (matches your blue/teal theme)
 * - Responsive table (scroll on small screens)
 * - Highlight rows like your reference
 * - CTA button "Registration Link"
 * - Small note "(No Further Extension)"
 */

 function ImportantDatesSection() {
  const dates = [
    { event: "Paper Submission Deadline", date: "15 March 2026" },
    { event: "Notification of Acceptance",  date: "15 April 2026" },
    { event: "Camera Ready Submission", date: "15 May 2026" },
    { event: "Early Registration Deadline",  date: "25 May 2026" },
    { event: "Conference Date",  date: "2-3 July 2026" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f6f8fc]">
      {/* soft background */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#42a1f5]/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#00bcd4]/15 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12 sm:py-16">
        {/* Header badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#42a1f5] text-white px-6 py-2 rounded-md shadow-lg">
            <CalendarDays className="w-5 h-5" />
            <span className="font-extrabold tracking-wide uppercase">
              Important Dates
            </span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-black/5 overflow-hidden">
          {/* top note line */}
          <div className="px-6 pt-5 pb-3 flex items-start justify-between gap-4">
            

            {/* optional small theme strip */}
            
          </div>

          {/* Table wrapper for mobile */}
          <div className="overflow-x-auto">
            <table className="min-w-[720px] w-full">
              <thead>
                <tr className="bg-[#42a1f5] text-white">
                  <th className="text-left px-6 py-4 font-extrabold tracking-wide">
                    Events
                  </th>
                  <th className="text-left px-6 py-4 font-extrabold tracking-wide">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {dates.map((row, idx) => {
                  const isHighlighted = idx % 2 === 1; // like your reference
                  return (
                    <tr
                      key={row.event}
                      className={`border-t border-black/5 ${
                        isHighlighted ? "bg-[#d7f1f6]" : "bg-white"
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {row.event}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-800">
                        {row.date}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="px-6 py-8 flex justify-center">
            <a
              href="/registration"
              className="inline-flex items-center gap-2 bg-[#42a1f5] hover:bg-[#2f86d8] text-white font-extrabold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Registration Link
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* bottom subtle bar like your theme */}
        <div className="mt-8 h-2 rounded-full bg-gradient-to-r from-[#42a1f5] via-[#1bb4d6] to-[#42a1f5] shadow-sm" />
      </div>
    </section>
  );
}
