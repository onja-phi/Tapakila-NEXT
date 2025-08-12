import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    console.log("Attempting to fetch event with ID:", params.id);

    const event = await prisma.event.findUnique({
      where: {
        id: parseInt(params.id),
      },
      include: {
        tickets: true,
      },
    });

    console.log("Raw event data:", event); // Debug log

    if (!event) {
      console.log("No event found with ID:", params.id);
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

    console.log("Sending formatted event:", formattedEvent); // Debug log
    return NextResponse.json(formattedEvent);
  } catch (error) {
    console.error("Error details:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
