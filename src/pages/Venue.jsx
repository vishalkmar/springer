import React from "react";

// import CtaSubmitPaper from "@/components/CtaSubmitPaper";

export default function VenueCard() {
  const data = {
    title: "India International\nCentre",
    date: "2–3 July 2026",
    timings: "Mon - Fri, 9:00 AM - 5:00 PM (IST)",
    location: "India International Centre, Lodhi Estate, New Delhi, India",
    mapUrl: "https://maps.google.com/?q=India%20International%20Centre%20Lodhi%20Estate%20New%20Delhi",
    imageUrl:
      "/session chairs/internationalvenue.jpg", // replace with your image if needed
  };

  return (
     <>
    <section className="w-75 bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Image Card */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="aspect-[16/10] w-full sm:aspect-[16/9] lg:aspect-[16/10]">
                <img
                  src={data.imageUrl}
                  alt="India International Centre"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="lg:col-span-4">
            <div className="h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-7">
              <h3 className="whitespace-pre-line text-2xl font-semibold leading-snug text-[#42a1f5] sm:text-3xl">
                {data.title}
              </h3>

              <div className="mt-6 space-y-4 text-slate-700">
                {/* Date */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#42a1f5]/10 text-[#42a1f5] ring-1 ring-[#42a1f5]/20">
                    {/* calendar icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3v3M16 3v3M4.5 9.5h15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 6h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Date:</p>
                    <p className="text-sm">{data.date}</p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#42a1f5]/10 text-[#42a1f5] ring-1 ring-[#42a1f5]/20">
                    {/* clock icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 6v6l4 2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Timings:
                    </p>
                    <p className="text-sm">{data.timings}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#42a1f5]/10 text-[#42a1f5] ring-1 ring-[#42a1f5]/20">
                    {/* pin icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Location:
                    </p>
                    <p className="text-sm">{data.location}</p>
                  </div>
                </div>
              </div>

                <a
                href={data.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#42a1f5] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#42a1f5]/90 focus:outline-none focus:ring-2 focus:ring-[#42a1f5] focus:ring-offset-2"
              >
                {/* map icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18 3 20V6l6-2 6 2 6-2v14l-6 2-6-2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 4v14M15 6v14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                View on Google Maps
              </a>

             
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <CtaSubmitPaper /> */}
   </>
  );
}
