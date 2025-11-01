CREATE TABLE "game_details" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "game_details_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"game_id" integer NOT NULL,
	"min_players" integer DEFAULT 1 NOT NULL,
	"max_players" integer DEFAULT 4 NOT NULL,
	"min_age" integer DEFAULT 10 NOT NULL,
	"duration" varchar(50) DEFAULT '60 min',
	"price" numeric(6, 2) DEFAULT '0.00',
	"rating" numeric(3, 2) DEFAULT '0.00'
);
--> statement-breakpoint
ALTER TABLE "game_details" ADD CONSTRAINT "game_details_game_id_games_id_fk" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "games" ADD CONSTRAINT "games_image_unique" UNIQUE("image");