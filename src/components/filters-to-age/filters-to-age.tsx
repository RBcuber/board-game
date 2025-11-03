import { useFilters } from "@/hooks/useFilters";
import { DetaliesGame } from "@/types/DetalisGame";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function FiltersToAge() {
  const [age, setAge] = useState<DetaliesGame[]>([]);
  const { filters, setFilters } = useFilters();
  async function getCategories() {
    const res = await fetch("/api/game-details");
    const data = await res.json();
    setAge(data);
  }
  const uniqueAge = age
    .reduce<DetaliesGame[]>((acc, item) => {
      const age = item.minAge;
      if (!acc.some((g) => g.minAge === age)) acc.push(item);
      return acc;
    }, [])
    .sort((a, b) => a.minAge - b.minAge);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCategories();
  }, []);
  return (
     <div className="relative w-60">
    <select
      value={filters.minAge}
      onChange={(e) => setFilters({ ...filters, minAge: e.target.value })}
      className="appearance-none w-60 px-4 py-2 rounded-lg bg-background border border-border text-foreground/90 
             shadow-sm hover:border-pink-400 focus:border-pink-500 
             focus:ring-2 focus:ring-pink-500/30 outline-none 
             transition-all duration-200 ease-in-out cursor-pointer text-center"
    >  
      <option value="">Age</option>
      {uniqueAge.map((p) => (
      <option key={p.id} value={p.minAge}>от {p.minAge} </option>
      ))}
    </select>
    <ChevronUp className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-400 pointer-events-none transition-transform duration-200"/>
    </div>
  );
}
