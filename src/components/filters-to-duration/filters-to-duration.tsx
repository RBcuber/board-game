import { useFilters } from "@/hooks/useFilters";
import { DetaliesGame } from "@/types/DetalisGame";
import { useState, useEffect } from "react";

export default function FiltersToDuration() {
  const [duration, setDuration] = useState<DetaliesGame[]>([]);
  const { filters, setFilters } = useFilters();
  async function getCategories() {
    const res = await fetch("/api/game-details");
    const data = await res.json();
    setDuration(data);
  }
const uniquePlayers = duration
  .reduce<DetaliesGame[]>((acc, item) => {
    const durationMin = item.durationMin;
    if (!acc.some((g) => g.durationMin === durationMin)) acc.push(item);
    return acc;
  }, [])
  .sort((a, b) =>( a.durationMin ?? 0) - (b.durationMin ?? 0));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCategories();
  }, []);
  return (
    <select
      value={filters.duration}
      onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
      className="w-60 px-4 py-2 rounded-lg bg-background border border-border text-foreground/90 
             shadow-sm hover:border-pink-400 focus:border-pink-500 
             focus:ring-2 focus:ring-pink-500/30 outline-none 
             transition-all duration-200 ease-in-out cursor-pointer"
    >
      <option value="">Duration</option>
      {uniquePlayers.map((p) => (
      <option key={p.id} value={p.durationMin ?? 0}> до {p.durationMin} минут</option>
      ))}
    </select>
  );
}
