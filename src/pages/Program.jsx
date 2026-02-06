import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { MapPin, Calendar, Clock, Info, Navigation, Building2, Globe, Laptop, Users, Presentation } from "lucide-react";
import { useLocation } from "wouter";

export default function Program() {
  const [location] = useLocation();
  const isVenue = location.includes("venue");

  const venues = [
    {
      name: "Grand Penang Ballroom",
      type: "Main Conference Venue",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069",
      desc: "A state-of-the-art facility equipped with high-fidelity audio systems and 4K projection for our keynote sessions."
    },
    {
      name: "Heritage Research Center",
      type: "Workshops & Tutorials",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
      desc: "Located just steps from the main hotel, offering modern meeting rooms and collaborative spaces."
    }
  ];

  if (isVenue) {
    return (
      <div className="bg-white min-h-screen">
        <PageBanner 
          title="Conference Venue" 
          subtitle="Experience the fusion of technology and heritage in Penang, Malaysia"
          image="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070"
        />
  
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                <MapPin className="w-3 h-3" /> Location Details
              </div>
              <h2 className="text-5xl font-bold text-gray-900 font-display mb-8 tracking-tighter leading-none">The Heart of <br/><span className="text-primary">Penang Technology</span></h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>IPEE 2026 will be hosted at the premier conference centers of Penang, known for their exceptional service and advanced technological infrastructure.</p>
                <p>Penang, a UNESCO World Heritage site, provides the perfect backdrop for intellectual exchange, combining a rich history with a booming high-tech sector often referred to as the 'Silicon Valley of the East'.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-12">
                 <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <Building2 className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold text-gray-900">Facility</h4>
                    <p className="text-sm text-gray-500">5-Star Conference Center</p>
                 </div>
                 <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <Globe className="w-8 h-8 text-[hsl(var(--accent))] mb-4" />
                    <h4 className="font-bold text-gray-900">Connectivity</h4>
                    <p className="text-sm text-gray-500">High-speed Campus WiFi</p>
                 </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-6 bg-primary/5 rounded-[3rem] -z-10" />
              <div className="grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069" alt="Venue 1" className="rounded-2xl shadow-xl w-full h-full object-cover" />
                 <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" alt="Venue 2" className="rounded-2xl shadow-xl mt-8 w-full h-full object-cover" />
              </div>
            </div>
          </div>
  
          <div className="mt-32">
            <SectionHeader title="Our Facilities" centered />
            <div className="grid md:grid-cols-2 gap-10 mt-16">
              {venues.map((venue, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl group hover:border-primary/20 transition-all">
                  <div className="h-72 relative overflow-hidden">
                    <img src={venue.image} alt={venue.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">
                      {venue.type}
                    </div>
                  </div>
                  <div className="p-12">
                     <h4 className="text-3xl font-bold mb-4 font-display leading-tight">{venue.name}</h4>
                     <p className="text-gray-500 text-lg leading-relaxed">{venue.desc}</p>
                     <button className="mt-10 px-6 py-3 border border-gray-200 rounded-xl flex items-center gap-3 text-gray-900 font-bold hover:bg-gray-50 transition-all uppercase tracking-widest text-xs">
                       View Floor Plan <Navigation className="w-4 h-4 text-primary" />
                     </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Program Overview Page
  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title="Program Overview" 
        subtitle="A comprehensive schedule of sessions, workshops, and keynotes"
        image="https://images.unsplash.com/photo-1505373630100-aa73399b5ff5?q=80&w=2070"
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2">
              <SectionHeader title="Tentative Schedule" />
              <div className="space-y-4 mt-12">
                 {[
                   { day: "Day 1", date: "July 14, 2026", event: "Registration & Welcome Reception", type: "Social" },
                   { day: "Day 2", date: "July 15, 2026", event: "Keynote Speeches & Technical Sessions", type: "Academic" },
                   { day: "Day 3", date: "July 16, 2026", event: "Technical Sessions & Gala Dinner", type: "Academic" },
                   { day: "Day 4", date: "July 17, 2026", event: "Lab Visits & Local Tours", type: "Tour" }
                 ].map((item, i) => (
                   <div key={i} className="group flex items-center gap-8 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all">
                      <div className="w-20 h-20 bg-primary text-white rounded-2xl flex flex-col items-center justify-center shrink-0 shadow-lg group-hover:bg-[hsl(var(--accent))] group-hover:text-primary transition-colors">
                         <span className="text-xs font-bold uppercase">{item.day.split(' ')[0]}</span>
                         <span className="text-2xl font-black">{item.day.split(' ')[1]}</span>
                      </div>
                      <div className="flex-1">
                         <div className="flex items-center gap-3 mb-1">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-primary">{item.date}</span>
                         </div>
                         <h3 className="text-2xl font-bold text-gray-900 font-display">{item.event}</h3>
                      </div>
                      <div className="hidden md:block px-4 py-2 bg-white rounded-full border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                         {item.type}
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="space-y-8">
              <div className="bg-[#42a1f5] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                 <h3 className="text-2xl font-bold mb-6 font-display">Program Highlights</h3>
                 <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                       <Presentation className="w-6 h-6 text-[hsl(var(--accent))] shrink-0" />
                       <div>
                          <p className="font-bold">4 Keynote Sessions</p>
                          <p className="text-sm text-white">World-renowned experts from industry and academia.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-4">
                       <Laptop className="w-6 h-6 text-[hsl(var(--accent))] shrink-0" />
                       <div>
                          <p className="font-bold">20+ Technical Tracks</p>
                          <p className="text-sm text-white">Covering all major areas of power engineering.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-4">
                       <Users className="w-6 h-6 text-[hsl(var(--accent))] shrink-0" />
                       <div>
                          <p className="font-bold">Networking Events</p>
                          <p className="text-sm text-white">Gala dinner and welcome reception in Penang.</p>
                       </div>
                    </li>
                 </ul>
                 <button className="w-full mt-10 py-4 bg-[hsl(var(--accent))] text-white font-bold rounded-xl hover:scale-105 transition-transform">
                    Download Full Program (PDF)
                 </button>
              </div>

              <div className="p-8 border border-gray-100 rounded-[2.5rem] bg-gray-50">
                 <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" /> Note
                 </h4>
                 <p className="text-sm text-gray-500 leading-relaxed">The final detailed schedule with specific presentation times will be available by June 2026.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
