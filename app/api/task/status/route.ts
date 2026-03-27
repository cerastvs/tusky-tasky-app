import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { status, id } = await req.json();
  await prisma.task.update({
    where: { id },
    data: { status },
  });

  return NextResponse.json({ success: true });
}
