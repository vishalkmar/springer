import { Mail, MapPin, Calendar, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#091E35] text-white pt-16 pb-8 border-t-4 border-[hsl(var(--accent))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[hsl(var(--accent))] rounded flex items-center justify-center font-bold text-[#091E35] text-xl">
                IP
              </div>
              <div>
                <h3 className="text-xl font-bold leading-none">IPEE 2026</h3>
                <p className="text-xs text-gray-400 mt-1">International Power & Electrical Engineering</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premier international platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns in the fields of Power and Electrical Engineering.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/cfp" className="hover:text-[hsl(var(--accent))] transition-colors flex items-center gap-2">Call for Papers</a></li>
              <li><a href="/committee" className="hover:text-[hsl(var(--accent))] transition-colors flex items-center gap-2">Committee Members</a></li>
              <li><a href="/submission" className="hover:text-[hsl(var(--accent))] transition-colors flex items-center gap-2">Submission Guide</a></li>
              <li><a href="/registration" className="hover:text-[hsl(var(--accent))] transition-colors flex items-center gap-2">Registration</a></li>
              <li><a href="/program" className="hover:text-[hsl(var(--accent))] transition-colors flex items-center gap-2">Conference Program</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Conference Secretary: Amy Hu</p>
                  <a href="mailto:ipee_conf@126.com" className="hover:text-white transition-colors">ipee_conf@126.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                <p>Penang, Malaysia</p>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                <a href="https://ipee.net" className="hover:text-white transition-colors">www.ipee.net</a>
              </div>
            </div>
          </div>

          {/* Column 4: Important Dates */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Important Dates</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-4">
                <div className="bg-white/10 rounded px-2 py-1 text-center min-w-[50px]">
                  <span className="block text-xs uppercase text-gray-400">Feb</span>
                  <span className="block text-lg font-bold text-[hsl(var(--accent))]">20</span>
                </div>
                <div>
                  <p className="font-medium text-white">Abstract Submission</p>
                  <p className="text-xs text-gray-400">Deadline for first round</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-white/10 rounded px-2 py-1 text-center min-w-[50px]">
                  <span className="block text-xs uppercase text-gray-400">Mar</span>
                  <span className="block text-lg font-bold text-[hsl(var(--accent))]">15</span>
                </div>
                <div>
                  <p className="font-medium text-white">Full Paper</p>
                  <p className="text-xs text-gray-400">Final submission deadline</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-white/10 rounded px-2 py-1 text-center min-w-[50px]">
                  <span className="block text-xs uppercase text-gray-400">Jul</span>
                  <span className="block text-lg font-bold text-[hsl(var(--accent))]">14</span>
                </div>
                <div>
                  <p className="font-medium text-white">Conference Day</p>
                  <p className="text-xs text-gray-400">Opening ceremony</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© 2026 2nd International Power and Electrical Engineering Conference (IPEE 2026). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
