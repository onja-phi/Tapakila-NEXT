import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

const categoryMapping = {
  Concert: "Concert",
  Festival: "Festival",
  Exposition: "Exposition",
  Théâtre: "Theatre",
  Conférence: "Conference",
  Salon: "Salon",
  Spectacle: "Spectacle",
};
const ticketsByCategory = {
  Concert: [
    { type: "VIP", price: 200.0, quantity: 50 },
    { type: "Standard", price: 100.0, quantity: 300 },
    { type: "EarlyBird", price: 80.0, quantity: 100 },
  ],
  Festival: [
    { type: "VIP", price: 300.0, quantity: 100 },
    { type: "Standard", price: 150.0, quantity: 500 },
    { type: "EarlyBird", price: 120.0, quantity: 200 },
  ],
  Exposition: [
    { type: "VIP", price: 50.0, quantity: 30 },
    { type: "Standard", price: 25.0, quantity: 200 },
  ],
  Theatre: [
    { type: "VIP", price: 150.0, quantity: 40 },
    { type: "Standard", price: 70.0, quantity: 150 },
  ],
  Conference: [
    { type: "VIP", price: 400.0, quantity: 20 },
    { type: "Standard", price: 200.0, quantity: 100 },
    { type: "EarlyBird", price: 150.0, quantity: 50 },
  ],
  Salon: [
    { type: "VIP", price: 100.0, quantity: 50 },
    { type: "Standard", price: 40.0, quantity: 300 },
  ],
  Spectacle: [
    { type: "VIP", price: 180.0, quantity: 60 },
    { type: "Standard", price: 90.0, quantity: 200 },
    { type: "EarlyBird", price: 70.0, quantity: 100 },
  ],
};

async function main() {
  try {
    const data = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), "public", "dbStatique", "db.json"),
        "utf-8"
      )
    );

    for (const event of data.events) {
      const mappedCategory = categoryMapping[event.category];

      if (!mappedCategory) {
        console.warn(
          `Warning: Invalid category ${event.category} for event ${event.title}`
        );
        continue;
      }

      const eventTickets = ticketsByCategory[mappedCategory];

      await prisma.event.create({
        data: {
          title: event.title,
          image: event.image,
          date: new Date(event.date),
          time: event.time,
          location: event.location,
          category: mappedCategory,
          organizator: event.organizator,
          description: event.description,
          tickets: {
            create: eventTickets,
          },
        },
      });
      console.log(
        `Imported event: ${event.title} with ${eventTickets.length} ticket types`
      );
    }
    console.log("All events imported successfully");
  } catch (error) {
    console.error("Error importing data:", error);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
