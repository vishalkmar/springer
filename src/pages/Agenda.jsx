function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export default function Agenda(){


     return (<>
      
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
              Agenda
              </p>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight uppercase text-white">
               Conference Agenda

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
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Wrapper */}
    <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      {/* Header */}
      <div
        className="px-6 sm:px-10 py-10 text-center text-white"
        style={{
          background:
            "linear-gradient(180deg, rgba(17,179,212,1) 0%, rgba(15,160,195,1) 70%, rgba(15,160,195,1) 100%)",
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Agenda
        </h2>
        <p className="mt-3 text-white/90 text-sm sm:text-base">
          Day-wise schedule for conference sessions and activities.
        </p>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-10 space-y-10">
        {/* Day 1 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-widest">
              January 22, 2026
            </h3>
            <span
              className="hidden sm:inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold"
              style={{ backgroundColor: "rgba(17,179,212,.12)", color: "#0ea0c3" }}
            >
              Day 1
            </span>
          </div>

          <div
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: "rgba(17,179,212,.25)" }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-[110px_1fr] gap-4 px-5 py-3 text-xs font-extrabold uppercase tracking-widest"
              style={{ backgroundColor: "rgba(17,179,212,.10)", color: "#087e98" }}
            >
              <div>Time</div>
              <div>Activity</div>
            </div>

            {/* Rows */}
            <div className="divide-y" style={{ borderColor: "rgba(17,179,212,.18)" }}>
              {[
                ["08:00 - 09:00", "Registration & Welcome Networking"],
                ["09:00 - 09:30", "Opening Ceremony & Introduction"],
                ["09:30 - 10:30", "Keynote Session I"],
                ["10:30 - 10:45", "Morning Refreshment Break"],
                ["10:45 - 13:00", "Breakout Sessions - All Tracks Presentation"],
                ["13:00 - 14:00", "Networking Lunch"],
                ["14:00 - 14:30", "Keynote Session II: Future Opportunities and Challenges"],
                ["14:30 - 16:30", "Breakout Sessions - Track Presentations (Continued)"],
                ["16:30 - 16:45", "Afternoon Refreshment Break"],
                ["16:45 - 17:25", "Panel Discussion, Questions & Answers"],
                ["17:30 - 18:00", "Networking"],
                ["End of Day 1", "Networking & Informal Meetups"],
              ].map(([time, title], i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-3 sm:gap-4 px-5 py-4 hover:bg-slate-50 transition-colors"
                >
                  <div
                    className="text-xs sm:text-sm font-extrabold"
                    style={{ color: "#0ea0c3" }}
                  >
                    {time}
                  </div>
                  <div className="text-sm sm:text-[15px] text-slate-800 leading-relaxed">
                    {title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Day 2 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-widest">
              January 23, 2026
            </h3>
            <span
              className="hidden sm:inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold"
              style={{ backgroundColor: "rgba(17,179,212,.12)", color: "#0ea0c3" }}
            >
              Day 2
            </span>
          </div>

          <div
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: "rgba(17,179,212,.25)" }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-[110px_1fr] gap-4 px-5 py-3 text-xs font-extrabold uppercase tracking-widest"
              style={{ backgroundColor: "rgba(17,179,212,.10)", color: "#087e98" }}
            >
              <div>Time</div>
              <div>Activity</div>
            </div>

            {/* Rows */}
            <div className="divide-y" style={{ borderColor: "rgba(17,179,212,.18)" }}>
              {[
                ["09:00 - 10:00", "Keynote Session III - Insights from Global Experts"],
                ["10:00 - 10:15", "Refreshment Break - Networking & Exhibitor Showcase"],
                ["10:15 - 13:00", "Breakout Session III - Research Paper Presentations"],
                ["13:00 - 14:00", "Lunch Break - Enjoy a Variety of Local and International Cuisine"],
                ["14:00 - 16:30", "Breakout Session IV - Research Paper Presentations"],
                ["16:30 - 17:00", "Refreshment Break - Engage with Peers and Exhibitors"],
                ["17:00 - 17:30", "Networking & Collaborative Meeting"],
                ["17:30 - 18:00", "Award Ceremony & Certificates Distribution"],
                ["End of Day 2", ""],
              ].map(([time, title], i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-3 sm:gap-4 px-5 py-4 hover:bg-slate-50 transition-colors"
                >
                  <div
                    className="text-xs sm:text-sm font-extrabold"
                    style={{ color: "#0ea0c3" }}
                  >
                    {time}
                  </div>
                  <div className="text-sm sm:text-[15px] text-slate-800 leading-relaxed">
                    {title || <span className="text-slate-500">—</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-start gap-3">
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(17,179,212,.12)", color: "#0ea0c3" }}
            >
              <InfoIcon />
            </div>
            <div className="text-sm text-slate-700">
              <p className="font-extrabold text-slate-900">Note</p>
              <p className="mt-1 text-slate-600">
                Schedule is subject to minor adjustments based on session flow and speaker availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    );
  }