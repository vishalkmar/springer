import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useLocation } from "wouter";
import { User, Mail, Briefcase, GraduationCap } from "lucide-react";
import KeynoteSpeakersSection from "../components/KeynoteSpeaker";

export default function Speakers() {
  const [location] = useLocation();
  const isInvited = location.includes("invited");
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const speakers = [
    {
      name: "Prof. Alan Turing",
      title: "Keynote Speaker",
      designation: "Chair Professor of Artificial Intelligence",
      affiliation: "Cambridge University, UK",
      bio: "Alan Turing was an English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general-purpose computer.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
      topic: "The Future of Computational Intelligence in Power Systems"
    },
    {
      name: "Dr. Marie Curie",
      title: "Keynote Speaker",
      designation: "Director of Radiological Research",
      affiliation: "University of Paris, France",
      bio: "Marie Skłodowska Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two different scientific fields.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
      topic: "Novel Radioactive Materials for Sustainable Energy Storage"
    },
    {
      name: "Prof. Nikola Tesla",
      title: "Invited Speaker",
      designation: "Principal Engineer",
      affiliation: "Institute of Electrical Engineers",
      bio: "Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      topic: "Wireless Power Transfer: From Concept to Global Scale"
    }
  ];

  const filteredSpeakers = isInvited
    ? speakers.filter(s => s.title === "Invited Speaker")
    : speakers.filter(s => s.title === "Keynote Speaker");

  return (
    <>
      <div className="bg-white min-h-screen">
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
                Keynote Speakers
              </p>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight uppercase text-white">
                Keynotes Spearkers To Be Announced Soon

              </h1>

            </div>



            {/* Address */}
            <div className="mt-8 text-center">
              <p className="text-lg sm:text-xl font-extrabold">
                India International Centre, Lodhi, New Delhi-110003
              </p>
              <div className="mx-auto mt-3 h-[3px] w-56 sm:w-80 rounded-full bg-white/55" />
            </div>

          </div>
        </section>


    {/* <KeynoteSpeakersSection/> */}

      </div>

      </>
      );
}
