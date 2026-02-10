import React from "react";
import {
  Megaphone,
  Users,
  Lightbulb,
  Rocket,
  BadgeCheck,
  Handshake,
} from "lucide-react";

/**
 * ExhibitorsData / Sponsors + Exhibitors Section (Theme: #11b3d4)
 * - Hosted & Endorsed By (logos)
 * - Our Sponsors (logos)
 * - Why Sponsor (4 feature cards)
 * - Benefits for Sponsors (image cards + CTA)
 *
 * ✅ Just add more items in arrays (HOSTED_BY / SPONSORS / WHY / BENEFITS)
 */

export default function ExhibitorsData() {
  const THEME = "#11b3d4";

  const HOSTED_BY = [
    {
      name: "Traveon Ventures LLP",
      role: "Organizer",
      logo: "/session chairs/traveon.svg",
    },
    {
      name: "India International Centre",
      role: "Host at",
      logo: "/session chairs/indiainternational.jpg",
    },
  ];

  const SPONSORS = [
    { name: "EGS Group", role: "Sponsor", logo: "/session chairs/egs.jpg" },
  ];

  const WHY = [
    {
      icon: Megaphone,
      title: "Boost Brand Visibility",
      desc: "Showcase your brand to researchers, academicians, and industry leaders through high-visibility placements.",
    },
    {
      icon: Rocket,
      title: "Position Your Company as a Thought Leader",
      desc: "Present innovations, share insights, and build authority among a high-impact audience.",
    },
    {
      icon: Users,
      title: "Network with Key Decision-Makers",
      desc: "Connect with potential partners, clients, and collaborators during curated sessions and events.",
    },
    {
      icon: Lightbulb,
      title: "Showcase Your Latest Technologies",
      desc: "Demonstrate products, solutions, and services with direct engagement and qualified leads.",
    },
  ];

  const BENEFITS = [
    {
      title: "Logo Placement",
      desc: "Prominent branding across digital & on-site assets.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
    },
    {
      title: "Speaking Opportunities",
      desc: "Share your expertise and present to the audience.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200",
    },
    {
      title: "Exclusive Networking Events",
      desc: "Connect with key stakeholders in a curated environment.",
      image:
        "https://iccict.org/assets/img/conference_img/engage.jpg",
    },
    {
      title: "Recognition & Awards",
      desc: "Highlight your contributions and gain lasting visibility.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200",
    },
  ];

  const LogoCard = ({ item }) => (
    <div className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
      <div className="p-4 sm:p-5 flex items-center justify-center">
        <div className="h-16 sm:h-18 w-full flex items-center justify-center">
          {/* If logo missing, fallback text */}
          {item.logo ? (
            <img
              src={item.logo}
              alt={item.name}
              className="max-h-16 w-auto object-contain"
              loading="lazy"
            />
          ) : (
            <div
              className="h-14 w-full rounded-xl flex items-center justify-center font-extrabold"
              style={{ backgroundColor: `${THEME}12`, color: THEME }}
            >
              {item.name}
            </div>
          )}
        </div>
      </div>

      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-center">
        <p className="text-sm font-extrabold text-slate-900">{item.name}</p>
        <p className="text-xs text-slate-500">{item.role}</p>
      </div>

      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${THEME}, rgba(17,179,212,0))` }}
      />
    </div>
  );

  const WhyCard = ({ item }) => (
    <div className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all p-6">
      <div
        className="h-11 w-11 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: `${THEME}14`, color: THEME }}
      >
        <item.icon className="h-5 w-5" />
      </div>
      <h4 className="mt-4 font-extrabold text-slate-900">{item.title}</h4>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
    </div>
  );

  const BenefitCard = ({ item }) => (
    <div className="group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden">
      <div className="h-36 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h5 className="font-extrabold text-slate-900">{item.title}</h5>
        <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
      </div>
      <div
        className="h-1 w-full"
        style={{ backgroundColor: `${THEME}55` }}
      />
    </div>
  );

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hosted & Endorsed */}
        <div className="mb-10">
          <p className="text-sm font-extrabold text-slate-900">
            Hosted & Endorsed By:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOSTED_BY.map((x) => (
              <LogoCard key={x.name} item={x} />
            ))}
          </div>
        </div>

        {/* Sponsors */}
        <div className="mb-14">
          <p className="text-sm font-extrabold text-slate-900">Our Sponsors:</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPONSORS.map((x) => (
              <LogoCard key={x.name} item={x} />
            ))}
          </div>
        </div>

        {/* Why sponsor */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Why Sponsor the India International Research Conference
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
              Partner with us to amplify your impact, connect with decision-makers,
              and showcase innovation to a global audience.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {WHY.map((x) => (
              <WhyCard key={x.title} item={x} />
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-14">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Benefits for Sponsors
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Designed to deliver visibility, leads, partnerships, and recognition.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((x) => (
              <BenefitCard key={x.title} item={x} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/become-sponsor"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-extrabold text-white shadow-lg transition-all hover:opacity-95"
              style={{
                backgroundColor: THEME,
                boxShadow: "0 14px 30px rgba(17,179,212,0.28)",
              }}
            >
              <Handshake className="h-5 w-5" />
              BECOME A SPONSOR
              <BadgeCheck className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
