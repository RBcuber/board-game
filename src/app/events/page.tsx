import { db } from "@/db";
import { events as eventsTable } from "@/db/schema";

const EventsPage = async () => {
  const events = await db.select().from(eventsTable);
  return (
    <div className="min-h-screen p-10 flex items-start justify-center from-background to-secondary/20">
      <div className="w-full max-w-4xl rounded-2xl shadow-2xl p-8 bg-foreground/5 border border-border backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8 text-center text-highlight tracking-wide">
          Upcoming Events 
        </h2>

        {events.length === 0 ? (
          <p className="text-center text-foreground/70 italic">
            Пока нет событий 😔
          </p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {events.map((e) => (
              <li
                key={e.id}
                className="group rounded-xl p-6 bg-background border border-border shadow-md 
                         hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-highlight group-hover:text-pink transition-colors duration-200">
                  {e.name}
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {e.description}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
