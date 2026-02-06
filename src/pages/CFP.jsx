import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { FileText, Lightbulb, Zap, Cpu, Search, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";

export default function CFP() {
  const [location] = useLocation();
  const isSpecial = location.includes("special");

  const topics = [
    { title: "Power Systems", icon: <Zap className="w-6 h-6" />, items: ["Grid Modernization", "Power Quality", "High Voltage Engineering"] },
    { title: "Renewable Energy", icon: <Lightbulb className="w-6 h-6" />, items: ["Solar & Wind Energy", "Energy Storage", "Biomass Systems"] },
    { title: "Smart Technologies", icon: <Cpu className="w-6 h-6" />, items: ["Smart Grid Architecture", "IoT in Power", "AI for Energy"] },
    { title: "Power Electronics", icon: <Search className="w-6 h-6" />, items: ["Converter Design", "Motor Drives", "Thermal Management"] }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title={isSpecial ? "Special Sessions" : "Call for Papers"} 
        subtitle={isSpecial ? "Targeted discussions on emerging trends in power engineering" : "Submit your original research to IPEE 2026"}
        image={isSpecial ? "https://images.unsplash.com/photo-1591115765373-520b7a217157?q=80&w=2070" : "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070"}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        {!isSpecial ? (
          <>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
              <div>
                <SectionHeader title="Submission Topics" />
                <p className="text-gray-600 text-lg mb-8">Authors are invited to submit original, unpublished research papers in the following areas of interest, but not limited to:</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {topics.map((topic, i) => (
                    <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
                      <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--accent))] transition-colors">
                        {topic.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-3">{topic.title}</h4>
                      <ul className="space-y-2">
                        {topic.items.map((item, idx) => (
                          <li key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-primary" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -z-10" />
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070" alt="Research" className="rounded-[2rem] shadow-2xl" />
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
             <SectionHeader title="Propose a Special Session" centered />
             <div className="bg-[#42a1f5] text-white p-12 rounded-[3rem] shadow-2xl mt-16 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />
                <h3 className="text-3xl font-bold mb-6 font-display">Guidelines for Organizers</h3>
                <p className="text-white text-lg mb-8 leading-relaxed">Special sessions provide a focused forum for new topics or innovative applications. Organizers are responsible for inviting papers and managing the review process.</p>
                <ul className="space-y-4 mb-10">
                   {[
                     "Session Title and Brief Abstract",
                     "Short Biography of Session Organizers",
                     "List of 5-6 Potential Papers",
                     "Expected Number of Participants"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full" />
                        <span className="text-white font-medium">{item}</span>
                     </li>
                   ))}
                </ul>
                <button className="px-8 py-4 bg-[hsl(var(--accent))] text-white font-bold rounded-xl hover:scale-105 transition-all">
                  Submit Session Proposal
                </button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
