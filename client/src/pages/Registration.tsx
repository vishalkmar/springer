import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Check, User, Mail, Building2, ClipboardList, Send, Info, Award, Calendar, FileCheck } from "lucide-react";
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

  const scrollToForm = () => {
    const element = document.getElementById("registration-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-tight">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button onClick={scrollToForm} className="w-full rounded-xl py-6 font-bold uppercase tracking-widest text-xs">
                  Register for this plan
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bank Transfer Details Section - From Reference Image */}
        <div className="mt-24 max-w-4xl mx-auto bg-gray-50 rounded-[2rem] border border-gray-200 overflow-hidden shadow-xl">
           <div className="bg-primary p-6 text-white text-center">
              <h3 className="text-xl font-bold flex items-center justify-center gap-3">
                 <Building2 className="w-5 h-5" /> Bank Transfer Details
              </h3>
           </div>
           <div className="p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                       <span className="text-gray-500 font-medium">Account Name:</span>
                       <span className="text-gray-900 font-bold">CONFERENCE SOLUTIONS</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                       <span className="text-gray-500 font-medium">Bank Name:</span>
                       <span className="text-gray-900 font-bold">Axis Bank Ltd.</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                       <span className="text-gray-500 font-medium">Account Number:</span>
                       <span className="text-gray-900 font-bold">923020012345678</span>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                       <span className="text-gray-500 font-medium">IFSC Code:</span>
                       <span className="text-gray-900 font-bold">UTIB0001234</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                       <span className="text-gray-500 font-medium">SWIFT Code:</span>
                       <span className="text-gray-900 font-bold">AXISINBB001</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                       <span className="text-gray-500 font-medium">Currency:</span>
                       <span className="text-gray-900 font-bold">USD / MYR</span>
                    </div>
                 </div>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 flex gap-4 mt-6">
                 <Info className="w-6 h-6 text-orange-600 shrink-0" />
                 <div className="text-sm text-orange-800 space-y-2">
                    <p className="font-bold">Important Notes:</p>
                    <ul className="list-disc pl-4 space-y-1">
                       <li>Include IPEE-2026 and Paper ID in transfer reference.</li>
                       <li>Allow 2-3 business days for international transfers.</li>
                       <li>Upload your transaction receipt in the form below.</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>

        {/* Registration Form - ID referenced by cards */}
        <div id="registration-form" className="mt-32 max-w-5xl mx-auto scroll-mt-20">
           <div className="grid lg:grid-cols-[1fr_450px] gap-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">Conference Registration <span className="text-primary">Form</span></h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed">Please fill out the form below to complete your registration. Professional details are required for certificate generation.</p>
                
                <div className="space-y-4">
                   {[
                     { icon: FileCheck, title: "Paper ID", desc: "If applicable, please provide your Paper ID." },
                     { icon: Award, title: "Certificate", desc: "Names will be printed exactly as provided." },
                     { icon: Calendar, title: "Deadlines", desc: "Late registrations may not be included in the banquet list." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <item.icon className="w-5 h-5 text-primary shrink-0" />
                        <div>
                           <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                           <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 relative">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] -z-10" />
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Registration Category</label>
                       <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all appearance-none font-medium">
                          <option>Student (IEEE Member)</option>
                          <option>Regular (IEEE Member)</option>
                          <option>Non-Member</option>
                          <option>Listener</option>
                       </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">First Name</label>
                          <input required type="text" placeholder="John" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Last Name</label>
                          <input required type="text" placeholder="Doe" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                       <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required type="email" placeholder="john@example.com" className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Institution</label>
                       <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required type="text" placeholder="University Name" className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Transaction Ref #</label>
                       <div className="relative">
                          <ClipboardList className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required type="text" placeholder="TXN-123456" className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" />
                       </div>
                    </div>
                    <button 
                      disabled={loading}
                      className="w-full py-5 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
                    >
                      {loading ? "Processing..." : "Complete Registration"}
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
