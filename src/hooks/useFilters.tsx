import { FiltersContext } from "@/context/FiltersContext";
import { useContext } from "react";

export function useFilters() {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
}