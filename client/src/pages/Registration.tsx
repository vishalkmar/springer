import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Check } from "lucide-react";

export default function Registration() {
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

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Registration" centered subtitle="Early Bird Deadline: May 10, 2026" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {plans.map((plan, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="p-6 bg-gray-50 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-2 min-h-[56px]">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">{plan.earlyBird}</span>
                  <span className="text-sm text-gray-500 line-through">{plan.price}</span>
                </div>
                <p className="text-xs text-[hsl(var(--accent))] font-semibold mt-1">Early Bird Rate</p>
              </div>
              
              <div className="p-6 flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <Button className="w-full">Register Now</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Payment Information</h3>
          <p className="text-gray-600 mb-6">
            We accept credit card (Visa, Mastercard, Amex) and bank transfers. 
            For bank transfer details, please proceed to the registration page or contact the finance chair.
          </p>
          <div className="flex justify-center gap-4">
            <span className="px-3 py-1 bg-white rounded border border-gray-200 text-xs font-bold text-gray-500">VISA</span>
            <span className="px-3 py-1 bg-white rounded border border-gray-200 text-xs font-bold text-gray-500">Mastercard</span>
            <span className="px-3 py-1 bg-white rounded border border-gray-200 text-xs font-bold text-gray-500">PayPal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
