import { motion } from "framer-motion";
import { Calendar, MapPin, FileText, Users, Award, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import VenueCard from "./Venue";
import AboutConferenceSection from "../components/AboutConference";
import Contact from "./Contact";
import SessionChairsSection from "../components/SessionChairsCards";

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash image: Modern city power grid / technology */}
          <img
            src="https://www.uscybersecurity.net/wp-content/uploads/2018/06/Conference-pic.jpg"
            alt="Power Lines Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#42a1f5]/90 to-[#42a1f5]/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="uppercase tracking-widest text-sm font-semibold"></span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight text-white mb-6 drop-shadow-lg">
              International Conference on Smart Cyber-Physical <br className="hidden md:block" />
              <span className="text-[hsl(var(--accent))]">Systems and Intelligent Analytics
              </span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-lg md:text-xl font-light mb-10">
              <div className="flex items-center gap-2">
                <MapPin className="text-[hsl(var(--accent))]" />
                <span>India International Centre, Lodhi Estate, New Delhi, India</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <Calendar className="text-[hsl(var(--accent))]" />
                <span>2–3 July 2026</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registration">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Register Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-[#0088d1] hover:text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK LINKS BANNER */}
      <div className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 border-x border-slate-200">
            {[
              { label: "Submission", icon: FileText, href: "/papers" },
              { label: "Registration", icon: Users, href: "/registration" },
              { label: "About Conference", icon: Calendar, href: "/about/conference" },
              { label: "Venue", icon: MapPin, href: "/venue" },
            ].map((item, idx) => (
              <Link key={idx} href={item.href}>
                <div className="group flex cursor-pointer flex-col items-center justify-center py-8 px-4 transition-all duration-300 hover:bg-[#42a1f5]/5">

                  {/* Icon */}
                  <item.icon
                    className="mb-3 h-9 w-9 text-[#42a1f5] transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Label */}
                  <span className="text-sm font-semibold tracking-wide text-slate-800 transition-colors duration-300 group-hover:text-[#42a1f5]">
                    {item.label}
                  </span>

                  {/* Accent underline */}
                  <span className="mt-2 h-0.5 w-8 rounded-full bg-transparent transition-all duration-300 group-hover:bg-[#42a1f5]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>




      <AboutConferenceSection />


      <SessionChairsSection
        chairs={[
          {
            name: "Prof. Deepali Virmani",
            headline: "GGSIP University, India",
            image: "/session chairs/deepali.jpg",
            profileUrl: "https://www.linkedin.com/in/dr-deepali-virmani-b8785912/",
          },
          {
            name: "Dr. Valentina Emilia Balas",
            headline: "Aurel Vlaicu University, Romania",
            image: "/session chairs/valintina.jpg",
            profileUrl: "https://www.linkedin.com/in/vabalas/",
          },
          {
            name: "Prof. Meena Jha",
            headline: "Aurel Vlaicu University, Romania",
            image: "/session chairs/meenaja.jpg",
            profileUrl: "https://www.linkedin.com/in/dr-meena-jha-99793615a/",
          },
          {
            name: "Yu-Chen Hu",
            headline: "Tunghai University, Taiwan ",

            image: "/session chairs/chen yu.jpg",
            profileUrl: "https://www.linkedin.com/in/yu-chen-hu-a9725320/",
          },
          {
            name: "Dr. Korhan Cengiz",
            headline: "Biruni University, Türkiye",

            image: "/session chairs/dr kor.jpg",
            profileUrl: "https://www.linkedin.com/in/dr-korhan-cengiz-684685168/",
          },

          {
            name: "Dr. Ahmed Elngar",
            headline: "Beni-suef University, Egypt",

            image: "/session chairs/dr ahmad.jpg",
            profileUrl: "https://www.linkedin.com/in/dr-ahmed-elngar-9840623b/",
          },

          {
            name: "Prof. Oscar Castillo",
            headline: "Instituto Tecnológico de Tijuana, Mexico",
            image: "/session chairs/oscar.jpg",
            profileUrl: "https://www.linkedin.com/in/oscar-castillo-b625aab5/",
          },
        ]}
      />




      {/* TRACKS SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Conference Tracks"
            centered
            subtitle="We invite submissions in the following areas"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                id: 1,
                title: "Cyber-Physical & Smart Systems",
                desc: "Integration of computation, communication, and physical processes.",
                points: [
                  "Smart cities, grids, and cyber-physical infrastructures",
                  "IoT/IIoT architectures and edge–cloud systems",
                  "Security, safety, and resilient CPS design",
                ],
              },
              {
                id: 2,
                title: "AI & Machine Learning for Systems",
                desc: "Intelligent algorithms for adaptive and autonomous systems.",
                points: [
                  "Deep learning and reinforcement learning",
                  "Decision-making and system optimization",
                  "Explainable and trustworthy AI",
                ],
              },
              {
                id: 3,
                title: "Intelligent Analytics & Data-Driven Modeling",
                desc: "Data-centric approaches for prediction and monitoring.",
                points: [
                  "Digital twins and hybrid modeling",
                  "Time-series analytics and anomaly detection",
                  "Predictive maintenance techniques",
                ],
              },
              {
                id: 4,
                title: "Control, Automation & Robotics",
                desc: "Advanced control strategies and robotic applications.",
                points: [
                  "Adaptive and optimal control systems",
                  "Robotics, drones, and autonomous agents",
                  "Industrial automation and smart manufacturing",
                ],
              },
              {
                id: 5,
                title: "Energy, Transportation & Infrastructure Systems",
                desc: "Sustainable and intelligent large-scale systems.",
                points: [
                  "Smart energy systems and microgrids",
                  "Intelligent transportation systems",
                  "Critical infrastructure monitoring",
                ],
              },
              {
                id: 6,
                title: "Interdisciplinary & Emerging Applications",
                desc: "Cross-domain and future-oriented CPS research.",
                points: [
                  "Healthcare and biomedical systems",
                  "Aerospace and mission-critical systems",
                  "Emerging technologies and applications",
                ],
              },
            ].map((track) => (
              <motion.div
                key={track.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#42a1f5]/10 text-[#42a1f5] flex items-center justify-center font-semibold">
                    {track.id}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {track.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {track.desc}
                    </p>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-2 text-sm text-slate-700">
                  {track.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#42a1f5] mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Link href="/cfp">
              <Button
                variant="outline"
                className="border-[#42a1f5]/40 text-[#1eb2fc] hover:bg-[#42a1f5]/10"
              >
                View All Topics
              </Button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* SPONSORS */}
      {/* <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"> */}

          {/* Heading */}
          {/* <section className="py-12 bg-white text-center border-t border-slate-200">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1eb2fc]">Technical Sponsors & Partner </h2>

          </section> */}


          {/* <div className="flex flex-wrap justify-center gap-8">
            {["IEEE", "PES", "University of Science", "Engineering Inst"].map(
              (name, i) => (
                <div
                  key={i}
                  className="group w-[160px] rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-[#42a1f5]/40"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#42a1f5]/10 text-[#42a1f5] ring-1 ring-[#42a1f5]/20 transition-all duration-300 group-hover:bg-[#42a1f5] group-hover:text-white">
                    <span className="text-xl font-bold">
                      {name[0]}
                    </span>
                  </div>


                  <p className="mt-4 text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-slate-900">
                    {name}
                  </p>
                </div>
              )
            )}
          </div> */}
        {/* </div>
      </section> */}

      {/* Venue Section Heading */}
      <section className="py-12 bg-white text-center border-t border-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1eb2fc]">Conference Venue</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Discover the location and facilities of ICSCPSIA 2026 </p>
      </section>

      <VenueCard />

      {/* Contact Section Heading */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1eb2fc]">Contact Us</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Get in touch with our team for any inquiries or assistance</p>
      </section>

      <Contact />
    </div>
  );
}
