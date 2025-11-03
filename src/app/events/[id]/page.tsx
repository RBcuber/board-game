import { db } from "@/db";
import { events } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

export default async function GamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = Number((await params).id);

  const event = await db
    .select()
    .from(events)
    .where(eq(events.id, id))
    .limit(1);

  const currentEvent = event[0];
  if (!event) return <p className="text-center mt-10">Ивент не найден</p>;

   return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-gradient-to-b from-background to-secondary/10 text-foreground">
      <div className="max-w-3xl w-full rounded-2xl border border-border shadow-2xl p-8 bg-foreground/5 backdrop-blur-sm transition-all duration-300 hover:shadow-pink-500/20">
        <h1 className="text-4xl font-bold mb-4 text-highlight tracking-wide">
          {currentEvent.name}
        </h1>

        <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
          {currentEvent.description}
        </p>

        {currentEvent.date ? (
          <p className="text-sm text-foreground/60 italic flex items-center gap-2">
            📅{" "}
            {new Date(currentEvent.date).toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            📅 Дата не указана
          </p>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/events"
            className="inline-block px-6 py-2 rounded-md border border-pink-500 text-pink-500 font-medium 
              hover:bg-pink-500 hover:text-background transition-all duration-300"
          >
            ← Назад к событиям
          </Link>
        </div>
      </div>
    </div>
  );
}
