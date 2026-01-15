import { motion } from "framer-motion";
import { Calendar, MapPin, FileText, Users, Award, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash image: Modern city power grid / technology */}
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" 
            alt="Power Lines Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#094090]/90 to-[#094090]/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="uppercase tracking-widest text-sm font-semibold">IPEE 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6 drop-shadow-lg">
              2026 2nd International Power and <br className="hidden md:block"/>
              <span className="text-[hsl(var(--accent))]">Electrical Engineering</span> Conference
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-lg md:text-xl font-light mb-10">
              <div className="flex items-center gap-2">
                <MapPin className="text-[hsl(var(--accent))]" />
                <span>Penang, Malaysia</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <Calendar className="text-[hsl(var(--accent))]" />
                <span>July 14-17, 2026</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/submission">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Submit Paper
                </Button>
              </Link>
              <Link href="/cfp">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                  Call For Papers
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK LINKS BANNER */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 border-x border-gray-200">
            {[
              { label: "Submission", icon: FileText, href: "/submission" },
              { label: "Registration", icon: Users, href: "/registration" },
              { label: "Program", icon: Calendar, href: "/program" },
              { label: "Venue", icon: MapPin, href: "/program/venue" },
            ].map((item, idx) => (
              <Link key={idx} href={item.href}>
                <div className="py-8 px-4 flex flex-col items-center justify-center hover:bg-white transition-colors cursor-pointer group">
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-gray-700 group-hover:text-[hsl(var(--accent))]">{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* WELCOME SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="Welcome to IPEE 2026" />
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  We are pleased to announce that the 2026 2nd International Power and Electrical Engineering Conference (IPEE 2026) will be held in Penang, Malaysia during July 14-17, 2026.
                </p>
                <p>
                  IPEE 2026 aims to bring together leading academic scientists, researchers, and research scholars to exchange and share their experiences and research results on all aspects of Power and Electrical Engineering. It also provides a premier interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in the fields of Power and Electrical Engineering.
                </p>
                <Link href="/about">
                  <span className="inline-flex items-center text-primary font-semibold hover:text-[hsl(var(--accent))] mt-4 cursor-pointer">
                    Read more about IPEE <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[hsl(var(--accent))] rounded-2xl transform rotate-3 translate-x-2 translate-y-2 opacity-20"></div>
              {/* Unsplash image: Conference meeting / academic setting */}
              <img 
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop" 
                alt="Conference Meeting" 
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Conference Tracks" centered subtitle="We invite submissions in the following areas" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, title: "Power System Engineering", desc: "Generation, transmission, distribution, and utilization." },
              { id: 2, title: "Smart Grid & Microgrid", desc: "Advanced technologies for modern power grids." },
              { id: 3, title: "Renewable Energy", desc: "Solar, wind, hydro, and other sustainable sources." },
              { id: 4, title: "Power Electronics", desc: "Converters, inverters, and drive systems." },
            ].map((track) => (
              <motion.div 
                key={track.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                  {track.id}
                </div>
                <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{track.desc}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] mt-0.5" /> Topic Area 1</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] mt-0.5" /> Topic Area 2</li>
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/cfp">
              <Button variant="outline">View All Topics</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#094090] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="p-10 md:w-1/3 bg-[hsl(var(--accent))] text-[#094090] flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 font-display">Important Dates</h2>
              <p className="font-medium opacity-90">Mark your calendar for these upcoming deadlines.</p>
            </div>
            
            <div className="p-10 md:w-2/3 bg-white text-gray-800">
              <div className="space-y-6">
                {[
                  { date: "February 20, 2026", event: "Abstract Submission Deadline", status: "Upcoming" },
                  { date: "March 15, 2026", event: "Full Paper Submission Deadline", status: "Upcoming" },
                  { date: "April 20, 2026", event: "Notification of Acceptance", status: "Pending" },
                  { date: "May 10, 2026", event: "Registration Deadline", status: "Pending" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{item.date}</h4>
                      <p className="text-gray-500">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-8">Technical Sponsors & Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos - simplified circles/text for now */}
             {["IEEE", "PES", "University of Science", "Engineering Inst"].map((name, i) => (
               <div key={i} className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center font-bold text-gray-400">
                   {name[0]}
                 </div>
                 <span className="font-semibold text-gray-500">{name}</span>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
