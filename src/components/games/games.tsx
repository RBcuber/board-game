
import { useFilters } from '@/hooks/useFilters';
import { GamesFilter } from '@/types/GamesFilter';
import React, { use, useEffect, useState } from 'react'
import Filters from '../filters/filters';
import GameCard from '../game-card/game-card';

export default function Games() {
 const [games, setGames] = useState<GamesFilter[]>([]);
  const { filters } = useFilters();

  async function fetchGames(filters = {}) {
    const query = new URLSearchParams(filters).toString();
    const res = await fetch(`/api/games?${query}`, { cache: "no-store" });
    const data = await res.json();
    setGames(data);
  }

  const uniqueGames = games.reduce<GamesFilter[]>((acc, item) => {
    const gameId = item.games.id;
    if (!acc.some((g) => g.games.id === gameId)) acc.push(item);
    return acc;
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchGames(filters);
  }, [filters]);

  return (
    <div className="min-h-screen py-16 px-6 flex justify-center from-background via-secondary/10 to-background">
  <div className="w-full max-w-7xl rounded-3xl shadow-2xl p-8 sm:p-10 bg-foreground/5 border border-border backdrop-blur-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
    <div className="text-center mb-10">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-foreground/80 bg-clip-text">
        🎲 New Games
      </h2>
    </div>

    <div className="mb-8 flex justify-center">
      <Filters />
    </div>

    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
      {uniqueGames.map(({ games: g, game_details: d }) => (
        <GameCard key={g.id} g={g} d={d} />
      ))}
    </ul>

    {uniqueGames.length === 0 && (
      <div className="text-center mt-20 text-foreground/60 text-lg italic">
        Ничего не найдено
      </div>
    )}
  </div>
</div>
  );
};
