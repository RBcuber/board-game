
import { GamesFilter } from "@/types/GamesFilter";
import Image from "next/image";
import Link from "next/link";
interface GameCardProps {
  g: GamesFilter["games"];
  d: GamesFilter["game_details"];
}

export default function GameCard({ g, d }: GameCardProps) {
  return (
    <Link
      href={`/playground/all-games/${g.id}`}
      className="group block rounded-xl overflow-hidden border border-border bg-background shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
    >
      <div className="relative w-full aspect-square">
        {g.image ? (
          <Image
            src={g.image}
            alt={g.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-all duration-500 group-hover:opacity-30 group-hover:scale-110"
          />
        ) : (
          <div className="h-full flex items-center justify-center text-sm text-muted-foreground italic bg-muted">
            Нет изображения
          </div>
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 text-center">
          <p className="text-sm mb-1 text-foreground/90">
            🎮 Игроков:{" "}
            {d?.minPlayers !== d?.maxPlayers
              ? `${d?.minPlayers}–${d?.maxPlayers}`
              : `${d?.minPlayers}`}
          </p>
          <p className="text-sm mb-1 text-foreground/90">
            🕐 Время:{" "}
            {d?.durationMin !== d?.durationMax
              ? `${d?.durationMin}–${d?.durationMax}`
              : `${d?.durationMin}`}{" "}
            мин
          </p>
          <p className="text-sm mb-1 text-foreground/90">
            👶 От {d?.minAge ?? "?"} лет
          </p>
          {d?.rating && (
            <p className="text-sm font-semibold text-yellow-400 mt-1">
              ⭐ {d.rating}
            </p>
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between bg-background backdrop-blur-sm">
        <h3 className="text-lg font-bold mb-2 text-highlight group-hover:text-pink transition-colors duration-300 line-clamp-1">
          {g.title}
        </h3>
        <p className="text-sm text-foreground/70 line-clamp-3 leading-relaxed">
          {g.description || "Описание отсутствует."}
        </p>
      </div>
    </Link>
  );
}
