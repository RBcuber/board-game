import { NextResponse } from "next/server";
import { db } from "@/db";
import { categoriesTable } from "@/db/schema";

export async function GET() {
  const categories = await db
    .select({ name: categoriesTable.name })
    .from(categoriesTable);

  return NextResponse.json(categories.map((c) => c.name));
}