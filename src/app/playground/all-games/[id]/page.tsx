import { db } from "@/db";
import { gameDetailsTable, gameTable } from "@/db/schema";
import { eq } from "drizzle-orm";

import Image from "next/image";

export default async function GamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = Number((await params).id);

  const game = await db
    .select()
    .from(gameTable)
    .leftJoin(gameDetailsTable, eq(gameTable.id, gameDetailsTable.gameId))
    .where(eq(gameTable.id, id))
    .limit(1);

  const g = game[0]?.games;
  const d = game[0]?.game_details;

  if (!g) return <p className="text-center mt-10">Игра не найдена 😢</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-background text-foreground">
      <div className="max-w-3xl w-full rounded-xl border border-border shadow-lg p-8 bg-foreground/5">
        {g.image && (
          <Image
            src={g.image}
            alt={g.title}
            width={500}
            height={500}
            quality={70}
            priority={true}
            className="rounded-lg mb-6 object-cover mx-auto"
          />
        )}
        <h1 className="text-3xl font-bold mb-4 text-highlight text-center">
          {g.title}
        </h1>
        <p className="text-foreground/80 mb-6 text-center">{g.description}</p>

        {d && (
          <div className="grid grid-cols-2 gap-4 text-center">
            <p>
              🎮 Игроков:
              {d?.minPlayers !== d?.maxPlayers
                ? ` ${d?.minPlayers}–${d?.maxPlayers}`
                : ` ${d?.minPlayers}`}
            </p>
            <p>
              🕐 Время:{" "}
              {d?.durationMin !== d?.durationMax
                ? ` ${d?.durationMin}–${d?.durationMax}`
                : ` ${d?.durationMin}`}{" "}
              мин
            </p>
            <p>
              {" "}
              👶 От
              {d?.minAge ? ` ${d.minAge}` : null} лет
            </p>
            <p> {d?.rating ? ` ⭐ Рейтинг: ${d.rating}` : null}</p>
          </div>
        )}
      </div>
    </div>
  );
}
