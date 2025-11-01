ALTER TABLE "game_details" RENAME COLUMN "game_id" TO "gameId";--> statement-breakpoint
ALTER TABLE "game_details" RENAME COLUMN "min_players" TO "minPlayers";--> statement-breakpoint
ALTER TABLE "game_details" RENAME COLUMN "max_players" TO "maxPlayers";--> statement-breakpoint
ALTER TABLE "game_details" RENAME COLUMN "min_age" TO "minAge";--> statement-breakpoint
ALTER TABLE "game_details" DROP CONSTRAINT "game_details_game_id_games_id_fk";
--> statement-breakpoint
ALTER TABLE "game_details" ALTER COLUMN "duration" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "game_details" ALTER COLUMN "duration" SET DEFAULT 60;--> statement-breakpoint
ALTER TABLE "game_details" ADD CONSTRAINT "game_details_gameId_games_id_fk" FOREIGN KEY ("gameId") REFERENCES "public"."games"("id") ON DELETE no action ON UPDATE no action;