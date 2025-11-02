import { useFilters } from "@/hooks/useFilters";
import { DetaliesGame } from "@/types/DetalisGame";
import { useState, useEffect } from "react";

export default function FiltersToPlayers() {
  const [players, setPlayers] = useState<DetaliesGame[]>([]);
  const { filters, setFilters } = useFilters();
  async function getCategories() {
    const res = await fetch("/api/game-details");
    const data = await res.json();
    setPlayers(data);
  }
const uniquePlayers = players
  .reduce<DetaliesGame[]>((acc, item) => {
    const playersMin = item.minPlayers;
    if (!acc.some((g) => g.minPlayers === playersMin)) acc.push(item);
    return acc;
  }, [])
  .sort((a, b) => a.minPlayers - b.minPlayers);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCategories();
  }, []);
  return (
    <select
      value={filters.minPlayers}
      onChange={(e) => setFilters({ ...filters, minPlayers: e.target.value })}
      className="w-60 px-4 py-2 rounded-lg bg-background border border-border text-foreground/90 
             shadow-sm hover:border-pink-400 focus:border-pink-500 
             focus:ring-2 focus:ring-pink-500/30 outline-none 
             transition-all duration-200 ease-in-out cursor-pointer"
    >
      <option value="">Players</option>
      {uniquePlayers.map((p) => (
      <option key={p.id} value={p.minPlayers}>от {p.minPlayers} </option>
      ))}
    </select>
  );
}
