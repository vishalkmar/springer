// import { Link as WouterLink, useLocation } from "wouter";
// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeMobileSub, setActiveMobileSub] = useState(null);
//   const [location] = useLocation();

//   const isActive = (path) => location === path;

//   const navLinks = [
//     { label: "Home", href: "/" },
//      { label: "About", href: "/about/conference" },
//     {
//       label: "Papers",
      
//       children: [
//            { label: "Call for Papers", href: "/call-for-paper" },
//         { label: "Paper Submission", href: "/papers" },
//            { label: "Call For Special Sessions", href: "/call-for-sessions" },
//         //  { label: "Conference Agenda", href: "/conference/agenda" },
//         // { label: "Review Expression", href: "/review" },
//         //  { label: "FAQs", href: "/faqs" },
        
//       ],
//     },

//   { label: "Important Dates", href: "/importent-dates" },
//     {
//       label: "Committee",
//       children: [
//         { label: "Organizing Committee", href: "/organizing-committee" },
//         { label: "Advisory Committee", href: "/advisory-committee" },
//          { label: "Technical Committee", href: "/technical-committee" },
//           { label: "Conference Leadership", href: "/conference-leadership" },
//       ],
//     },
//     // {
//     //   label: "Speakers",
//     //   href: "/speakers",
//     //   children: [
//     //     { label: "Keynote Speakers", href: "/speakers" },
//     //     { label: "Keynote Speakers Registration", href: "/speakers/registratioin" },
//     //   ],
//     // },
   
    
//       { label: "Exhibitor", href: "/exibitors" },
//     { label: "Session Chairs", href: "/session-chairs" },
//       { label: "Publication", href: "/publication" },
//     // {
//     //   label: "Program",
//     //   href: "/program",
//     //   children: [
//     //     { label: "Overview", href: "/program" },
//     //     { label: "Conference Venue", href: "/program/venue" },
//     //   ],
//     // },
//      {
//       label: "Awards",
//       href: "/awards",
     
//     },
//     {
//       label: "Registration",
//       href: "/registration",
     
//     },
//       { label: "Previous Conference", href: "/Previous-conference" },
//     { label: "Contact", href: "/contact" },
//      { label: "Venue", href: "/venue" },
//   ];

//   return (
//     <nav className="bg-[#42a1f5] text-white shadow-xl sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           <WouterLink
//             href="/"
//             className="flex-shrink-0 flex items-center space-x-3 group cursor-pointer"
//           >
//             <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-lg group-hover:rotate-3 transition-transform">
//               <span className="text-[#42a1f5] font-bold text-xl font-display">
//                 IC
//               </span>
//             </div>
//             <div className="flex flex-col">
//               <span className="font-bold text-xl tracking-tight leading-none">
//                 ICSCPSIA
//               </span>
              
//             </div>
//           </WouterLink>

//           <div className="hidden lg:flex items-center space-x-1">
//             {navLinks.map((link) => (
//               <div key={link.label} className="relative group">
//                 <WouterLink href={link.href}>
//                   <div
//                     className={`
//                       px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 cursor-pointer transition-colors
//                       ${
//                         isActive(link.href)
//                           ? "bg-white/10 text-white"
//                           : "text-white hover:bg-white/5 hover:text-white"
//                       }
//                     `}
//                   >
//                     {link.label}
//                     {link.children && (
//                       <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />
//                     )}
//                   </div>
//                 </WouterLink>

//                 {link.children && (
//                   <div className="absolute left-0 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top pt-2">
//                     <div className="bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
//                       <div className="py-1">
//                         {link.children.map((child) => (
//                           <WouterLink key={child.label} href={child.href}>
//                             <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0398fc] hover:text-white cursor-pointer border-l-2 border-transparent hover:border-primary">
//                               {child.label}
//                             </div>
//                           </WouterLink>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="lg:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/20 focus:outline-none"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: "100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "100%" }}
//             className="fixed inset-0 z-50 lg:hidden bg-[#07367a] flex flex-col pt-20"
//           >
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-6 right-6 p-2 text-white"
//             >
//               <X className="w-8 h-8" />
//             </button>

//             <div className="px-6 space-y-4 overflow-y-auto pb-10">
//               {navLinks.map((link) => (
//                 <div key={link.label} className="border-b border-white/10 pb-2">
//                   <div
//                     className="flex items-center justify-between py-2"
//                     onClick={() =>
//                       link.children
//                         ? setActiveMobileSub(
//                             activeMobileSub === link.label ? null : link.label
//                           )
//                         : (setIsOpen(false), (window.location.href = link.href))
//                     }
//                   >
//                     <span
//                       className={`text-xl font-bold ${
//                         isActive(link.href)
//                           ? "text-[hsl(var(--accent))]"
//                           : "text-white"
//                       }`}
//                     >
//                       {link.label}
//                     </span>

//                     {link.children && (
//                       <ChevronDown
//                         className={`w-6 h-6 transform transition-transform ${
//                           activeMobileSub === link.label ? "rotate-180" : ""
//                         }`}
//                       />
//                     )}
//                   </div>

//                   {link.children && (
//                     <AnimatePresence>
//                       {activeMobileSub === link.label && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           className="pl-4 space-y-3 overflow-hidden mt-2"
//                         >
//                           {link.children.map((child) => (
//                             <WouterLink key={child.label} href={child.href}>
//                               <div
//                                 onClick={() => setIsOpen(false)}
//                                 className="text-white text-lg py-1"
//                               >
//                                 {child.label}
//                               </div>
//                             </WouterLink>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }



import { Link as WouterLink, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, ChevronDown, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location, navigate] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null);

  const isActive = (path) => location === path;

  const navLinks = [
    { label: "Home", href: "/" },
   
    {
      label: "About",
      children: [
        { label: "About", href: "/about/conference" },
        { label: "Exhibitors", href: "/exibitors" },
       
      ],
    },
    {
      label: "Papers",
      children: [
        { label: "Call for Papers", href: "/call-for-paper" },
        { label: "Paper Submission", href: "/paper-submission" },
        { label: "Special Sessions", href: "/call-for-sessions" },
      ],
    },
    { label: "Important Dates", href: "/important-dates" },
    {
      label: "Committee",
      children: [
        { label: "Organizing Committee", href: "/organizing-committee" },
        { label: "Advisory Committee", href: "/advisory-committee" },
        { label: "Technical Committee", href: "/technical-committee" },
        { label: "Conference Leadership", href: "/conference-leadership" },
      ],
    },
    
    { label: "Session Chairs", href: "/session-chairs" },
    { label: "Publication", href: "/publication" },
    { label: "Awards", href: "/awards" },
     { label: "Previous Conf.", href: "/previous-conference" },
    { label: "Venue", href: "/venue" },
    { label: "Contact", href: "/contact" },
  ];

  const registration = { label: "Register", href: "/registration" };

  const go = (href) => {
    navigate(href);
    setIsOpen(false);
    setActiveMobileSub(null);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-[#42a1f5] text-white shadow-lg">
        <div className="max-w-[1400px] mx-auto px-2 sm:px-3 lg:px-4">
          <div className="h-20 flex items-center justify-between gap-3">
            {/* Logo (✅ at tight widths hide ICSCPSIA text) */}
            <WouterLink href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-md">
                <span className="text-[#42a1f5] font-extrabold text-base">
                  IC
                </span>
              </div>

              {/* ✅ Show full name only on xl+, hide on lg widths to prevent collapse */}
              <div className="hidden xl:block font-extrabold tracking-wide text-base leading-none">
                ICSCPSIA
              </div>
            </WouterLink>

            {/* Desktop */}
            <div className="hidden lg:flex items-center flex-1 min-w-0">
              {/* ✅ Slightly tighter spacing + smaller font between 1024–1279 */}
              <div className="flex items-center flex-1 min-w-0 justify-center gap-[2px] xl:gap-1">
                {navLinks.map((link) => (
                  <DesktopItem
                    key={link.label}
                    link={link}
                    isActive={isActive}
                    navigate={navigate}
                  />
                ))}
              </div>

              {/* ✅ Compact CTA on tight widths */}
              <div className="ml-2 shrink-0">
                <WouterLink href={registration.href}>
                  <div className="px-3 py-2 rounded-xl font-extrabold bg-white text-[#1e4aa8] hover:bg-white/90 transition shadow-md inline-flex items-center gap-2 whitespace-nowrap leading-none text-[11px] xl:text-sm">
                    <BadgeCheck className="w-4 h-4 shrink-0" />
                    {registration.label}
                  </div>
                </WouterLink>
              </div>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 rounded-xl hover:bg-white/10"
              aria-label="Open Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/55 lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="absolute right-0 top-0 h-full w-[86%] max-w-[380px] bg-[#42a1f5] text-white shadow-2xl flex flex-col"
            >
              <div className="p-5 border-b border-white/10 flex items-center justify-between">
                <div className="font-extrabold text-lg">Menu</div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-white/10"
                  aria-label="Close Menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-2">
                {navLinks.map((link) => (
                  <MobileItem
                    key={link.label}
                    link={link}
                    activeMobileSub={activeMobileSub}
                    setActiveMobileSub={setActiveMobileSub}
                    isActive={isActive}
                    go={go}
                  />
                ))}
              </div>

              <div className="p-5 border-t border-white/10">
                <button
                  onClick={() => go("/registration")}
                  className="w-full py-3 rounded-2xl bg-white text-[#1e4aa8] font-extrabold flex items-center justify-center gap-2 shadow-lg"
                >
                  <BadgeCheck className="w-5 h-5" />
                  Registration
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function DesktopItem({ link, isActive, navigate }) {
  // ✅ tighter at lg widths, slightly bigger at xl+
  const base =
    "px-2 py-3 rounded-lg cursor-pointer hover:bg-white/10 inline-flex items-center gap-1 whitespace-nowrap leading-none font-bold text-[11px] xl:text-sm";

  if (link.children?.length) {
    return (
      <div className="relative group">
        <div className={base}>
          {link.label}
          <ChevronDown className="w-3.5 h-3.5 opacity-90 group-hover:rotate-180 transition-transform" />
        </div>

        <div className="absolute left-0 top-full mt-2 bg-white text-gray-800 rounded-xl shadow-xl ring-1 ring-black/5 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all min-w-[210px] overflow-hidden z-50">
          <div className="py-2">
            {link.children.map((child) => (
              <div
                key={child.label}
                onClick={() => navigate(child.href)}
                className="px-4 py-2 text-sm hover:bg-[#42a1f5] hover:text-white cursor-pointer"
              >
                {child.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <WouterLink href={link.href}>
      <div className={`${base} ${isActive(link.href) ? "bg-white/15" : ""}`}>
        {link.label}
      </div>
    </WouterLink>
  );
}

function MobileItem({
  link,
  activeMobileSub,
  setActiveMobileSub,
  isActive,
  go,
}) {
  const open = activeMobileSub === link.label;

  if (link.children?.length) {
    return (
      <div className="bg-white/5 rounded-2xl overflow-hidden">
        <button
          onClick={() => setActiveMobileSub(open ? null : link.label)}
          className="w-full px-4 py-3 flex items-center justify-between"
        >
          <span className="font-extrabold">{link.label}</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-4 pb-3 space-y-2 overflow-hidden"
            >
              {link.children.map((child) => (
                <button
                  key={child.label}
                  onClick={() => go(child.href)}
                  className="w-full text-left px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15"
                >
                  {child.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <button
      onClick={() => go(link.href)}
      className={`w-full text-left px-4 py-3 rounded-2xl font-extrabold transition ${
        isActive(link.href)
          ? "bg-white text-[#1e4aa8]"
          : "bg-white/5 hover:bg-white/10"
      }`}
    >
      {link.label}
    </button>
  );
}
