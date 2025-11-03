import { useFilters } from "@/hooks/useFilters";
import { DetaliesGame } from "@/types/DetalisGame";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function FiltersToPlayers() {
  const [players, setPlayers] = useState<DetaliesGame[]>([]);
  const { filters, setFilters } = useFilters();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  async function getCategories() {
    const res = await fetch("/api/game-details");
    const data = await res.json();
    setPlayers(data);
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const uniquePlayersMin = players
    .reduce<DetaliesGame[]>((acc, item) => {
      const playersMin = item.minPlayers;
      if (!acc.some((g) => g.minPlayers === playersMin)) acc.push(item);
      return acc;
    }, [])
    .sort((a, b) => a.minPlayers - b.minPlayers);
  const uniquePlayersMax = players
    .reduce<DetaliesGame[]>((acc, item) => {
      const playersMax = item.maxPlayers;
      if (!acc.some((g) => g.maxPlayers === playersMax)) acc.push(item);
      return acc;
    }, [])
    .sort((a, b) => a.maxPlayers - b.maxPlayers);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCategories();
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-60 px-4 py-2 rounded-lg bg-background border border-border text-foreground/90 
             shadow-sm hover:border-pink-400 focus:border-pink-500 
             focus:ring-2 focus:ring-pink-500/30 outline-none 
             transition-all duration-200 ease-in-out cursor-pointer"
      >
        Players
        <ChevronUp className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-400 pointer-events-none transition-transform duration-200" />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-60 bg-background border border-border rounded-xl shadow-lg p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <div className="relative w-24">
              <select
                value={filters.minPlayers}
                onChange={(e) =>
                  setFilters({ ...filters, minPlayers: e.target.value })
                }
                className="appearance-none w-full px-3 py-1.5 pr-8 border border-border rounded-md text-center 
                           bg-background text-foreground/90 
                           focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
              >
                <option value="">Min</option>
                {uniquePlayersMin.map((p) => (
                  <option key={p.id} value={p.minPlayers}>
                    {p.minPlayers}
                  </option>
                ))}
              </select>

              <ChevronUp className="absolute right-2 top-1/2 -translate-y-1/2 text-pink-400 pointer-events-none" />
            </div>
            <span className="mx-2 text-foreground/70">to</span>
            <div className="relative w-24">
              <select
                value={filters.maxPlayers}
                onChange={(e) =>
                  setFilters({ ...filters, maxPlayers: e.target.value })
                }
                className="appearance-none w-full px-3 py-1.5 pr-8 border border-border rounded-md text-center 
                           bg-background text-foreground/90 
                           focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
              >
                <option value="">Max</option>
                {uniquePlayersMax.map((p) => (
                  <option key={p.id} value={p.maxPlayers}>
                    {p.maxPlayers}
                  </option>
                ))}
              </select>
              <ChevronUp className="absolute right-2 top-1/2 -translate-y-1/2 text-pink-400 pointer-events-none" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
