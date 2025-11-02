import { pgTable, integer, varchar, numeric } from "drizzle-orm/pg-core";

export const gameTable = pgTable("games", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull().unique(),
  description: varchar({ length: 255 }).notNull().unique(),
  image: varchar({ length: 500 }).unique(),
});

export const gameDetailsTable = pgTable("game_details", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  gameId: integer("game_id")
    .references(() => gameTable.id)
    .notNull(),
  minPlayers: integer("min_players").notNull().default(1),
  maxPlayers: integer("max_players").notNull().default(4),
  minAge: integer("min_age").notNull().default(10),
  durationMin: integer("duration_min").default(30),
  durationMax: integer("duration_max").default(60),
  rating: numeric("rating", { precision: 3, scale: 2 }).default("0.00"),
});

export const categoriesTable = pgTable("categories", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar(("name"), { length: 255 }).notNull().unique(),
});

export const gameCategoriesTable = pgTable("game_categories", {
  gameId: integer("game_id").references(() => gameTable.id).notNull(),
  categoriesId: integer("categories_id").references(() => categoriesTable.id).notNull(),
});
