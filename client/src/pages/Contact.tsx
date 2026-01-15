import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting IPEE 2026. We will get back to you shortly.",
      });
      const target = e.target as HTMLFormElement;
      target.reset();
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title="Contact Us" 
        subtitle="Have questions? Our team is here to help with any inquiries."
        image="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=2020"
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 font-display">Get in <span className="text-primary">Touch</span></h2>
            <p className="text-gray-500 text-lg mb-12">Whether you are a speaker, participant, or potential sponsor, we would love to hear from you. Use the contact details below or fill out the form.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Email Inquiries</h4>
                  <p className="text-primary font-medium">amy.hu@ipee.net</p>
                  <p className="text-gray-400 text-sm">Typical response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Phone Support</h4>
                  <p className="text-orange-600 font-medium">+60 4-123 4567</p>
                  <p className="text-gray-400 text-sm">Mon - Fri, 9:00 AM - 5:00 PM (MYT)</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Conference Secretariat</h4>
                  <p className="text-gray-600">Universiti Sains Malaysia, Penang, Malaysia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
             <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
               <MessageSquare className="text-primary" /> Send a Message
             </h3>
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                      <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                   <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all appearance-none">
                      <option>Registration Inquiry</option>
                      <option>Speaker Presentation</option>
                      <option>Paper Submission</option>
                      <option>Sponsorship</option>
                      <option>General Question</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Your Message</label>
                   <textarea required rows={5} placeholder="How can we help you?" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all resize-none"></textarea>
                </div>
                <button 
                  disabled={loading}
                  className="w-full py-5 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className={`w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${loading ? 'hidden' : ''}`} />
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
