import { NextResponse } from "next/server";
import { db } from "@/db";
import {gameDetailsTable } from "@/db/schema";

export async function GET() {
  const gameDetails = await db
    .select()
    .from(gameDetailsTable);

  return NextResponse.json(gameDetails);
}