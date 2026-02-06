import { PageBanner } from "@/components/PageBanner";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

const THEME = {
  primary: "#42a1f5",
};

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // keep your alert/toast logic as you use in your project
      alert("Message Sent! Thank you for contacting us. We will get back to you shortly.");
      e.target.reset();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white">
     
      <section className="relative py-20">
        {/* soft theme blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#42a1f5]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#42a1f5]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT: Contact info */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Get in <span className="text-[#42a1f5]">Touch</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
                Whether you are a speaker, participant, or potential sponsor, we would love to hear
                from you. Use the contact details below or fill out the form.
              </p>

              <div className="mt-10 space-y-7">
                {/* Email */}
                <div className="group flex items-start gap-5 rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-[#42a1f5]/35">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#42a1f5]/10 text-[#42a1f5] ring-1 ring-[#42a1f5]/15 transition-all group-hover:bg-[#42a1f5] group-hover:text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-slate-900">Email Inquiries</h4>
                    <p className="mt-1 font-medium text-[#42a1f5]">info@iccict.org</p>
                    <p className="mt-1 text-sm text-slate-500">Typical response within 24 hours</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start gap-5 rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-[#42a1f5]/35">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#42a1f5]/10 text-[#42a1f5] ring-1 ring-[#42a1f5]/15 transition-all group-hover:bg-[#42a1f5] group-hover:text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-slate-900">Phone Support</h4>
                    <p className="mt-1 font-medium text-[#42a1f5]">+60 4-123 4567</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Mon - Fri, 9:00 AM - 5:00 PM (MYT)
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="group flex items-start gap-5 rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-[#42a1f5]/35">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#42a1f5]/10 text-[#42a1f5] ring-1 ring-[#42a1f5]/15 transition-all group-hover:bg-[#42a1f5] group-hover:text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-slate-900">
                      Conference Secretariat
                    </h4>
                    <p className="mt-1 text-slate-600">
                      Universiti Sains Malaysia, Penang, Malaysia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="relative overflow-hidden rounded-[2.25rem] bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
              {/* decorative */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-[#42a1f5]/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#42a1f5]/10 blur-3xl" />

              <h3 className="relative flex items-center gap-3 text-2xl font-bold text-slate-900">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#42a1f5]/10 text-[#42a1f5] ring-1 ring-[#42a1f5]/15">
                  <MessageSquare className="h-5 w-5" />
                </span>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="relative mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all focus:border-[#42a1f5]/50 focus:bg-white focus:ring-2 focus:ring-[#42a1f5]/25"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="ml-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all focus:border-[#42a1f5]/50 focus:bg-white focus:ring-2 focus:ring-[#42a1f5]/25"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                    Subject
                  </label>
                  <select className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all focus:border-[#42a1f5]/50 focus:bg-white focus:ring-2 focus:ring-[#42a1f5]/25">
                    <option>Registration Inquiry</option>
                    <option>Speaker Presentation</option>
                    <option>Paper Submission</option>
                    <option>Sponsorship</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all focus:border-[#42a1f5]/50 focus:bg-white focus:ring-2 focus:ring-[#42a1f5]/25"
                  />
                </div>

                <button
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#42a1f5] py-5 font-semibold text-white shadow-lg shadow-[#42a1f5]/20 transition-all hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#42a1f5]/35 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send
                    className={`h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 ${
                      loading ? "hidden" : ""
                    }`}
                  />
                </button>

                <p className="text-center text-xs text-slate-500">
                  We usually respond within 24 hours on working days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
