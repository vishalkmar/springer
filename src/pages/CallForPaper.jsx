



import React from "react";
import { FileText, CheckCircle2 } from "lucide-react";
export default function CallForPaper(){
   
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
                Call for Paper
              </p>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight uppercase text-white">
                Call for Paper
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

        <CallForPapersSection/>

      </>)
}


 function CallForPapersSection() {
  const themes = [
    {
      id: 1,
      title: "Cyber-Physical & Smart Systems",
      items: [
        "Cyber-Physical Systems (CPS): architectures, modeling, and co-design",
        "Smart and autonomous cyber-physical systems",
        "Embedded and real-time systems",
        "Sensor and actuator systems for CPS",
        "Digital twins for cyber-physical systems",
        "Networked and distributed cyber-physical systems",
      ],
    },
    {
          id: 2,
      title: "Machine Learning & Artificial Intelligence for Systems",
      items: [
        "ML methods for cyber-physical and networked systems",
        "AI for system monitoring, control, and optimization",
        "Deep learning for perception, sensing, and system intelligence",
        "Reinforcement learning for adaptive and autonomous control",
        "Multi-agent learning for distributed and cooperative systems",
        "Explainable and trustworthy AI for safety-critical systems",
      ],
    },
    {
          id: 3,
      title: "Intelligent Analytics & Data-Driven Systems",
      items: [
        "Intelligent data analytics for CPS and networked systems",
        "Data-driven modeling and system identification",
        "Predictive analytics for fault detection and maintenance",
        "Real-time, streaming, and edge analytics for systems",
        "Sensor data fusion and multimodal analytics",
      ],
    },
    {
          id: 4,
      title: "Control, Automation, and Robotics",
      items: [
        "Intelligent control systems and AI-based controllers",
        "Robotics and autonomous cyber-physical systems",
        "Automation and smart manufacturing systems",
        "Industrial cyber-physical systems",
      ],
    },
    {
          id: 5,
      title: "Energy, Transportation, and Infrastructure Systems",
      items: [
        "Smart grids and intelligent energy systems",
        "Power systems analytics and control",
        "Vehicular networking and connected transportation systems",
        "Aerospace and safety-critical cyber-physical systems",
      ],
    },
    {
          id: 6,
      title: "Interdisciplinary and Emerging System Applications",
      items: [
        "Healthcare and biological cyber-physical systems",
        "Social and economic systems modeling",
        "Smart cities and urban infrastructure systems",
        "Security, resilience, and reliability of AI-enabled systems",
      ],
    },
  ];

  return (
    <section className="relative bg-[#f6f8fc] py-12 sm:py-16">
      {/* soft background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#42a1f5]/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#00bcd4]/15 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Title ribbon (like reference image) */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="hidden sm:block h-[3px] flex-1 bg-[#11b3d4] rounded-full opacity-70" />
          <div className="bg-[#11b3d4] text-white px-6 py-2 rounded-md shadow-lg font-extrabold tracking-wide uppercase flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Call of Papers
          </div>
          <div className="hidden sm:block h-[3px] flex-1 bg-[#11b3d4] rounded-full opacity-70" />
        </div>

        {/* Paper-style card */}
        <div className="bg-white rounded-xl shadow-xl border border-black/5 overflow-hidden">
          {/* top thin border like paper */}
          <div className="h-1 bg-[#11b3d4]" />

          <div className="p-6 sm:p-10">
            {/* Intro content */}
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
              Call for Papers (CFP) – ICSCPSIA 2026
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              The International Conference on Smart Cyber-Physical Systems and
              Intelligent Analytics (ICSCPSIA 2026) invites original,
              unpublished research papers from academicians, researchers,
              industry professionals, and practitioners working in the domains
              of cyber-physical systems, networked systems, intelligent
              analytics, and AI/ML-enabled smart infrastructures.
            </p>

            <div className="mt-4 text-gray-800 font-semibold">
              ICSCPSIA 2026
            </div>

            <p className="mt-3 text-gray-700 leading-relaxed">
              ICSCPSIA 2026 provides an international forum to present and
              discuss recent advances in system architectures, modeling and
              simulation, sensing and control, optimization techniques, and
              real-world deployments. The conference emphasizes the integration
              of computation, communication, sensing, control, and analytics,
              with AI and machine learning as enabling technologies for
              enhancing system adaptability, reliability, safety, and autonomy.
            </p>

            <div className="mt-4 text-gray-800 font-semibold">
              ICSCPSIA 2026
            </div>

            {/* Themes heading */}
            <h3 className="mt-8 text-lg sm:text-xl font-extrabold text-gray-900">
              Conference Tracks
            </h3>

            {/* Themes blocks (like tracks) */}
            <div className="mt-5 space-y-7">
              {themes.map((t) => (
                <div key={t.title}>
                  <div className=" font-extrabold uppercase tracking-wide text-sm sm:text-base">
                    {`TRACK ${t.id} :  ${t.title}`}
                  </div>

                  <ul className="mt-3 space-y-2">
                    {t.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#2f6fce] mt-[2px] shrink-0" />
                        <span className="leading-relaxed">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* bottom thin border */}
          <div className="h-1 bg-[#11b3d4]" />
        </div>
      </div>
    </section>
  );
}


