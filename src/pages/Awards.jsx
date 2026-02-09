import AwardCategoriesAccordion from "../components/AwardCatagory";
import AwardNominationForm from "../components/AwardForm";


export default function Awards() {

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
        ANNOUNCING ICSCPSIA 2026
      </p>



      <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight uppercase text-white">
      
International Research Innovation
        <br className="hidden sm:block" />
       & Excellence Awards 2026
      </h1>

      
    </div>

    {/* Date Card (single card as requested) */}
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-3xl rounded-2xl bg-white/12 ring-1 ring-white/25 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur">
        <div className="px-6 py-6 sm:px-10 sm:py-8 text-center">
          
          <p className="mt-2 text-2xl sm:text-3xl font-extrabold">
            2–3 July 2026
          </p>
        </div>
      </div>
    </div>

    {/* Address */}
    <div className="mt-8 text-center">
      <p className="text-lg sm:text-xl font-extrabold">
        India International Centre, Lodhi, New Delhi-110003
      </p>
      <div className="mx-auto mt-3 h-[3px] w-56 sm:w-80 rounded-full bg-white/55" />
    </div>

    {/* CTA */}
    <div className="mt-10 flex justify-center">
      {/* Option A: White BG + Theme Text (recommended) */}
      {/* <a
        href="#"
        className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-extrabold tracking-wide text-[#0c8aa3] shadow-lg shadow-black/15 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
      >
        Nominate Now
      </a> */}

      {/* Option B: Theme BG + White Text (use this instead if you want solid theme button)
      <a
        href="#"
        className="inline-flex items-center justify-center rounded-2xl bg-[#0fa6c4] px-8 py-4 text-sm font-extrabold tracking-wide text-white ring-1 ring-white/25 shadow-lg shadow-black/15 hover:bg-[#0e9ab6] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
      >
        Nominate Now
      </a>
      */}
    </div>
  </div>
</section>



{/* awards catagory section  */}

<section className="py-16 sm:py-20 bg-slate-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
        Why Participate
      </h2>
      <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
        ICSCPSIA 2026 offers a global platform for excellence, collaboration, and impactful academic engagement.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      
      {/* Card 1 */}
      <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#11b3d4]/40">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#11b3d4]/10">
          <svg className="h-6 w-6 text-[#11b3d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 15l-3.5 2 1-4-3-3.5 4-.5L12 5l1.5 4 4 .5-3 3.5 1 4L12 15z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-3">
          Research Excellence Awards
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Recognizing outstanding research contributions, high-impact publications,
          and innovation across scientific and academic disciplines.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#11b3d4]/40">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#11b3d4]/10">
          <svg className="h-6 w-6 text-[#11b3d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-3">
          Global Research Platform
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Providing researchers with an international platform to present,
          publish, and showcase cutting-edge research and innovations.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#11b3d4]/40">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#11b3d4]/10">
          <svg className="h-6 w-6 text-[#11b3d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-3">
          Academic & Research Networking
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Facilitating meaningful interactions with researchers,
          academicians, and industry experts from across the globe.
        </p>
      </div>

    </div>
  </div>
</section>


{/* about awards sectin is here  */}

<section className="py-16 sm:py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11b3d4]">
        About the Conference
      </h2>
      <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-4xl mx-auto">
        Announcing ICSCPSIA 2026 | International Conference on Smart Cyber-Physical Systems and Intelligent Analytics
      </p>
    </div>

    {/* Top Grid: Left content + Right image */}
    {/* <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      
      <div className="space-y-5">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8">
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            We are pleased to announce the International Conference on Smart Cyber-Physical Systems and Intelligent
            Analytics (ICSCPSIA 2026), an international platform bringing together researchers, academicians, and
            industry practitioners to explore advances in cyber-physical systems, intelligent analytics, AI, and
            data-driven system design.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#11b3d4]/10 px-4 py-2 text-xs sm:text-sm font-bold text-[#11b3d4] ring-1 ring-[#11b3d4]/20">
            Tentative Dates: 2–3 July 2026
          </div>

          <p className="mt-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            ICSCPSIA 2026 will focus on the integration of computation, communication, sensing, control, and analytics,
            highlighting how machine learning and artificial intelligence are enabling next-generation smart and
            autonomous systems.
          </p>
        </div>
      </div>

      
      <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600"
            alt="Conference highlight"
            className="h-64 sm:h-80 lg:h-[340px] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0" />
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-sm text-slate-600">
            A global forum for interdisciplinary collaboration in smart cyber-physical systems and intelligent analytics.
          </p>
        </div>
      </div>
    </div> */}


    {/* Bottom Cards */}
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {/* Who Can Apply */}
      <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8">
        <h3 className="text-lg font-extrabold text-[#11b3d4] mb-4">
          Who Can Apply?
        </h3>

        <ul className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#11b3d4] shrink-0" />
            Researchers, academicians, and scientists with significant contributions to research and innovation
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#11b3d4] shrink-0" />
            Faculty members and educators demonstrating excellence in teaching, mentoring, and academic leadership
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#11b3d4] shrink-0" />
            Research scholars (PhD / Postdoctoral / Early Career) with impactful publications or innovations
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#11b3d4] shrink-0" />
            Institutions, research groups, and centers contributing to knowledge advancement and societal impact
          </li>
        </ul>
      </div>

      {/* Key Highlights */}
      <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8">
        <h3 className="text-lg font-extrabold text-[#11b3d4] mb-4">
          Key Highlights
        </h3>

        <ul className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#11b3d4] shrink-0" />
            A prestigious international platform to recognize excellence in research and academia
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#11b3d4] shrink-0" />
            Recognition by a distinguished panel of academic and research experts
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#11b3d4] shrink-0" />
            Opportunities for global academic networking and collaboration
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#11b3d4] shrink-0" />
            International visibility, citation recognition, and professional acknowledgment
          </li>
        </ul>
      </div>
    </div>

  </div>
</section>


{/* award nominatin form  */}

<AwardNominationForm/>

<AwardCategoriesAccordion/>
     
     </>)
}