"use server";

import { db } from "@/db";
import { gameTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

const gameInsertSchema = z.object({
  title: z
    .string()
    .min(3, "Min lenght must be more than 3")
    .max(250, "Name  is too long, must be under 250")
    .trim(),
  description: z
    .string()
    .min(3, "Min lenght must be more than 3")
    .max(250, "Description  is too long, must be under 250")
    .trim(),
});

export async function createCategory(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const newEvent = gameInsertSchema.parse({ title, description });
  await db.insert(gameTable).values(newEvent);
  revalidatePath("/playground/all-games");
  redirect("/playground/all-games");
}
