import SessionChairsSection from "../components/SessionChairsCards";

export default function LeadershipCommittee(){
   
      return(<>
      
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
                Conference Leadership 
              </p>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight uppercase text-white">
                Conference Leadership 
              </h1>

            </div>



           <div className="mt-8 text-center">
              <p className="text-lg sm:text-xl font-extrabold">
                2-3 July 2026
              </p>
            </div>

            {/* Address */}
            <div className="mt-2 text-center">
              <p className="text-lg sm:text-xl font-extrabold">
                India International Centre, Lodhi, New Delhi-110003
              </p>
              <div className="mx-auto mt-3 h-[3px] w-56 sm:w-80 rounded-full bg-white/55" />
            </div>

            
          </div>
        </section>


        <SessionChairsSection
                chairs={[
                  {
                    name: "Prof. Deepali Virmani",
                    headline: "GGSIP University, India",
                    image: "/session chairs/deepali.jpg",
                    profileUrl: "https://www.linkedin.com/in/dr-deepali-virmani-b8785912/",
                  },
                  {
                    name: "Dr. Valentina Emilia Balas",
                    headline: "Aurel Vlaicu University, Romania",
                    image: "/session chairs/valintina.jpg",
                    profileUrl: "https://www.linkedin.com/in/vabalas/",
                  },
                  {
                    name: "Prof. Meena Jha",
                    headline: "Aurel Vlaicu University, Romania",
                    image: "/session chairs/meenaja.jpg",
                    profileUrl: "https://www.linkedin.com/in/dr-meena-jha-99793615a/",
                  },
                  {
                    name: "Yu-Chen Hu",
                    headline: "Tunghai University, Taiwan ",
        
                    image: "/session chairs/chen yu.jpg",
                    profileUrl: "https://www.linkedin.com/in/yu-chen-hu-a9725320/",
                  },
                  {
                    name: "Dr. Korhan Cengiz",
                    headline: "Biruni University, Türkiye",
        
                    image: "/session chairs/dr kor.jpg",
                    profileUrl: "https://www.linkedin.com/in/dr-korhan-cengiz-684685168/",
                  },
        
                  {
                    name: "Dr. Ahmed Elngar",
                    headline: "Beni-suef University, Egypt",
        
                    image: "/session chairs/dr ahmad.jpg",
                    profileUrl: "https://www.linkedin.com/in/dr-ahmed-elngar-9840623b/",
                  },
        
                  {
                    name: "Prof. Oscar Castillo",
                    headline: "Instituto Tecnológico de Tijuana, Mexico",
                    image: "/session chairs/oscar.jpg",
                    profileUrl: "https://www.linkedin.com/in/oscar-castillo-b625aab5/",
                  },
                ]}
              />
        

      </>)
}


