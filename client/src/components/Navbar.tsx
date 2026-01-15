import { Link as WouterLink, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const navLinks = [
    { label: "Home", href: "/" },
    { 
      label: "Committee", 
      href: "/committee",
      children: [
        { label: "Organizing Committee", href: "/committee" },
        { label: "TPC Member", href: "/committee/tpc" },
      ]
    },
    { 
      label: "Speakers", 
      href: "/speakers",
      children: [
        { label: "Keynote Speakers", href: "/speakers" },
        { label: "Invited Speakers", href: "/speakers/invited" },
      ]
    },
    { 
      label: "CFP", 
      href: "/cfp",
      children: [
        { label: "Call for Papers", href: "/cfp" },
        { label: "Special Sessions", href: "/cfp/special" },
      ]
    },
    { 
      label: "Submission", 
      href: "/submission",
      children: [
        { label: "Submission Guidelines", href: "/submission" },
        { label: "Awards", href: "/submission/awards" },
      ]
    },
    { 
      label: "Program", 
      href: "/program",
      children: [
        { label: "Overview", href: "/program" },
        { label: "Conference Venue", href: "/program/venue" },
      ]
    },
    { 
      label: "Registration", 
      href: "/registration",
      children: [
        { label: "Guidelines", href: "/registration" },
        { label: "Register Now", href: "/registration/now" },
      ]
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#094090] text-white shadow-xl sticky top-0 z-50 border-b-4 border-[hsl(var(--accent))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <WouterLink href="/" className="flex-shrink-0 flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-lg group-hover:rotate-3 transition-transform">
              <span className="text-[#094090] font-bold text-xl font-display">IP</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight leading-none">IPEE 2026</span>
              <span className="text-xs text-blue-200 font-light">Power & Electrical Engineering</span>
            </div>
          </WouterLink>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <WouterLink href={link.href}>
                  <div className={`
                    px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 cursor-pointer transition-colors
                    ${isActive(link.href) ? 'bg-white/10 text-white' : 'text-blue-100 hover:bg-white/5 hover:text-white'}
                  `}>
                    {link.label}
                    {link.children && <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />}
                  </div>
                </WouterLink>

                {link.children && (
                  <div className="absolute left-0 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top pt-2">
                    <div className="bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="py-1">
                        {link.children.map((child) => (
                          <WouterLink key={child.label} href={child.href}>
                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary cursor-pointer border-l-2 border-transparent hover:border-primary">
                              {child.label}
                            </div>
                          </WouterLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-800 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} className="fixed inset-0 z-50 lg:hidden bg-[#07367a] flex flex-col pt-20">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 text-white"><X className="w-8 h-8" /></button>
            <div className="px-6 space-y-4 overflow-y-auto pb-10">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-white/10 pb-2">
                  <div className="flex items-center justify-between py-2" onClick={() => link.children ? setActiveMobileSub(activeMobileSub === link.label ? null : link.label) : (setIsOpen(false), window.location.href = link.href)}>
                    <span className={`text-xl font-bold ${isActive(link.href) ? 'text-[hsl(var(--accent))]' : 'text-white'}`}>{link.label}</span>
                    {link.children && <ChevronDown className={`w-6 h-6 transform transition-transform ${activeMobileSub === link.label ? 'rotate-180' : ''}`} />}
                  </div>
                  {link.children && (
                    <AnimatePresence>
                      {activeMobileSub === link.label && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 space-y-3 overflow-hidden mt-2">
                          {link.children.map((child) => (
                            <WouterLink key={child.label} href={child.href}>
                              <div onClick={() => setIsOpen(false)} className="text-blue-200 text-lg py-1">{child.label}</div>
                            </WouterLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
