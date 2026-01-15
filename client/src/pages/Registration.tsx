import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Check, User, Mail, Globe, Briefcase, GraduationCap, Building2, ClipboardList, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Registration() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const plans = [
    {
      name: "Student (IEEE Member)",
      price: "USD 450",
      earlyBird: "USD 400",
      features: ["Access to all sessions", "Conference kit", "Coffee breaks & Lunch", "Conference Dinner", "Certificate"]
    },
    {
      name: "Regular (IEEE Member)",
      price: "USD 550",
      earlyBird: "USD 500",
      features: ["Access to all sessions", "Conference kit", "Coffee breaks & Lunch", "Conference Dinner", "Certificate", "Proceedings"]
    },
    {
      name: "Non-Member",
      price: "USD 650",
      earlyBird: "USD 600",
      features: ["Access to all sessions", "Conference kit", "Coffee breaks & Lunch", "Conference Dinner", "Certificate", "Proceedings"]
    },
    {
      name: "Listener",
      price: "USD 300",
      earlyBird: "USD 250",
      features: ["Access to all sessions", "Conference kit", "Coffee breaks & Lunch", "Certificate"]
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Registration Submitted",
        description: "Your registration request has been received. Our team will verify and contact you.",
      });
      const target = e.target as HTMLFormElement;
      target.reset();
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <PageBanner 
        title="Registration" 
        subtitle="Secure your spot at the leading conference for power and electrical engineering"
        image="https://images.unsplash.com/photo-1540575861501-7ad05823c95b?q=80&w=2070"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeader title="Registration Rates" centered subtitle="Early Bird Deadline: May 10, 2026" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {plans.map((plan, i) => (
            <div key={i} className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="p-8 bg-gray-50 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-4 min-h-[56px] leading-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-primary">{plan.earlyBird}</span>
                  <span className="text-sm text-gray-500 line-through font-medium">{plan.price}</span>
                </div>
                <p className="text-[10px] text-[hsl(var(--accent))] font-bold uppercase tracking-widest mt-2 bg-[hsl(var(--accent))]/10 w-fit px-2 py-0.5 rounded-full">Early Bird Rate</p>
              </div>
              
              <div className="p-8 flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-tight">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 max-w-5xl mx-auto">
           <div className="grid lg:grid-cols-[1fr_450px] gap-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">Registration <span className="text-primary">Form</span></h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed">Please fill out the form below to initiate your registration. Once submitted, you will receive payment instructions via email.</p>
                
                <div className="space-y-6">
                   <div className="flex gap-5 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                      <Info className="w-6 h-6 text-primary shrink-0" />
                      <p className="text-sm text-blue-800 leading-relaxed">One registration covers only one paper. If an author has multiple papers, each paper must be registered separately.</p>
                   </div>
                   <div className="flex gap-5 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                      <ClipboardList className="w-6 h-6 text-orange-600 shrink-0" />
                      <p className="text-sm text-orange-800 leading-relaxed">Student registration requires valid proof of student status (Student ID card or letter from the university).</p>
                   </div>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100">
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                       <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required type="text" placeholder="Full Name" className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                       <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required type="email" placeholder="Email Address" className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Institution/Affiliation</label>
                       <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required type="text" placeholder="University or Company" className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Registration Type</label>
                       <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all appearance-none">
                          <option>Student (IEEE Member)</option>
                          <option>Regular (IEEE Member)</option>
                          <option>Non-Member</option>
                          <option>Listener</option>
                       </select>
                    </div>
                    <button 
                      disabled={loading}
                      className="w-full py-5 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
                    >
                      {loading ? "Processing..." : "Submit Registration"}
                      <Send className={`w-4 h-4 ${loading ? 'hidden' : ''}`} />
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

import { Info } from "lucide-react";
