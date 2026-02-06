import React, { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Award Categories Accordion (Theme: #11b3d4 + white)
 * - Smooth accordion (height animation)
 * - Clean cards inside each category (like your screenshots)
 * - Mobile: 1 col, Desktop: 2 cols
 */

export default function AwardCategoriesAccordion() {
  const THEME = "#11b3d4";

  const CATEGORIES = useMemo(
    () => [
      {
        title: "Research Excellence Awards",
        items: [
          {
            name: "Best Researcher of the Year",
            desc: "Recognition for outstanding research contribution and impact.",
          },
          {
            name: "Young Researcher Award",
            desc: "Awarded to promising early-stage researchers with strong potential.",
          },
          {
            name: "Outstanding Interdisciplinary Research Award",
            desc: "Honors research that bridges disciplines to create meaningful outcomes.",
          },
          {
            name: "High Impact Publication Award",
            desc: "For publications demonstrating high citations, visibility, or real-world influence.",
          },
          {
            name: "Innovation & Patent Excellence Award",
            desc: "Recognizes innovation through patents, prototypes, and applied research.",
          },
        ],
      },
      {
        title: "Teaching & Academic Excellence Awards",
        items: [
          {
            name: "Best Teacher of the Year",
            desc: "Honors exceptional teaching excellence and student outcomes.",
          },
          {
            name: "Excellence in Innovative Teaching Practices",
            desc: "Recognizes new pedagogy and classroom innovation.",
          },
          {
            name: "Digital & Online Education Excellence Award",
            desc: "For excellence in online learning delivery and digital instruction quality.",
          },
          {
            name: "Curriculum Design & Development Award",
            desc: "Recognizes impactful curriculum design aligned with future skills.",
          },
          {
            name: "Student Mentorship Excellence Award",
            desc: "Honors strong mentorship supporting student growth and success.",
          },
        ],
      },
      {
        title: "Student Achievement Awards",
        items: [
          {
            name: "Best Student Research Paper Award",
            desc: "For outstanding research paper authored by a student.",
          },
          {
            name: "Best PhD / Doctoral Thesis Award",
            desc: "Honors impactful doctoral research and thesis contribution.",
          },
          {
            name: "Best Master’s Dissertation Award",
            desc: "Recognizes excellent master’s level dissertation work.",
          },
          {
            name: "Emerging Scholar Award",
            desc: "For high-potential students demonstrating research leadership.",
          },
          {
            name: "Academic Excellence Award (Student Category)",
            desc: "Honors consistent academic performance and achievements.",
          },
        ],
      },
      {
        title: "Institutional & Leadership Excellence Awards",
        items: [
          {
            name: "Outstanding Academic Leader Award",
            desc: "Recognizes exceptional academic leadership and institutional impact.",
          },
          {
            name: "Best Research Institution / University Award",
            desc: "For institutions with strong research output and ecosystem.",
          },
          {
            name: "Excellence in Research Management Award",
            desc: "Honors effective research governance and execution.",
          },
          {
            name: "Industry–Academia Collaboration Award",
            desc: "Recognizes partnerships translating research into real outcomes.",
          },
          {
            name: "Global Academic Leadership Award",
            desc: "Honors leadership with global academic influence and reach.",
          },
        ],
      },
      {
        title: "Social Impact & Professional Contribution Awards",
        items: [
          {
            name: "Research with Social Impact Award",
            desc: "Honors research creating measurable benefits for society.",
          },
          {
            name: "Excellence in Sustainable & Education Action Award",
            desc: "Recognizes sustainability-driven education initiatives and impact.",
          },
          {
            name: "Ethics & Integrity in Research Award",
            desc: "Honors ethical research practices and integrity leadership.",
          },
          {
            name: "Community Engagement & Outreach Award",
            desc: "For programs connecting academia with community development.",
          },
          {
            name: "Lifetime Achievement in Research & Education",
            desc: "Honors long-term, high-impact contributions across the field.",
          },
        ],
      },
      {
        title: "Technology & Digital Transformation Awards",
        items: [
          {
            name: "Excellence in Educational Technology (EdTech)",
            desc: "Recognizes outstanding EdTech innovation and adoption.",
          },
          {
            name: "AI & Data Science Research Excellence Award",
            desc: "Honors impactful research in AI, ML, and data science.",
          },
          {
            name: "Cybersecurity & Information Systems Research Award",
            desc: "Recognizes contributions to cybersecurity and information systems.",
          },
          {
            name: "Smart Learning Systems Innovation Award",
            desc: "For smart learning platforms and next-gen learning systems.",
          },
          {
            name: "Digital Transformation in Education Award",
            desc: "Honors institutions driving digital transformation at scale.",
          },
        ],
      },
      {
        title: "International Collaboration & Global Impact Awards",
        items: [
          {
            name: "International Research Collaboration Award",
            desc: "Recognizes impactful research done through global collaborations.",
          },
          {
            name: "Global Academic Partnership Excellence Award",
            desc: "Honors high-value academic partnerships across countries.",
          },
          {
            name: "Cross-Border Research Impact Award",
            desc: "For research delivering outcomes across borders and regions.",
          },
          {
            name: "Visiting Scholar / Professor Excellence Award",
            desc: "Recognizes excellence of visiting scholars/professors and contribution.",
          },
          {
            name: "Global Research Leadership Award",
            desc: "Honors leadership shaping global research direction and quality.",
          },
        ],
      },
      {
        title: "Diversity, Inclusion & Capacity Building Awards",
        items: [
          {
            name: "Diversity & Inclusion Excellence Award",
            desc: "Recognizes initiatives that advance diversity and inclusion.",
          },
          {
            name: "Women Leadership in Research Award",
            desc: "Honors women driving impact through research and leadership.",
          },
          {
            name: "Capacity Building & Training Excellence Award",
            desc: "For programs strengthening skills, training, and research capacity.",
          },
          {
            name: "Inclusive Education Innovation Award",
            desc: "Recognizes inclusive education models and accessibility improvements.",
          },
          {
            name: "Equity & Access in Education Award",
            desc: "Honors efforts improving equity and access for learners.",
          },
        ],
      },
      {
        title: "Women in Research & Education Excellence Award (Special)",
        items: [
          {
            name: "Women Research Excellence Award",
            desc: "Special recognition for outstanding women researchers and educators.",
          },
          {
            name: "Women Mentorship & Guidance Award",
            desc: "Honors mentorship that empowers future women leaders in academia.",
          },
          {
            name: "Women Innovation & Impact Award",
            desc: "Recognizes innovation, impact, and leadership by women professionals.",
          },
        ],
      },
      {
        title: "Research & Education Award Categories (Overview)",
        items: [
          {
            name: "Academic Excellence & Leadership",
            desc: "Awards aligned with academic leadership and excellence across levels.",
          },
          {
            name: "Innovation, Patents & Publications",
            desc: "Recognizing innovative outputs including patents and publications.",
          },
          {
            name: "Institutional & Global Collaboration",
            desc: "Celebrating institutional performance and international partnerships.",
          },
          {
            name: "Social Impact & Community Contribution",
            desc: "Honoring meaningful social impact and outreach work.",
          },
        ],
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-extrabold"
            style={{ color: THEME }}
          >
            Award Categories
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Explore the categories and select the most relevant award for nomination.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {CATEGORIES.map((cat, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={cat.title}
                className="rounded-2xl border shadow-sm overflow-hidden"
                style={{
                  borderColor: isOpen ? `${THEME}55` : "#e2e8f0",
                  boxShadow: isOpen
                    ? "0 14px 40px rgba(17,179,212,0.12)"
                    : "0 6px 18px rgba(2,6,23,0.06)",
                }}
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left bg-white"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: THEME }}
                    />
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                      {cat.title}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: THEME }}
                  />
                </button>

                {/* Body (smooth) */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="px-5 sm:px-6 pb-6 pt-1"
                      style={{ backgroundColor: `${THEME}10` }}
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        {cat.items.map((it) => (
                          <div
                            key={it.name}
                            className="rounded-2xl bg-white border border-white/40 p-4 sm:p-5 shadow-sm"
                            style={{
                              boxShadow: "0 10px 20px rgba(2,6,23,0.06)",
                            }}
                          >
                            <p
                              className="font-extrabold text-sm sm:text-base"
                              style={{ color: THEME }}
                            >
                              {it.name}
                            </p>
                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                              {it.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* footer hint */}
                      <div className="mt-5 text-xs text-slate-500">
                        Tip: Choose the category that best matches your achievements and impact.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
