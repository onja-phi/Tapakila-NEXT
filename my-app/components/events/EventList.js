"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function EventList({ filters = {} }) {
  const { search = "", location = "", eventType = "" } = filters;

  const [events, setEvents] = useState([]);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch("/dbStatique/db.json");
      const data = await res.json();
      setEvents(data.events || []);
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const filteredEvents = events.filter(
    (event) =>
      (search === "" ||
        event.title.toLowerCase().includes(search.toLowerCase())) &&
      (location === "" ||
        event.location.toLowerCase().includes(location.toLowerCase())) &&
      (eventType === "" ||
        event.category.toLowerCase() === eventType.toLowerCase())
  );

  const totalSlides = Math.ceil(filteredEvents.length / itemsPerView);

  const next = () =>
    setStartIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : 0));
  const prev = () =>
    setStartIndex((prev) => (prev - 1 >= 0 ? prev - 1 : totalSlides - 1));

  const visibleEvents = filteredEvents.slice(
    startIndex * itemsPerView,
    (startIndex + 1) * itemsPerView
  );

  return (
    <div className="relative container mx-auto p-6 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        EVENTS FILTERED
      </h2>

      <div className="relative flex items-center">
        <button
          onClick={prev}
          className="absolute left-0 -ml-5 z-10 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-800"
        >
          ◀
        </button>

        <div className="overflow-hidden w-full">
          <div className="flex flex-wrap justify-center gap-6 transition-transform duration-300">
            {visibleEvents.map((event) => (
              <Link
                key={event.id}
                href={`/event/${event.id}`}
                className="flex-1 w-full sm:w-1/2 md:w-1/2 lg:w-1/3"
              >
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-4 cursor-pointer">
                  <div className="relative h-[500px] sm:h-[300px] md:h-[300px] lg:h-[320px]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-md sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                      {event.date} - {event.location}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <button
          onClick={next}
          className="absolute right-0 -mr-5 z-10 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-800"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
