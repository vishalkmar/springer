import { motion } from "framer-motion";
import { Calendar, MapPin, FileText, Users, Award, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import VenueCard from "./Venue";
import AboutConferenceSection from "../components/AboutConference";
import Contact from "./Contact";
import SessionChairsSection from "../components/SessionChairsCards";

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash image: Modern city power grid / technology */}
          <img
            src="https://www.uscybersecurity.net/wp-content/uploads/2018/06/Conference-pic.jpg"
            alt="Power Lines Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#42a1f5]/90 to-[#42a1f5]/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="uppercase tracking-widest text-sm font-semibold"></span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight text-white mb-6 drop-shadow-lg">
              International Conference on Smart Cyber-Physical <br className="hidden md:block" />
              <span className="text-[hsl(var(--accent))]">Systems and Intelligent Analytics
              </span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-lg md:text-xl font-light mb-10">
              <div className="flex items-center gap-2">
                <MapPin className="text-[hsl(var(--accent))]" />
                <span>India International Centre, Lodhi Estate, New Delhi, India</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <Calendar className="text-[hsl(var(--accent))]" />
                <span>2–3 July 2026</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registration">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Register Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-[#0088d1] hover:text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK LINKS BANNER */}
      <div className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 border-x border-slate-200">
            {[
              { label: "Submission", icon: FileText, href: "/submission" },
              { label: "Registration", icon: Users, href: "/registration" },
              { label: "Program", icon: Calendar, href: "/program" },
              { label: "Venue", icon: MapPin, href: "/program/venue" },
            ].map((item, idx) => (
              <Link key={idx} href={item.href}>
                <div className="group flex cursor-pointer flex-col items-center justify-center py-8 px-4 transition-all duration-300 hover:bg-[#42a1f5]/5">

                  {/* Icon */}
                  <item.icon
                    className="mb-3 h-9 w-9 text-[#42a1f5] transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Label */}
                  <span className="text-sm font-semibold tracking-wide text-slate-800 transition-colors duration-300 group-hover:text-[#42a1f5]">
                    {item.label}
                  </span>

                  {/* Accent underline */}
                  <span className="mt-2 h-0.5 w-8 rounded-full bg-transparent transition-all duration-300 group-hover:bg-[#42a1f5]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>




      <AboutConferenceSection />


      <SessionChairsSection
        chairs={[
          {
            name: "Yu-Chen Hu",
            headline: "Distinguished Professor at Tunghai University, Taiwan | Top 2% Scientist | Journal Editors | Senior Member of IEEE",


            image: "data:image/webp;base64,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",
            profileUrl: "https://www.linkedin.com/in/yu-chen-hu-a9725320/",
          },
          {
            name: "Dr. Korhan Cengiz",
            headline: "World Top 2% Scientist / Associate Editor, IEEE Transactions on Intelligent Transportation Systems / Associate Editor, IEEE IoT Journal / Associate Research Professor, PMU, KSA / Associate Professor, Biruni University",


            image: "data:image/webp;base64,UklGRsYQAABXRUJQVlA4ILoQAABQiwCdASo4ATgBPuFqrFIopak3JbJLWuAcCWduiIZk9X/XyQuOHiifv7T8U4os+K08X4Iv3jfYGMkUr2vZI4ZUVJSM7V+KuE/cn10h0K1gs6THkMxmzv6wllPHQthhCc6qLWJK2nMGvRkdTTyBv4Et/xAYbIQvBzqrGPlt2n1m7GHUYVZLoiGUJcjkFJP/01OL9wYk5KDwY/RkGBZKKZ/5w168APFqp38jkuNDN/9+0lw7Z9nIBwiSdiCx655oJ3b8hNgUFm65mVB1OXj47OSs5sfKIziyvBm3FOtoHx6szvxGIU9tiF8EaesElRlVpECyc0r/KdDOH8RqueA24sQAZk/1CFkhxfxPR/rP8pHS0Aj6TXSjhbYRC6tkD4I7TvYiLPFFhI78o4Yiyq/hlv993PWSgmLHcADkaXTT0X3/ii2D6b6vflDckENHuzZJP5nF1bnk1D6/IgZltGC3M70ynvepOQWxNmigyg8vtpvfH+sJufL8x99v9b0rMMaRtpTPsSigF4t440C6xpRVYYMtdy65h6/CfCI7+OZWt676sCBjVxjT1LIW0YFr61wId3lWixeilAXfBCvCFOSANQ2iCM5efAnauzdQrZe8OIqaHi4qGv9OkfRuNNCbs5X7/YOLoOnVJsjVqr8j5DxnaeOlhiRqTaRQGe56vaUZna1gB2Lsav3HqUok9v4kF1BKcncFbN/JTJ5hsygWd95cNAJfDN3R2o+xgb8UJoyt4MkhoFw/u4tkjcrO+q4pKqWGLbEN/i/mx6BmeT73Cd4zAP9H1/OW9FNma7k4wqEq15cURnGPVOYwhVqUh0ygyzJA/DQdnT1FAYOuL/c24GLWbkMVdadGhjUVVG0Cih2kLlpCkM0nU+AfcttLPbRC/eVch9A2G8iQsDFirlFy+jhsfMa/fRYzlYtaqfDbwAvWfUXaCZxgxKHBUfmOHAtD0Sqk3Exz7apd5UEBdEN9ZyFQqJK+xH/imikHHOHiwQTCbw1obHL1ccm6mp7SeW7EMsHsWfYyemE78scIgQw1yjtF2F7yIhS+l66kWOHgBNw401rmUvkh2KnndMDbyJoPbOwzWBmcj9/DAIOp653h9IiLGwW1KRWdgcXzXSLkB8nfe4IQHkacXgd2uxUKsJsOHEYT6TOiMkOET2q/Jax0A8PoTSy8YNKN9udAKUDIgRJ6RUpW2+kIfW3K6PWrvFHT5ZIZzmEfc4AYZfYc+TdKPZskwzU3GfPwSu5M6aEj+NPt6RMmdNxQzBlPqAlhsUg+/vrWKwKXecsHn2t52RQhayiyHJ9dbg2Tk/8gvyv8VoBFxqa2W024Z4ULBvwj6HiAtjdgfk7g+fNcXxLyNtTWxDP2E6pBOb2KwgkvPaFYG6/0k49H+w6T+VeH+CA2v+q+tqxPoGNCHvRP1LKBWbokZTXpJbJUStJxjiozxkP2xbMQfFB3lAIWyXAWQfP51eGXAWRQWOxyZxdza/KLMJ+Bb6I+zzut3IAAAP7t29n5fxeqEwcDe4ptJrimCluONpYic2EhubdSpZd+RGT6h/+h64DvJPa6P+ajuoOhiVZS5VPyaTrbZ+kHieI+Xv3utFNCBPK0rfRtRm3Ak4D3tWNw37ptYOe3+6LDIaQD4ITXv+LFvMdZ24oZDea3XLdSEaE2VXbvTVBRuznvXFPfPqerXeveCCECQ285TWECK5pmVWjIVGdzRzDMNq9DEeXO180vZlHES0OH9RfgSDcn94nrcIVto/a09ZzHpxOjejG/xCaRGC2jP0NbJg4RS+klK62YKJgxTxx7To1vUkzJaWL6Z0g5JVgpBFlR2x/PBJkPk7aC5TF9UiZDCgyfuSCsZbeKzVPcfg5vcGeya5MdnJVDlGwhIN+9OqMddEsIjFN5JaO9tHliKTg01WOLGTt77eyfepFN6Ujkp48FO6axox+6xKE0DrPrBCtYiH4UBhHSvGlKLObXUdl1ddghJYoTKLNFn+j7aanj6NVSRTJUsn9JtgJ/gOyG8Bz1lACtybIgwdCUw6iZskaZSEUkVofo1wcI4xmWUJzQboBtykl+ubP71FICLj4N4ztipgBNkUxq/kWqpVKvb+v8Hu0nXk/awqa0FwUEWrHg5sONDJvgNzy2m8B+3INiNq5IDd6r+GS3NANvcXKdMPpMUHtfCEy10WbmA/FOCmhz88JDG/zonGIlkrJnIbPDXrIxqjPSWxyQRaFfj93bO5aryptPx6sU2V6bhnL9A0yieUWFpHPUgVzYPLIxQ8TileWKvAmQRk0TH+UTfiCp+Vfe33nw+7Q7sufUMq7qIgdTH1O0tw8Gcolq3/0xwHd4DYqEAWVqQzFz9T4x0SI85CNPUMErnfKE6BFZSb7yCsS1sQyMJEAza9ByyZWa034uaaABYCcPlL0ZrvagONT4LBPdm/Dvdf7zSrNqx5J4GPFKPqDaHtAC9zlqQAxvWURJZ30G5gWXdceeXQ1bWw3rHMsLjslNqIDMYRCp0xJt+VYRxVBOeSzW6j8xiq/ReRPJqZjOx87rHhJdcWAZ4/uiFds2kCAwRY7xcEw64MLqA4roZqrwUPibiOpiznCT3tnS56ZUYQcViopkKcX1iy0HGideJn3HmRvDpdb64jMkuNVPiegd0jrKk+5S+N5b5/P85hQZFkWs+x7GiA7e37vUGk4dSVje8boXexLAOBqw/gkitJEAtsGMiOHAIyWyQTq54YEWWcPKsPBVmrbVf5qmg2L3iOFQqllRNxLepo8iTu7cktM9YGN8Vh4sDSZWQO67h/rPNf12niW2SRLQOu52PilP9ivpOhQ2AI7lL1qlFPtTVBmYFJYU+c5nEEzYJJajqwelzF8yU0kYJ2JjjyEcUryXy4j+C+1CENm4bbPlqfxhiQNuYp42O/+qC8RgiDDGkSP1tyzrCwG/hUb2pQp39AmPFs5bpROr6KCNO78MIpFAJHGRandwsoNmfhblFVeBjtLLI+yYJZKoY2vG5lC3qEDo75RFl3jLbp0akTJWRwaUpQPvpKuKzWY3hoIZGusllcUyqBE7Xfbq2SpGCG9iJ4aoVBs4QNajx8+gUsyprVdvbQKdhtr1STtxsRIaUt1vu9DQXIaBQPGqUjuaDCLCsEv9V7VNG639U2rjG+RMWaMXvIfMnYBlyehaKA8rOgsKgKfB4VMscNCBrhSP5EqtVH80gNFuvo8G+bc4uinj9PbQZ80hFRmOyMZHqHhXs3zKGz4BGchkNptsA5Lev5kmKK97GPgPkvnuDCQ1Eu95NAZho0bBT0FUvQ52gUEJ7fHsd+2BeXcVIK7BIfofUA2lRs2Xtepx6a3smXy2swG61BU43gtWWOVRaAWjVuJ53iubQAj/21Xn8TWE7B3/POEfpNTBiXB62HpsoCVyTr1TbvwdZiLvNOQSXf/ctLz2d9n3p37AL7XG2LuDh2qWIhwWItid26bN7mxXuP9ZD74LEyzUtconWg4XCJWUlrDWitiq7lQlPrBwcUSlfxgd7NHh2AgxpDzTxnFU9t3thQyMc8sC+4/ckLPsfrhYA+iD2NyNemY9Zb1zfveVrxuT4E2OLSXnGoGnhkKUln7XQWAWoYrdGcMPW/FU28hEecjTCYJdjMaW1CR5f2aeb8NgmKiiEubUQD2ikxOEHV7oMTaSe15wqQay9zDyX64WM4rzFSFR5qgIAKnbs2FbUYCB5EvvOAEiyMZz+MSiNrleayKxVx2BJJnGNRiLW/JopI9+0iLarGbo07A7c7t0MwlmfmZnAwFDQgNvVL7E065rBSl04fkseZqmJqHBNaFSRrxgnOoOEpLbYm3EHcjZ8Y8YYrT8czAs0iYK9bgkMALedCliZxq1Jy4wguieDqWOxnFsWDcgW1KMRxNJtpuQC6OkNSq+RwOvoY5y1qD4bJDX0Ht8sqHxwZh821RMTPUPEsMldSwKxXE/hhvNjqwyXaqtg2s9iPjMnZn0b4YZHzkRXwFLj1z8CcQWCYDJf8cmpYkqER7FJvnkUsiM9nganRnE8VcxUCB4eLEffX+lsCvtr/fYG70E4G6KhIIGrOUqjNv6bISyB5h2svzqL1vKFu+89mZL1RyIq3CWSSdXMiH6tZyEW9/xwpfgIvtexwP4OYG3oSsWeDUWqhT3bEjt4zf3Rox+3bVzwBIf6JB5yzt3izkRLomyKca9l9zwLgxlTqKw8TMPmH9VB3UuKPIqMSHFgXhv85MNq0cHyrHPpUVgd8IGpC23GmI+Scan4BJrFC7FHqjp42KVQxxEO2UzrBcuo4l68jNpoep4oVgB0dB0bdQP6nKeQQ3hpyo91HHDIQQFJKU5fMrJvG79PX0WwjLdEt0CHIr8zm5GMzzOEZfIv7cvJ+sKekUgvcx60EAOuwJ4XsYouXOL7xwfPKSIGA8XVcQuVoiVIrY85ONgkBELxlph8VUKPqbooPOEfQ63S8RnDHoukbCIr6+modMsmT0mmODXUbLy5Lsem9f/xZMO2HTfZFCGg292L1NhJyVtVppKk6NzIgxBmiXiz2LLzkiAg8lFfwYGvz1QEfZ6WDWGFQifh3DfAIsFBN2qrI5/v86p6xMu5dOM4LWQM4QIF/1Kvp6yS8OO0aqv8sCCewbZp4n7ZBmXIwOup7+nv23AdOT3QRjbETr80rdKOWqYOcSSAK3T+BFvMh7aGyVXnEuOepbwT4LlgJ0i9NGJpCGgeUAJzNQ48++olRiRIS+iwlEFvuBy9DjB+VXilBmJMX8Ad9TOcZGAdziBxIeO0P4oC3Hw0xt5sW0mRp2CFIKu8REqFEkjb6n0x9X+BEo5aIqvuUa7gfaXmihDHu7vCFJnPq0/FReq+kbAFSIe/h/S5IWun97PxYh3sQNU9PWjga2UzHaXNoAZYo4CqIanDUi9tkz8PIgCEqC/YG7Adp8VP9lJl9IKAetVWb5W7NPkmdvY92tqdIymKLGA0BOAK52EVCSgBg9Zem5vnrAbVJ4Dn7DIX3Ele0Zb10vbjY+59Npgj0JGDbBs9OGDFhn1eoEiZ5ylM5boHFhVTDmRvZJLMkM7eaxGITjwYSYnR83gIr1zA+GLw/hDnVHja1jazrXu8m3v4QYnjZ+0lq+gsPcC1WB7DCnh8ESdS0R3t0Nbrc0G3Tpoly47HeLLaaQGPh3G2XEDE17jKTImiQXfYv7uJHbFIAgwsHk1CgZJAqCVX8aWZB5uZSqLRTEifV33guxizsHhsy6glbX8tIXqcPGuYd2H/mxLJjsnHz9gkUmjZctB/0jM73K5MTOo2Jz/uteatn2BlPp+gyxTzqm+4oGFGkCgLSnaGwEYEh6fKI5PpuC5TSbfjW/qjCJpiLuvkvIQIUJqFEZQ4BWgg5VrywXmy+q9jo7Btiz20Q//VN5fBpcTnFTdmQ+KeFqQyYTOo5PWq+qyGnFQ0wkyLkzrMBC/srJtVFJFGJOKq5dOIDWRiJWE2cMFjt9tX3OJ6F+J6lOv8lU9KwgDp/GXO5VcNC1GEVRv/y49QtiGR+04BCUokF80EHwe1eZj9z27IJjZn6/Idr3cC54AJKYAtg/ePpgWuKvO4vywHR7UgGm6OR7zPDiaiVgARMEG8hsUmSVX4YlWS1UJx+Lr4G7q4pMeVOA+at5lloj+6smU5lZmoFKxweOAZl7mfLl3JkkMEfp+xB3oMlCOFQYrBDbhzfAM+hQ38wLikC1kSkcg7pTdIB4xvZRTFEdYqEQdXReQus2kgAAA",

            profileUrl: "https://www.linkedin.com/in/dr-korhan-cengiz-684685168/",
          },
          {
            name: "Dr. Ahmed Elngar",
            headline: "Associate Professor and Head of Computer Science dep at FCAI , Beni-Suef University",


            image: "/session chairs/dr ahmad.jpg",
            profileUrl: "https://www.linkedin.com/in/dr-ahmed-elngar-9840623b/",
          },
        ]}
      />




      {/* TRACKS SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Conference Tracks"
            centered
            subtitle="We invite submissions in the following areas"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                id: 1,
                title: "Cyber-Physical & Smart Systems",
                desc: "Integration of computation, communication, and physical processes.",
                points: [
                  "Smart cities, grids, and cyber-physical infrastructures",
                  "IoT/IIoT architectures and edge–cloud systems",
                  "Security, safety, and resilient CPS design",
                ],
              },
              {
                id: 2,
                title: "AI & Machine Learning for Systems",
                desc: "Intelligent algorithms for adaptive and autonomous systems.",
                points: [
                  "Deep learning and reinforcement learning",
                  "Decision-making and system optimization",
                  "Explainable and trustworthy AI",
                ],
              },
              {
                id: 3,
                title: "Intelligent Analytics & Data-Driven Modeling",
                desc: "Data-centric approaches for prediction and monitoring.",
                points: [
                  "Digital twins and hybrid modeling",
                  "Time-series analytics and anomaly detection",
                  "Predictive maintenance techniques",
                ],
              },
              {
                id: 4,
                title: "Control, Automation & Robotics",
                desc: "Advanced control strategies and robotic applications.",
                points: [
                  "Adaptive and optimal control systems",
                  "Robotics, drones, and autonomous agents",
                  "Industrial automation and smart manufacturing",
                ],
              },
              {
                id: 5,
                title: "Energy, Transportation & Infrastructure Systems",
                desc: "Sustainable and intelligent large-scale systems.",
                points: [
                  "Smart energy systems and microgrids",
                  "Intelligent transportation systems",
                  "Critical infrastructure monitoring",
                ],
              },
              {
                id: 6,
                title: "Interdisciplinary & Emerging Applications",
                desc: "Cross-domain and future-oriented CPS research.",
                points: [
                  "Healthcare and biomedical systems",
                  "Aerospace and mission-critical systems",
                  "Emerging technologies and applications",
                ],
              },
            ].map((track) => (
              <motion.div
                key={track.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#42a1f5]/10 text-[#42a1f5] flex items-center justify-center font-semibold">
                    {track.id}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {track.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {track.desc}
                    </p>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-2 text-sm text-slate-700">
                  {track.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#42a1f5] mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/cfp">
              <Button
                variant="outline"
                className="border-[#42a1f5]/40 text-[#1eb2fc] hover:bg-[#42a1f5]/10"
              >
                View All Topics
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      {/* <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"> */}

          {/* Heading */}
          {/* <section className="py-12 bg-white text-center border-t border-slate-200">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1eb2fc]">Technical Sponsors & Partner </h2>

          </section> */}


          {/* <div className="flex flex-wrap justify-center gap-8">
            {["IEEE", "PES", "University of Science", "Engineering Inst"].map(
              (name, i) => (
                <div
                  key={i}
                  className="group w-[160px] rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-[#42a1f5]/40"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#42a1f5]/10 text-[#42a1f5] ring-1 ring-[#42a1f5]/20 transition-all duration-300 group-hover:bg-[#42a1f5] group-hover:text-white">
                    <span className="text-xl font-bold">
                      {name[0]}
                    </span>
                  </div>


                  <p className="mt-4 text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-slate-900">
                    {name}
                  </p>
                </div>
              )
            )}
          </div> */}
        {/* </div>
      </section> */}

      {/* Venue Section Heading */}
      <section className="py-12 bg-white text-center border-t border-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1eb2fc]">Conference Venue</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Discover the location and facilities of ICSCPSIA 2026 </p>
      </section>

      <VenueCard />

      {/* Contact Section Heading */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1eb2fc]">Contact Us</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Get in touch with our team for any inquiries or assistance</p>
      </section>

      <Contact />
    </div>
  );
}
