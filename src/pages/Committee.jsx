import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { User, Mail, MapPin, Globe } from "lucide-react";
import { useLocation } from "wouter";

export default function Committee() {
  const [location] = useLocation();
  const isTPC = location.includes("tpc");

  const organizingCommittee = [
    {
      role: "Advisory Chairs",
      members: [
        { name: "Prof. John Doe", affiliation: "University of Technology, USA", image: "https://i.pravatar.cc/150?u=john", designation: "Dean of Engineering" },
        { name: "Prof. Jane Smith", affiliation: "Imperial College London, UK", image: "https://i.pravatar.cc/150?u=jane", designation: "Professor Emeritus" }
      ]
    },
    {
      role: "Conference Chairs",
      members: [
        { name: "Dr. Robert Chen", affiliation: "National University of Singapore", image: "https://i.pravatar.cc/150?u=robert", designation: "Head of Research" }
      ]
    },
    {
      role: "Program Chairs",
      members: [
        { name: "Prof. Sarah Johnson", affiliation: "University of Melbourne, Australia", image: "https://i.pravatar.cc/150?u=sarah", designation: "Associate Dean" },
        { name: "Dr. Michael Wong", affiliation: "Hong Kong Polytechnic University", image: "https://i.pravatar.cc/150?u=michael", designation: "Principal Scientist" }
      ]
    }
  ];

  const tpcMembers = [
    { name: "Assoc. Prof. David Lee", affiliation: "Tsinghua University, China", designation: "Senior Member IEEE" },
    { name: "Dr. Emily Davis", affiliation: "University of Toronto, Canada", designation: "Research Fellow" },
    { name: "Dr. James Wilson", affiliation: "ETH Zurich, Switzerland", designation: "Associate Professor" },
    { name: "Prof. Maria Garcia", affiliation: "Technical University of Madrid, Spain", designation: "Department Head" },
    { name: "Dr. Alex Rivet", affiliation: "MIT, USA", designation: "Postdoctoral Researcher" },
    { name: "Prof. Kenji Sato", affiliation: "University of Tokyo, Japan", designation: "Senior Scientist" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title={isTPC ? "Technical Program Committee" : "Organizing Committee"} 
        subtitle={isTPC ? "Experts reviewing the future of power systems" : "The visionaries behind IPEE 2026"}
        image={isTPC ? "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" : "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084"}
      />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        {!isTPC ? (
          <div className="space-y-20">
            {organizingCommittee.map((group, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-10 border-b pb-4">
                  <div className="w-2 h-8 bg-primary rounded-full" />
                  <h3 className="text-3xl font-bold text-gray-900 font-display uppercase tracking-wider">{group.role}</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.members.map((member, mIdx) => (
                    <div key={mIdx} className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-primary/10 group-hover:ring-primary transition-all">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-bold text-xl text-gray-900 mb-1 tracking-tight">{member.name}</h4>
                        <p className="text-primary font-bold text-sm mb-2">{member.designation}</p>
                        <p className="text-gray-500 text-sm italic">{member.affiliation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              {tpcMembers.map((member, idx) => (
                <div key={idx} className="flex items-center gap-5 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:bg-white transition-colors group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <User className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{member.name}</h4>
                    <p className="text-sm text-primary font-medium">{member.designation}</p>
                    <p className="text-xs text-gray-500">{member.affiliation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
