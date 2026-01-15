import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { MapPin, Calendar, Clock, Info, Navigation, Building2 } from "lucide-react";

export default function Program() {
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

  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title="Conference Venue" 
        subtitle="Experience the fusion of technology and heritage in Penang, Malaysia"
        image="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070"
      />

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              <MapPin className="w-4 h-4" /> Penang, Malaysia
            </div>
            <h2 className="text-5xl font-bold text-gray-900 font-display mb-8 tracking-tight">World-Class Facilities in <span className="text-primary">Penang</span></h2>
            <div className="prose prose-lg text-gray-600 mb-10">
              <p>IPEE 2026 will be hosted at the premier conference centers of Penang, known for their exceptional service and advanced technological infrastructure.</p>
              <p>Penang, a UNESCO World Heritage site, provides the perfect backdrop for intellectual exchange, combining a rich history with a booming high-tech sector often referred to as the 'Silicon Valley of the East'.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <Calendar className="w-6 h-6 text-primary shrink-0" />
                <div>
                   <h4 className="font-bold text-gray-900">Conference Dates</h4>
                   <p className="text-gray-500">July 14 - July 17, 2026</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <Navigation className="w-6 h-6 text-[hsl(var(--accent))] shrink-0" />
                <div>
                   <h4 className="font-bold text-gray-900">How to Get There</h4>
                   <p className="text-gray-500">15 minutes from Penang International Airport (PEN)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 scale-95 opacity-10 group-hover:rotate-1 transition-transform" />
            <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069" alt="Venue" className="relative rounded-3xl shadow-2xl" />
          </div>
        </div>

        <div className="mt-32">
          <SectionHeader title="Location Details" centered />
          <div className="grid md:grid-cols-2 gap-10 mt-16">
            {venues.map((venue, i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl group">
                <div className="h-64 relative">
                  <img src={venue.image} alt={venue.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary shadow-lg">
                    {venue.type}
                  </div>
                </div>
                <div className="p-10">
                   <h4 className="text-2xl font-bold mb-4 font-display">{venue.name}</h4>
                   <p className="text-gray-500 leading-relaxed">{venue.desc}</p>
                   <button className="mt-8 flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs">
                     View Floor Plan <Navigation className="w-4 h-4" />
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
