"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function EventsSidebar() {
  const events = [
    {
      id: 1,
      title: "Weekend 9-hole tournament",
      time: "10:00",
      attendees: [
        { name: "Alex", initials: "A" },
        { name: "Jordan", initials: "J" },
        { name: "Casey", initials: "C" },
      ],
    },
    {
      id: 2,
      title: "Evening golf lounge",
      time: "06:30",
      attendees: [
        { name: "Morgan", initials: "M" },
        { name: "Riley", initials: "R" },
      ],
    },
  ]

  return (
    <div className="w-full lg:w-80 bg-white/10 backdrop-blur-lg border-l border-white/20 p-6 overflow-y-auto hidden lg:block rounded-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div>
          <p className="text-white/60 text-sm">Todays events</p>
          <p className="text-white text-2xl font-bold">2</p>
        </div>
        <button className="w-full md:w-auto px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full border border-white/20 transition">
          + Join next event
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-white/60 text-xs font-medium">{event.time}</p>
                <p className="text-white text-sm font-semibold mt-1">{event.title}</p>
              </div>
            </div>

            {/* Attendees */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {event.attendees.map((attendee, idx) => (
                  <Avatar key={idx} className="w-6 h-6 border border-white/20">
                    <AvatarImage src={`/diverse-avatars.png?height=24&width=24&query=avatar+${attendee.initials}`} />
                    <AvatarFallback className="bg-white/20 text-white text-xs">{attendee.initials}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-white/60 text-xs">+{event.attendees.length} attending</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 px-4 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition">
        Register
      </button>
    </div>
  )
}
