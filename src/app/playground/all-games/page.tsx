"use client";

import Games from "@/components/games/games";
import { FiltersProvider } from "@/providers/FiltersProvider";

const AllGames = () => {
  return (
    <FiltersProvider>
      <Games />
    </FiltersProvider>
  );
};

export default AllGames;
