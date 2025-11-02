import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { gameTable, gameDetailsTable, gameCategoriesTable, categoriesTable } from "@/db/schema";
import { and, eq, gte, lte } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const minAge = searchParams.get("minAge");
  const minPlayers = searchParams.get("minPlayers");
  const maxPlayers = searchParams.get("maxPlayers");
  const duration = searchParams.get("duration");

  const conditions = [];

  if (category) conditions.push(eq(categoriesTable.name, category));
  if (minAge) conditions.push(gte(gameDetailsTable.minAge, Number(minAge)));
  if (maxPlayers) conditions.push(lte(gameDetailsTable.maxPlayers, Number(maxPlayers)));
  if (minPlayers) conditions.push(gte(gameDetailsTable.minPlayers, Number(minPlayers)));
  if (duration) conditions.push(lte(gameDetailsTable.durationMax, Number(duration)));

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  const games = await db
    .select()
    .from(gameTable)
    .leftJoin(gameDetailsTable, eq(gameTable.id, gameDetailsTable.gameId))
    .leftJoin(gameCategoriesTable, eq(gameTable.id, gameCategoriesTable.gameId))
    .leftJoin(categoriesTable, eq(gameCategoriesTable.categoriesId, categoriesTable.id))
    .where(whereClause);

  return NextResponse.json(games);
}