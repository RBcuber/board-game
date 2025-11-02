"use client";
import { FiltersContext } from "@/context/FiltersContext";
import { FilterValues } from "@/types/FilterValues";
import { useState, ReactNode } from "react";

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterValues>({
    category: "",
    minAge: "",
    minPlayers: "",
    maxPlayers: "",
    duration: "",
  });

  return (
    <FiltersContext.Provider  value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}