"use client";
import FiltersToCategories from "../filters-to-categories/filters-to-categories";
import FiltersToPlayers from "../filters-to-players/filters-to-players";
import FiltersToAge from "../filters-to-age/filters-to-age";
import FiltersToDuration from "../filters-to-duration/filters-to-duration";

export default function Filters() {

  return (
    <div className="flex flex-wrap gap-3 mb-4">
      <FiltersToCategories />
      <FiltersToPlayers />
      <FiltersToAge />
<FiltersToDuration/>
    </div>
  );
}
