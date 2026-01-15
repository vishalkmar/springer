import { SectionHeader } from "@/components/SectionHeader";
import { Clock, MapPin } from "lucide-react";

export default function Program() {
  const schedule = [
    {
      day: "Day 1",
      date: "July 14, 2026",
      events: [
        { time: "09:00 - 12:00", title: "Registration & Material Collection", location: "Lobby" },
        { time: "14:00 - 17:00", title: "Technical Tutorials / Workshops", location: "Room A & B" },
        { time: "18:00 - 20:00", title: "Welcome Reception", location: "Grand Ballroom" }
      ]
    },
    {
      day: "Day 2",
      date: "July 15, 2026",
      events: [
        { time: "09:00 - 09:30", title: "Opening Ceremony", location: "Grand Ballroom" },
        { time: "09:30 - 10:30", title: "Keynote Speech I", location: "Grand Ballroom" },
        { time: "10:30 - 11:00", title: "Coffee Break & Group Photo", location: "Foyer" },
        { time: "11:00 - 12:00", title: "Keynote Speech II", location: "Grand Ballroom" },
        { time: "12:00 - 13:30", title: "Lunch Break", location: "Restaurant" },
        { time: "13:30 - 18:00", title: "Parallel Sessions (Oral)", location: "Rooms 1-4" }
      ]
    },
    {
      day: "Day 3",
      date: "July 16, 2026",
      events: [
        { time: "09:00 - 10:00", title: "Invited Speeches", location: "Grand Ballroom" },
        { time: "10:00 - 12:00", title: "Parallel Sessions (Oral)", location: "Rooms 1-4" },
        { time: "12:00 - 13:30", title: "Lunch Break", location: "Restaurant" },
        { time: "13:30 - 16:00", title: "Parallel Sessions / Poster Session", location: "Exhibition Hall" },
        { time: "18:30 - 21:00", title: "Gala Dinner & Awards", location: "Grand Ballroom" }
      ]
    },
    {
      day: "Day 4",
      date: "July 17, 2026",
      events: [
        { time: "09:00 - 17:00", title: "Technical Visit / City Tour (Optional)", location: "Meet at Lobby" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Conference Program" centered subtitle="Tentative Schedule - Subject to Change" />
        
        <div className="mt-12 space-y-12">
          {schedule.map((day, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-primary text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-bold">{day.day}</h3>
                <span className="font-medium opacity-90">{day.date}</span>
              </div>
              <div className="divide-y divide-gray-100">
                {day.events.map((event, idx) => (
                  <div key={idx} className="p-4 md:p-6 hover:bg-gray-50 transition-colors grid md:grid-cols-[150px_1fr_150px] gap-4 items-center">
                    <div className="flex items-center text-primary font-bold">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="font-semibold text-gray-800">
                      {event.title}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm md:justify-end">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
