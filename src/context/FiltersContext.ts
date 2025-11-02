"use client";
import { FilterValues } from "@/types/FilterValues";
import { createContext, useContext } from "react";


interface FiltersContextType  {
  filters: FilterValues;
  setFilters: React.Dispatch<React.SetStateAction<FilterValues>>;
};

export const  FiltersContext = createContext<FiltersContextType | undefined>(undefined);
  