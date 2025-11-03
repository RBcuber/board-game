"use server"

import { db } from "@/db";
import { gameTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCategory(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    
    await db.insert(gameTable).values({title, description});
    revalidatePath("/playground/all-games")
    redirect("/playground/all-games")
}