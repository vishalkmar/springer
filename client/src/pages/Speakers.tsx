import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useLocation } from "wouter";
import { User, Mail, Briefcase, GraduationCap } from "lucide-react";

export default function Speakers() {
  const [location] = useLocation();
  const isInvited = location.includes("invited");
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const speakers = [
    {
      name: "Prof. Alan Turing",
      title: "Keynote Speaker",
      designation: "Chair Professor of Artificial Intelligence",
      affiliation: "Cambridge University, UK",
      bio: "Alan Turing was an English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general-purpose computer.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
      topic: "The Future of Computational Intelligence in Power Systems"
    },
    {
      name: "Dr. Marie Curie",
      title: "Keynote Speaker",
      designation: "Director of Radiological Research",
      affiliation: "University of Paris, France",
      bio: "Marie Skłodowska Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two different scientific fields.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
      topic: "Novel Radioactive Materials for Sustainable Energy Storage"
    },
    {
      name: "Prof. Nikola Tesla",
      title: "Invited Speaker",
      designation: "Principal Engineer",
      affiliation: "Institute of Electrical Engineers",
      bio: "Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      topic: "Wireless Power Transfer: From Concept to Global Scale"
    }
  ];

  const filteredSpeakers = isInvited 
    ? speakers.filter(s => s.title === "Invited Speaker")
    : speakers.filter(s => s.title === "Keynote Speaker");

  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title={isInvited ? "Invited Speakers" : "Keynote Speakers"} 
        subtitle="Meet the world-class experts sharing their groundbreaking research"
        image="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredSpeakers.map((speaker, idx) => (
            <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-80 overflow-hidden">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="inline-block px-3 py-1 bg-[hsl(var(--accent))] text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 self-start">
                  {speaker.title}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">{speaker.name}</h3>
                <p className="text-primary font-bold text-sm mb-4 leading-tight">{speaker.designation}</p>
                <p className="text-gray-500 text-sm mb-6 flex-1 italic">{speaker.affiliation}</p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                      View Full Profile
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-3xl">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 bg-gray-100">
                        <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="md:w-2/3 p-8 md:p-12">
                        <DialogHeader>
                          <div className="flex items-center gap-3 mb-2">
                             <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">{speaker.title}</span>
                          </div>
                          <DialogTitle className="text-4xl font-bold text-gray-900 font-display mb-2">{speaker.name}</DialogTitle>
                          <p className="text-primary text-lg font-medium mb-6">{speaker.designation} <br/> <span className="text-gray-500 text-sm font-normal">{speaker.affiliation}</span></p>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="flex items-center gap-2 text-gray-900 font-bold mb-2 uppercase tracking-widest text-xs">
                              <Briefcase className="w-4 h-4 text-primary" /> Presentation Topic
                            </h4>
                            <p className="text-xl font-bold text-primary italic">"{speaker.topic}"</p>
                          </div>
                          <div>
                            <h4 className="flex items-center gap-2 text-gray-900 font-bold mb-2 uppercase tracking-widest text-xs">
                              <User className="w-4 h-4 text-primary" /> About the Speaker
                            </h4>
                            <p className="text-gray-600 leading-relaxed text-lg">{speaker.bio}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>

        {isInvited && (
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="bg-[#094090] rounded-[2rem] p-10 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
               <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display uppercase tracking-tight">Become a Speaker</h3>
               <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto opacity-80">Share your expertise and research findings with a global community of engineers and scientists.</p>
               <button className="px-10 py-4 bg-[hsl(var(--accent))] text-[#094090] font-bold rounded-xl hover:scale-105 transition-transform shadow-xl">
                 Register as Invited Speaker
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
