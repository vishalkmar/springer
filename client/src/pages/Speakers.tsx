import { SectionHeader } from "@/components/SectionHeader";

export default function Speakers() {
  const speakers = [
    {
      name: "Prof. Alan Turing",
      title: "Keynote Speaker",
      affiliation: "Cambridge University, UK",
      bio: "Pioneer in theoretical computer science and artificial intelligence.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
    },
    {
      name: "Dr. Marie Curie",
      title: "Keynote Speaker",
      affiliation: "University of Paris, France",
      bio: "Distinguished researcher in radioactivity and electrical phenomena.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
    },
    {
      name: "Prof. Nikola Tesla",
      title: "Invited Speaker",
      affiliation: "Institute of Electrical Engineers",
      bio: "Inventor best known for his contributions to the design of the modern alternating current (AC) electricity supply system.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Distinguished Speakers" centered subtitle="Meet the experts leading the future of electrical engineering" />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-5 right-6 bg-[hsl(var(--accent))] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-20">
                  {speaker.title}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{speaker.affiliation}</p>
                <p className="text-gray-500 text-sm line-clamp-3">{speaker.bio}</p>
                
                <button className="mt-4 text-sm font-semibold text-primary hover:text-[hsl(var(--accent))] transition-colors">
                  View Full Profile &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
