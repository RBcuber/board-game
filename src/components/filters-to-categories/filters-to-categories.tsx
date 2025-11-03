import { useFilters } from "@/hooks/useFilters";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function FiltersToCategories() {
  const [categories, setCategories] = useState<string[]>([]);
  const { filters, setFilters } = useFilters();
  async function getCategories() {
    const res = await fetch("/api/categories");
    const data = await res.json();
    setCategories(data);
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCategories();
  }, []);

  return (
    <div className="relative w-60">
      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        className="appearance-none w-60 px-4 py-2 rounded-lg bg-background border border-border text-foreground/90 
             shadow-sm hover:border-pink-400 focus:border-pink-500 
             focus:ring-2 focus:ring-pink-500/30 outline-none 
             transition-all duration-200 ease-in-out cursor-pointer text-center"
      >
        <option value="">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <ChevronUp className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-400 pointer-events-none transition-transform duration-200" />
    </div>
  );
}
