import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const { id } = await context.params;

  console.log("ID =", id);

  const event = await prisma.event.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      tickets: true,
    },
  });

  if (!event) {
    return NextResponse.json(
      { error: "Event not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(event);
}