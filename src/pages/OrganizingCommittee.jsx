import React from "react";


  const COL_1 = [
  "Dr. Piyush Bhardwaj, EGS Group, India",
  "Mr. Abhineet Gupta, Traveon Ventures, Delhi, India",
  "Mr. Ajit Waghe, Traveon Ventures, Mumbai, India", 
  "Dr. Neha Singh, MAIT, Delhi, India",
];

const COL_2 = [
  "Mr. Dinesh Bhardwaj, BPIT, Delhi",
  "Ms. Sakshi Garg, EGS Group, India",
  "Mr. Himanshu Vashist, Traveon Ventures, India",
  "Mr. Deepanshu Vashist, Traveon Ventures, India",
];


function ListCard({ items }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-black/5 p-4 sm:p-5">
      <ul className="divide-y divide-slate-100">
        {items.map((t, i) => (
          <li key={i} className="py-3 flex gap-3">
            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0699cf] " />
            <p className="text-[13.5px] sm:text-sm leading-relaxed text-slate-700">
              {t}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OrganizingCommittee() {
  return (
    <section className="w-full">
      {/* HEADER (your 2nd image vibe) */}
      <div className="relative overflow-hidden py-16 sm:py-20 bg-[#11b3d4] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/5 to-black/15" />
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/12 blur-3xl" />
          <div className="absolute -bottom-28 right-[-120px] h-[520px] w-[520px] rounded-full bg-black/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-[11px] sm:text-xs font-bold tracking-widest ring-1 ring-white/25">
              Organizing Committee
            </p>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight uppercase text-white">
              Organizing Committee 
            </h1>

            <div className="mt-8">
              <p className="text-lg sm:text-xl font-extrabold">2-3 July 2026</p>
              <p className="mt-2 text-lg sm:text-xl font-extrabold">
                India International Centre, Lodhi, New Delhi-110003
              </p>
              <div className="mx-auto mt-3 h-[3px] w-56 sm:w-80 rounded-full bg-white/55" />
            </div>
          </div>
        </div>
      </div>


      <div className="bg-slate-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#0699cf] tracking-wide">
        Organizing Committee Members
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[#0699cf]" />
    </div>

    {/* Existing Box */}
    <div className="rounded-3xl border border-teal-200/60 bg-white shadow-[0_10px_30px_rgba(2,132,199,0.15)] p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ListCard items={COL_1} />
        <ListCard items={COL_2} />
        {/* <ListCard items={COL_3} /> */}
      </div>
    </div>

  </div>
</div>
    </section>
  );
}
