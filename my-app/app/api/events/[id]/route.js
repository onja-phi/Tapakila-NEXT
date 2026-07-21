import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const eventId = Number.parseInt(id, 10);

    if (Number.isNaN(eventId)) {
      return NextResponse.json({ error: "Invalid event ID" }, { status: 400 });
    }

    const event = await prisma.event.findUnique({
      where: {
      id: Number(params.id),
      },
    });

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    const formattedEvent = {
      id: event.id,
      title: event.title,
      image: event.image,
      date: event.date,
      time: event.time,
      location: event.location,
      category: event.category,
      organizator: event.organizator,
      description: event.description,
      tickets: event.tickets,
    };

    return NextResponse.json(formattedEvent);
  } catch (error) {
    console.error("Error details:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
