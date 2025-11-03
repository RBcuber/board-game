import { db } from "@/db";
import { events as eventsTable } from "@/db/schema";
import Link from "next/link";

const EventsPage = async () => {
  const events = await db.select().from(eventsTable);
  return (
    <div className="min-h-screen p-10 flex items-start justify-center from-background to-secondary/20">
      <div className="w-full max-w-5xl rounded-2xl shadow-2xl p-10 bg-foreground/5 border border-border backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-10 text-center text-highlight tracking-wide">
          Upcoming Events
        </h2>

        {events.length === 0 ? (
          <p className="text-center text-foreground/70 italic text-lg">
            Пока нет запланированных событий 
          </p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((e) => (
              <li
                key={e.id}
                className="group relative flex flex-col justify-between h-full 
                         bg-background/80 border border-border rounded-2xl p-6 
                         shadow-md hover:shadow-2xl hover:scale-[1.02] 
                         transition-all duration-300"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-highlight group-hover:text-pink transition-colors duration-300">
                    {e.name}
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    {e.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-foreground/70 mt-auto pt-4 border-t border-border/50">
                  <p className="flex items-center gap-2">
                    <span className="text-pink-400">📅</span>
                    {e.date
                      ? new Date(e.date).toLocaleString("de-DE", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })
                      : "Дата не указана"}
                  </p>
                  <button className="text-highlight font-medium hover:text-pink-400 transition-colors duration-200 cursor-pointer">
                    <Link href={`/events/${e.id}`}>Details</Link>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
