"use server";
import { prisma } from "./database";
import { redirect } from "next/navigation";

  export async function createBlock(formData: FormData) {
    "use server"
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    await prisma.block.create(
      {data: { title, code }}
    );
    redirect("/");
  }

  export async function updateBlock(formData: FormData) {
    "use server"
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const id = formData.get("id") as string;
    await prisma.block.update({
      where: { id: Number(id) },
      data: { title, code },
    });
    redirect(`/blocks/${id}`);
  }

  export async function deleteBlock(formData: FormData) {
    "use server"
    console.log("hi")
    const id = formData.get("id") as string;
    await prisma.block.delete(
      {where: { id: Number(id) }}
    );
    redirect(`/`);
  }