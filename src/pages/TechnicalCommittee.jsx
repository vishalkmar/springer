import React from "react";

const COL_1 = [
  "Prof. Xavier Fernando, Toronto Metropolitan University, Toronto",
  "Prof. Frank Wang, Ex Head of School of Computing, University of Kent, UK",
  "Prof. Chuan-Ming Liu, National Taipei University of Technology, Taipei, Taiwan",
  "Prof. Saraju Mohanty, University of North Texas",
  "Prof. Linga Reddy Cenkeramaddi, University of Agder, Grimstad, Norway",
  "Prof. James Swart, Central University of Technology, South Africa",
  "Dr. Veepsa Bhatia Lohit, Southern Methodist University, USA",
  "Prof. Aarti Singh, Carnegie Mellon University, Pittsburgh, Pennsylvania",
  "Dr. Prasanalakshmi Balaji, King Khalid University, Saudi Arabia",
  "Dr. S. B. Goyal, Director, City University, Petaling Jaya, Malaysia",
  "Dr. Dilbagh Singh, New York University, USA",
  "Ms. Barkha Pabra, University of the West of Scotland, UK",
  "Mr. Miguel Botto-Tobar, Researcher, Eindhoven University of Technology, Netherlands",
];

const COL_2 = [
  "Dr. Lavika Goel, MNNIT, Jaipur, India",
  "Dr. Kakali Chatterjee, NIT, Patna, India",
  "Prof. Ashok De, DTU, New Delhi, India",
  "Dr. Madhu Sharma, DIT, Dehradun, India",
  "Dr. Vineet Kumar, NSUT, New Delhi, India",
  "Prof. K. P. S. Rana, NSUT, New Delhi, India",
  "Dr. Shailendra Kumar, DTU, New Delhi, India",
  "Dr. Vijayender Singh, NSUT, New Delhi, India",
  "Prof. A. K. Mahapatra, New Delhi, India",
  "Prof. Poonam Bansal, IGDTUW, New Delhi, India",
  "Dr. Robin Singh Bhadoria, NIT Hamirpur, Himachal Pradesh, India",
  "Dr. Rizwan Khan, ABESIT, Ghaziabad, India",
  "Dr. Rohit Beniwal, DTU, New Delhi, India",
  "Dr. Kanchan Sharma, IGDTUW, New Delhi, India",
  "Dr. Sanjib Kumar Sahu, IGDTUW, New Delhi, India",
  "Dr. Sudhanshu Tyagi, Thapar University, India",
  "Dr. Madhu Sharma, DIT, Dehradun, India",
];

const COL_3 = [
  "Dr. Naresh Kumar Yadav, DCRUST, Murthal, India",
  "Prof. Narendra S. Chaudhari, IIT Indore, India",
  "Dr. Ankita Jain, NSUT, New Delhi, India",
  "Prof. Anand Nayyar, Duy Tan University, Vietnam",
  "Dr. Deepika, NSUT, New Delhi, India",
  "Dr. Pankaj Lathar, DSEU, New Delhi, India",
  "Dr. Malaaya Dutta Borah, NIT Silchar, India",
  "Dr. Amit Chaudhary, GGSIPU, New Delhi, India",
  "Dr. Manisha Bharti, NIT, New Delhi, India",
  "Dr. Rajendra Kumar, NIT Kurukshetra, India",
  "Dr. Saurabh Bhardwaj, Thapar University, India",
  "Dr. Rajit Nair, VIT Bhopal, India",
  "Dr. Tarun Rawat, NSUT, New Delhi, India",
  "Dr. Bharti Sharma, JIT, Dehradun, India",
  "Dr. Prachi Chaudhary, DCRUST, Murthal, India",
  "Dr. Deepali Gupta, Chitkara University, Rajpura, Punjab, India",
  "Mr. Rajeev Kumar, IEEE Member, USA",
];

function ListCard({ items }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-black/5 p-4 sm:p-5">
      <ul className="divide-y divide-slate-100">
        {items.map((t, i) => (
          <li key={i} className="py-3 flex gap-3">
            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0699cf] " />
            <p className="text-[13.5px] sm:text-sm leading-relaxed text-slate-700">
              {t}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechnicalCommittee() {
  return (
    <section className="w-full">
      {/* HEADER (your 2nd image vibe) */}
      <div className="relative overflow-hidden py-16 sm:py-20 bg-[#11b3d4] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/5 to-black/15" />
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/12 blur-3xl" />
          <div className="absolute -bottom-28 right-[-120px] h-[520px] w-[520px] rounded-full bg-black/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-[11px] sm:text-xs font-bold tracking-widest ring-1 ring-white/25">
              Technical Committee
            </p>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight uppercase text-white">
              Technical Programme Committee
            </h1>

            <div className="mt-8">
              <p className="text-lg sm:text-xl font-extrabold">2-3 July 2026</p>
              <p className="mt-2 text-lg sm:text-xl font-extrabold">
                India International Centre, Lodhi, New Delhi-110003
              </p>
              <div className="mx-auto mt-3 h-[3px] w-56 sm:w-80 rounded-full bg-white/55" />
            </div>
          </div>
        </div>
      </div>


      <div className="bg-slate-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#0699cf] tracking-wide">
        Technical Programme Committee Members
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[#0699cf]" />
    </div>

    {/* Existing Box */}
    <div className="rounded-3xl border border-teal-200/60 bg-white shadow-[0_10px_30px_rgba(2,132,199,0.15)] p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <ListCard items={COL_1} />
        <ListCard items={COL_2} />
        <ListCard items={COL_3} />
      </div>
    </div>

  </div>
</div>
    </section>
  );
}
