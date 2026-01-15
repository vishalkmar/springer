import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { Award, Trophy, Star, ShieldCheck, ChevronRight } from "lucide-react";

export default function Submission() {
  const awards = [
    {
      title: "Best Industrial Paper Award",
      desc: "Recognizing outstanding research with significant industrial impact and practical application.",
      prize: "$500 + Official Certificate",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Young Scientist Award",
      desc: "Honoring young researchers under 35 who demonstrate exceptional promise and innovation.",
      prize: "$300 + Official Certificate",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "Best Student Paper Award",
      desc: "Dedicated to the best work presented where the primary author is a full-time student.",
      prize: "$200 + Official Certificate",
      icon: <GraduationCap className="w-8 h-8" /> // Wait, I need to import this or use lucide icon
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title="Awards & Recognition" 
        subtitle="Celebrating excellence and innovation in electrical engineering research"
        image="https://images.unsplash.com/photo-1491333078588-55b6733c7de6?q=80&w=2070"
      />
      
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Best Paper", icon: <Trophy className="text-[hsl(var(--accent))]" />, bg: "bg-blue-50" },
            { title: "Outstanding Reviewer", icon: <ShieldCheck className="text-primary" />, bg: "bg-green-50" },
            { title: "Best Presentation", icon: <Award className="text-orange-500" />, bg: "bg-orange-50" },
          ].map((item, i) => (
            <div key={i} className={`${item.bg} p-10 rounded-3xl text-center flex flex-col items-center group hover:scale-105 transition-all`}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl mb-6 group-hover:rotate-12 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">Recognizing top contributors of IPEE 2026</p>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <SectionHeader title="Distinguished Awards" centered />
          <div className="space-y-8 mt-16">
            {awards.map((award, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-24 h-24 bg-primary text-white rounded-3xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 group-hover:bg-[hsl(var(--accent))] transition-colors">
                  {award.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{award.title}</h4>
                  <p className="text-gray-600 text-lg mb-6 max-w-3xl">{award.desc}</p>
                  <div className="flex items-center gap-2 text-primary font-bold bg-primary/5 px-4 py-2 rounded-full w-fit border border-primary/10">
                    <Star className="w-4 h-4 fill-primary" />
                    <span>{award.prize}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Fixed missing import for Awards
import { GraduationCap } from "lucide-react";
