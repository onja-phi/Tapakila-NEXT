"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function EventList({ filters = {} }) {
  const { search = "", location = "", eventType = "" } = filters;

  const events = [
    {
      id: 1,
      image: "/Evenement1.jpg",
      title: "Concert de Jazz",
      date: "2025-05-01",
      location: "Paris",
      category: "Concert",
    },
    {
      id: 2,
      image: "/Evenement2.jpg",
      title: "Festival de Danse",
      date: "2025-06-01",
      location: "Lyon",
      category: "Festival",
    },
    {
      id: 3,
      image: "/Evenement3.jpg",
      title: "Exposition d'Art",
      date: "2025-07-01",
      location: "Paris",
      category: "Exposition",
    },
    {
      id: 4,
      image: "/evenement4.jpg",
      title: "Théâtre",
      date: "2025-08-01",
      location: "Lyon",
      category: "Théâtre",
    },
    {
      id: 5,
      image: "/evenement5.jpg",
      title: "Concert Rock",
      date: "2025-05-15",
      location: "Paris",
      category: "Concert",
    },
    {
      id: 6,
      image: "/evenement6.jpg",
      title: "Festival de Musique",
      date: "2025-06-10",
      location: "Paris",
      category: "Festival",
    },
    {
      id: 7,
      image: "/evenement7.jpg",
      title: "Festival de Musique",
      date: "2025-07-10",
      location: "Lyon",
      category: "Festival",
    },
    {
      id: 8,
      image: "/evenement8.jpg",
      title: "Festival de Musique",
      date: "2025-08-15",
      location: "Paris",
      category: "Festival",
    },
  ];

  const filteredEvents = events.filter(
    (event) =>
      (search === "" ||
        event.title.toLowerCase().includes(search.toLowerCase())) &&
      (location === "" ||
        event.location.toLowerCase().includes(location.toLowerCase())) &&
      (eventType === "" ||
        event.category.toLowerCase() === eventType.toLowerCase())
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredEvents.length);
  };

  const prevEvent = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredEvents.length) % filteredEvents.length
    );
  };

  // On génère trois événements uniques sans duplication
  const eventsToDisplay = [
    filteredEvents[currentIndex % filteredEvents.length],
    filteredEvents[(currentIndex + 1) % filteredEvents.length],
    filteredEvents[(currentIndex + 2) % filteredEvents.length],
  ];

  return (
    <div className="relative w-full mt-10 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {eventsToDisplay.map((event, index) => (
          <div
            key={`${event.id}-${index}`} // Utilisation de id + index pour garantir une clé unique
            className="relative group w-full mx-auto rounded-lg overflow-hidden cursor-pointer h-[400px]" // Hauteur uniforme
          >
            <Link href={`/event/${event.id}`}>
              <Image
                src={event.image}
                alt={event.title}
                layout="intrinsic"
                width={500}
                height={300}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2">
        <button
          onClick={prevEvent}
          className="bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-800"
        >
          ◀
        </button>

        <button
          onClick={nextEvent}
          className="bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-800"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
