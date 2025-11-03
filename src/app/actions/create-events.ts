"use server";

import { db } from "@/db";
import { events } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

const eventInsertSchema = z.object({
  name: z
    .string()
    .min(3, "Min lenght must be more than 3")
    .max(250, "Name  is too long, must be under 250")
    .trim(),
  description: z
    .string()
    .min(3, "Min lenght must be more than 3")
    .max(250, "Description  is too long, must be under 250")
    .trim(),
  date: z.iso.date(),
});

export default async function CreateEvents(formData: FormData) {
  const name = formData.get("name");
  const description = formData.get("description");
  const date = formData.get("date");

  const newEvent = eventInsertSchema.parse({ date, name, description });

  await db.insert(events).values(newEvent);
  revalidatePath("/events");
  redirect("/events");
}
