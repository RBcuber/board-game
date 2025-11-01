import { db } from "@/db";
import { eq } from "drizzle-orm";
import { gameTable, gameDetailsTable } from "@/db/schema";
import GameCard from "@/components/game-card/game-card";

const Games = async () => {
  const games = await db
    .select()
    .from(gameTable)
    .leftJoin(gameDetailsTable, eq(gameTable.id, gameDetailsTable.gameId));

  return (
    <div className="min-h-screen p-10 flex items-start justify-center from-background to-secondary/20">
      <div className="w-full max-w-7xl rounded-2xl shadow-2xl p-10 bg-foreground/5 border border-border backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-10 text-center text-highlight tracking-wide">
          New Games 🎲
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {games.map(({ games: g, game_details: d }) => (
            <GameCard key={g.id} g={g} d={d} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Games;
