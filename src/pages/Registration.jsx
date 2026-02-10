import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Check, Building2, Info } from "lucide-react";
import { useState } from "react";

import RegistrationFormSection from "../components/RegistrationForm";

export default function Registration() {
  const [loading, setLoading] = useState(false);

  const plans = [
    {
      name: "Student (IEEE Member)",
      price: "USD 450",
      earlyBird: "USD 400",
      features: [
        "Access to all sessions",
        "Conference kit",
        "Coffee breaks & Lunch",
        "Conference Dinner",
        "Certificate",
      ],
    },
    {
      name: "Regular (IEEE Member)",
      price: "USD 550",
      earlyBird: "USD 500",
      features: [
        "Access to all sessions",
        "Conference kit",
        "Coffee breaks & Lunch",
        "Conference Dinner",
        "Certificate",
        "Proceedings",
      ],
    },
    {
      name: "Non-Member",
      price: "USD 650",
      earlyBird: "USD 600",
      features: [
        "Access to all sessions",
        "Conference kit",
        "Coffee breaks & Lunch",
        "Conference Dinner",
        "Certificate",
        "Proceedings",
      ],
    },
    {
      name: "Listener",
      price: "USD 300",
      earlyBird: "USD 250",
      features: ["Access to all sessions", "Conference kit", "Coffee breaks & Lunch", "Certificate"],
    },
  ];

  const scrollToForm = () => {
    const element = document.getElementById("registration-form");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Registration Submitted! Our team will verify and contact you.");
      e.target.reset();
    }, 1400);
  };

  // ✅ to keep all buttons at same place, we normalize feature list height
  const maxFeatures = Math.max(...plans.map((p) => p.features.length));

  return (
    <div className="bg-white min-h-screen pb-20">
    
    {/* registration page banner */}

    <section className="relative overflow-hidden py-16 sm:py-20 bg-[#11b3d4] text-white">
  {/* soft gradient + glow */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/5 to-black/15" />
    <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/12 blur-3xl" />
    <div className="absolute -bottom-28 right-[-120px] h-[520px] w-[520px] rounded-full bg-black/10 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Title */}
    <div className="text-center">
      <p className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-[11px] sm:text-xs font-bold tracking-widest ring-1 ring-white/25">
        REGISTRATION ICSCPSIA 2026
      </p>

      <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight uppercase text-white">
         Registration for International Conference on Smart
        <br className="hidden sm:block" />
        Cyber-Physical Systems and Intelligent Analytics
      </h1>

      
    </div>

      <p className="text-lg text-center my-4 sm:text-xl font-extrabold">
         2-3 July 2026 
      </p>
   

    {/* Address */}
    <div className="mt-8 text-center">
      <p className="text-lg sm:text-xl font-extrabold">
        India International Centre, Lodhi, New Delhi-110003
      </p>
      <div className="mx-auto mt-3 h-[3px] w-56 sm:w-80 rounded-full bg-white/55" />
    </div>

    {/* CTA */}
   
  </div>
</section>







      <section className="relative">
        {/* soft theme blobs */}
        {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#42a1f5]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#42a1f5]/10 blur-3xl" />
        </div> */}

        <div className="relative max-w-7xl mx-auto px-4 py-2">
          {/* <SectionHeader
            title="Registration Rates"
            centered
            subtitle="Early Bird Deadline: May 10, 2026"
          /> */}

          {/* Plans */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-stretch">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#42a1f5]/40 transition-all duration-300 overflow-hidden flex flex-col"
              >
                
                <div className="h-1.5 w-full bg-gradient-to-r from-[#42a1f5] via-[#42a1f5]/70 to-[#42a1f5]/25" />

              
                <div className="p-8 bg-white border-b border-slate-200">
                  <h3 className="font-extrabold text-slate-900 text-lg mb-4 min-h-[56px] leading-tight">
                    {plan.name}
                  </h3>

                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-extrabold text-[#42a1f5]">
                      {plan.earlyBird}
                    </span>
                    <span className="text-sm text-slate-500 line-through font-semibold pb-1">
                      {plan.price}
                    </span>
                  </div>

                  <div className="mt-3">
                    <span className="inline-flex items-center rounded-full bg-[#42a1f5]/10 px-3 py-1 text-[11px] font-bold tracking-widest text-[#42a1f5] ring-1 ring-[#42a1f5]/20">
                      EARLY BIRD RATE
                    </span>
                  </div>
                </div>

              
                <div className="p-8 flex-1 flex flex-col">
                 
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-slate-700 leading-tight"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#42a1f5]/10 ring-1 ring-[#42a1f5]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#42a1f5]" />
                        </span>
                        {feature}
                      </li>
                    ))}

                  
                    {Array.from({ length: maxFeatures - plan.features.length }).map((_, k) => (
                      <li key={`f-${k}`} className="invisible flex items-start gap-3 text-sm">
                        filler
                      </li>
                    ))}
                  </ul>

                 
               <Button
                     onClick={scrollToForm}
                     className="
                        w-full rounded-2xl py-5
                        font-bold uppercase tracking-widest text-xs
                        bg-primary text-white
                        shadow-lg shadow-primary/25
                        hover:bg-primary/90 hover:shadow-xl
                        transition-all duration-300
                     "
                     >
                     Register for this plan
                     </Button>


                </div>
              </div>
            ))}
          </div> */}

          {/* Bank Transfer Details */}
          {/* <div className="mt-24 max-w-4xl mx-auto rounded-[2rem] border border-slate-200 overflow-hidden shadow-lg bg-white">
            <div className="bg-[#42a1f5] p-6 text-white text-center">
              <h3 className="text-xl font-extrabold flex items-center justify-center gap-3">
                <Building2 className="w-5 h-5" /> Bank Transfer Details
              </h3>
              <p className="mt-1 text-sm text-white/90">
                Use the details below to complete your registration payment.
              </p>
            </div>

            <div className="p-8 sm:p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Row label="Account Name:" value="CONFERENCE SOLUTIONS" />
                  <Row label="Bank Name:" value="Axis Bank Ltd." />
                  <Row label="Account Number:" value="923020012345678" />
                </div>

                <div className="space-y-4">
                  <Row label="IFSC Code:" value="UTIB0001234" />
                  <Row label="SWIFT Code:" value="AXISINBB001" />
                  <Row label="Currency:" value="USD / MYR" />
                </div>
              </div>

              <div className="bg-[#42a1f5]/5 p-6 rounded-2xl border border-[#42a1f5]/20 flex gap-4 mt-6">
                <Info className="w-6 h-6 text-[#42a1f5] shrink-0" />
                <div className="text-sm text-slate-700 space-y-2">
                  <p className="font-extrabold text-slate-900">Important Notes:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Include IPEE-2026 and Paper ID in transfer reference.</li>
                    <li>Allow 2-3 business days for international transfers.</li>
                    <li>Upload your transaction receipt in the form below.</li>
                  </ul>
                </div>
              </div>

              
            </div>
          </div>

           */}
        </div>
      </section>

      
  < RegistrationFormSection/>

      {/* yaha registration includes bala ayega  */}
<section className="py-16 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Outer Card */}
    <div className="overflow-hidden rounded-[2rem] bg-white border border-primary/30 shadow-xl">

      {/* HEADER – EXACT SITE THEME */}
      <div className="bg-[#0799fa] px-6 py-8 text-center text-white">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white">
          Registration Includes
        </h2>
        <p className="mt-2 text-sm text-white/90">
          Benefits included with registration and important attendee guidelines
        </p>
      </div>

      {/* BODY */}
      <div className="p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT – INCLUDES */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-200">
              
              {[
                {
                  title: "Access to All Conference Sessions",
                  desc: "Including paper presentations",
                },
                {
                  title: "Conference Kit",
                  desc: "Name tag, agenda and abstract book",
                },
                {
                  title: "Refreshments",
                  desc: "Two coffee breaks and lunch on conference day",
                },
                {
                  title: "Certificate",
                  desc: "Issued by the Organizing Committee",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5">
                  <div className="mt-0.5 h-9 w-9 rounded-xl bg-[#0799fa] text-white flex items-center justify-center font-extrabold shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT – IMPORTANT NOTE */}
          <div className="rounded-2xl border border-primary/30 bg-white overflow-hidden">
            
            <div className="bg-primary/10 border-b border-primary/30 p-5">
              <h3 className="text-base font-extrabold text-slate-900">
                Important Note for Conference Attendees
              </h3>
            </div>

            <div className="p-5 sm:p-6 text-sm text-slate-700 space-y-6 leading-relaxed">

              <div>
                <p className="font-extrabold text-slate-900 mb-2">
                  For Presenters:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    First submit your research paper using the form.
                  </li>
                  <li>
                    After paper acceptance, complete this registration form to
                    finalize your participation.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-extrabold text-slate-900 mb-2">
                  For Listeners / Attendees:
                </p>
                <p>
                  If you are attending as a listener only, you may directly
                  complete this registration form.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

{/* registrtion includes ends here */}


    </div>
  );
}

/** small helper for bank details rows */
function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-2">
      <span className="text-slate-500 font-medium">{label}</span>
      <span className="text-slate-900 font-extrabold text-right">{value}</span>
    </div>
  );
}
