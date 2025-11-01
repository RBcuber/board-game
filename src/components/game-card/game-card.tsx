import { DetaliesGame } from "@/types/DetalisGame";
import { Games } from "@/types/Games";
import Image from "next/image";

export default function GameCard({ g, d }: { g: Games; d: DetaliesGame | null }) {
  return (
    <li
      key={g.id}
      className="group relative  rounded-xl overflow-hidden bg-background border border-border shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
    >
      {g.image ? (
        <div className="relative w-full aspect-square">
          <Image
            src={g.image}
            alt={g.title}
            fill
            className="object-cover group-hover:opacity-30 transition-opacity"
          />
        </div>
      ) : (
        <div className="h-64 bg-muted flex items-center justify-center text-sm text-muted-foreground italic">
          No image
        </div>
      )}

      <div className="p-5 flex flex-col justify-between bg-background">
        <h3 className="text-lg font-bold mb-2 text-highlight group-hover:text-pink transition-colors duration-200">
          {g.title}
        </h3>
        <p className="text-sm h-full text-foreground/70 line-clamp-3 leading-relaxed">
          {g.description}
        </p>
      </div>

      <div className="absolute pt-14 inset-0 bg-background/30 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-center p-5">
        <p className="text-sm mb-2">
          🎮 Игроков: {d?.minPlayers}–{d?.maxPlayers}
        </p>
        <p className="text-sm mb-2">
          🕐 Время: {d?.durationMin}–{d?.durationMax} мин
        </p>
        <p className="text-sm mb-2">👶 От {d?.minAge} лет</p>
        <p className="text-sm font-semibold text-highlight">
          ⭐ Рейтинг: {d?.rating}
        </p>
      </div>
    </li>
  );
}
