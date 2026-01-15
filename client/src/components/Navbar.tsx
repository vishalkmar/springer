import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  // Nav Links Configuration
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
  ];

  return (
    <nav className="bg-[#094090] text-white shadow-xl sticky top-0 z-50 border-b-4 border-[hsl(var(--accent))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Area */}
          <Link href="/" className="flex-shrink-0 flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-lg group-hover:rotate-3 transition-transform">
              <span className="text-[#094090] font-bold text-xl font-display">IP</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight leading-none">IPEE 2026</span>
              <span className="text-xs text-blue-200 font-light">Power & Electrical Engineering</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link href={link.href}>
                  <div className={`
                    px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 cursor-pointer transition-colors
                    ${isActive(link.href) ? 'bg-white/10 text-white' : 'text-blue-100 hover:bg-white/5 hover:text-white'}
                  `}>
                    {link.label}
                    {link.children && <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />}
                  </div>
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <div className="absolute left-0 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top pt-2">
                    <div className="bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="py-1">
                        {link.children.map((child) => (
                          <Link key={child.label} href={child.href}>
                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary cursor-pointer border-l-2 border-transparent hover:border-primary">
                              {child.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <a href="https://ipee.net" target="_blank" rel="noopener noreferrer" 
               className="ml-4 px-4 py-2 rounded bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors flex items-center gap-2">
               History <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#07367a] overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link href={link.href}>
                    <div 
                      onClick={() => !link.children && setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                      isActive(link.href) ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                    }`}>
                      {link.label}
                    </div>
                  </Link>
                  {link.children && (
                    <div className="pl-6 space-y-1 border-l border-blue-600/30 ml-3 my-1">
                      {link.children.map((child) => (
                        <Link key={child.label} href={child.href}>
                          <div 
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-blue-200 hover:text-white hover:bg-blue-800/50 cursor-pointer">
                            {child.label}
                          </div>
                        </Link>
                      ))}
                    </div>
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
