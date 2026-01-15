import { SectionHeader } from "@/components/SectionHeader";
import { User } from "lucide-react";

export default function Committee() {
  const committee = [
    {
      role: "Advisory Chair",
      members: [
        { name: "Prof. John Doe", affiliation: "University of Technology, USA" },
        { name: "Prof. Jane Smith", affiliation: "Imperial College London, UK" }
      ]
    },
    {
      role: "Conference Chair",
      members: [
        { name: "Dr. Robert Chen", affiliation: "National University of Singapore" }
      ]
    },
    {
      role: "Program Chair",
      members: [
        { name: "Prof. Sarah Johnson", affiliation: "University of Melbourne, Australia" },
        { name: "Dr. Michael Wong", affiliation: "Hong Kong Polytechnic University" }
      ]
    },
    {
      role: "Technical Committee",
      members: [
        { name: "Assoc. Prof. David Lee", affiliation: "Tsinghua University, China" },
        { name: "Dr. Emily Davis", affiliation: "University of Toronto, Canada" },
        { name: "Dr. James Wilson", affiliation: "ETH Zurich, Switzerland" },
        { name: "Prof. Maria Garcia", affiliation: "Technical University of Madrid, Spain" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Organizing Committee" centered />
        
        <div className="space-y-16">
          {committee.map((group, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-center justify-center mb-8">
                <h3 className="bg-primary text-white px-8 py-2 rounded-full text-lg font-bold shadow-md">
                  {group.role}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {group.members.map((member, mIdx) => (
                  <div key={mIdx} className="bg-gray-50 rounded-xl p-6 flex items-center gap-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                      <User className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{member.name}</h4>
                      <p className="text-primary text-sm">{member.affiliation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
