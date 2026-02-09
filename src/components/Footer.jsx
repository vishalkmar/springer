import { Mail, MapPin, Calendar, Globe, Send, UserCheck } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <>
      {/* CTA SECTION - 150px height, responsive and professional */}
      <section className="relative h-[200px] md:h-[150px] bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 opacity-10" />
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-gray-200/10 rounded-full" />
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-black font-display flex items-center gap-3 justify-center md:justify-start">
              <UserCheck className="text-[#1eb2fc]" /> Ready to be part of ICSCPSIA 2026?
            </h2>
            <p className="text-[#1eb2fc] text-sm md:text-base mt-1">Join the global research community and contribute to the future of intelligent cyber-physical systems and analytics.</p>
          </div>
          <Link href="/registration">
            <button className="px-10 py-4 bg-[#1eb2fc] text-white font-bold rounded-full shadow-2xl hover:scale-105 hover:shadow-[#1eb2fc]/30 transition-all flex items-center gap-2 uppercase tracking-widest text-xs whitespace-nowrap">
              Register Now <Send className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      <footer className="bg-[#42a1f5] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: About */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center font-bold text-[#42a1f5] text-xl">
                  IP
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-none">ICSCPSIA </h3>
                  <p className="text-xs text-white/80 mt-1">International Conference on Smart Cyber-Physical Systems and Intelligent Analytics
</p>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed mb-6">
               The International Conference on Smart Cyber-Physical Systems and Intelligent Analytics (ICSCPSIA 2026) is a premier international forum uniting researchers, academicians, and industry experts working at the intersection of intelligent systems, analytics, and cyber-physical integration. </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Quick Links</h3>
              <ul className="space-y-3 text-sm text-white/90">
                <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2">Home</Link></li>
                <li><Link href="/about/conference" className="hover:text-white transition-colors flex items-center gap-2">About</Link></li>
                <li><Link href="/conference/agenda" className="hover:text-white transition-colors flex items-center gap-2">Agenda</Link></li>
                <li><Link href="/speakers" className="hover:text-white transition-colors flex items-center gap-2">Speakers</Link></li>
                <li><Link href="/exibitors" className="hover:text-white transition-colors flex items-center gap-2">Exhibitor</Link></li>
                <li><Link href="/registration" className="hover:text-white transition-colors flex items-center gap-2">Registration</Link></li>
                <li><Link href="/papers" className="hover:text-white transition-colors flex items-center gap-2">Submit Paper</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Contact Us</h3>
              <div className="space-y-4 text-sm text-white/90">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">info@ICSCPSIA.org</p>
                    {/* <a href="mailto:ipee_conf@126.com" className="hover:text-white transition-colors">ipee_conf@126.com</a> */}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <p className="text-white/90">India International Centre, Lodhi Estate, New Delhi, India
                </p>
                </div>
                {/* <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <a href="https://ipee.net" className="hover:text-white transition-colors">www..net</a>
                </div> */}
              </div>
            </div>

            {/* Column 4: Important Dates */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Important Dates</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-4">
                  {/* <div className="bg-white/10 rounded px-2 py-1 text-center min-w-[50px]">
                    <span className="block text-xs uppercase text-white/80">Feb</span>
                    <span className="block text-lg font-bold text-[hsl(var(--accent))]">20</span>
                  </div> */}
                  <div>
                    <p className="font-medium text-white">To be Announced</p>
                    {/* <p className="text-xs text-white/70">Deadline for first round</p> */}
                  </div>
                </li>
                {/* 
                <li className="flex gap-4">
                  <div className="bg-white/10 rounded px-2 py-1 text-center min-w-[50px]">
                    <span className="block text-xs uppercase text-white/80">Mar</span>
                    <span className="block text-lg font-bold text-[hsl(var(--accent))]">15</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Full Paper</p>
                    <p className="text-xs text-white/70">Final submission deadline</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white/10 rounded px-2 py-1 text-center min-w-[50px]">
                    <span className="block text-xs uppercase text-white/80">Jul</span>
                    <span className="block text-lg font-bold text-[hsl(var(--accent))]">14</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Conference Day</p>
                    <p className="text-xs text-white/70">Opening ceremony</p>
                  </div>
                </li>
                 */}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 text-center text-sm text-white/70">
            <p>International Conference on Smart Cyber-Physical Systems and Intelligent Analytics
(ICSCPSIA 2026)
. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
