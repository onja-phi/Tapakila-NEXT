"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function EventFiltered({ searchParams, activeFilter }) {
  const [events, setEvents] = useState([]);
  const [groupedEvents, setGroupedEvents] = useState({});
  const [currentPage, setCurrentPage] = useState({});
  const ITEMS_PER_PAGE = 3;

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    if (searchParams?.search) {
      const filtered = events.filter((event) =>
        event.title.toLowerCase().includes(searchParams.search.toLowerCase())
      );
      setGroupedEvents({ "RESULTAT DE RECHERCHE": filtered });
      return;
    }

    if (!activeFilter) {
      setGroupedEvents({ "": events });
      return;
    }

    switch (activeFilter) {
      case "category":
        const byCategory = {};
        events.forEach((event) => {
          const categoryName = event.category.toUpperCase();
          if (!byCategory[categoryName]) byCategory[categoryName] = [];
          byCategory[categoryName].push(event);
        });
        setGroupedEvents(byCategory);
        break;

      case "location":
        const byLocation = {};
        events.forEach((event) => {
          const locationName = event.location.toUpperCase();
          if (!byLocation[locationName]) byLocation[locationName] = [];
          byLocation[locationName].push(event);
        });
        setGroupedEvents(byLocation);
        break;

      case "date":
        const byMonth = {};
        events.forEach((event) => {
          const month = new Date(event.date)
            .toLocaleString("fr-FR", {
              month: "long",
              year: "numeric",
            })
            .toUpperCase();
          if (!byMonth[month]) byMonth[month] = [];
          byMonth[month].push(event);
        });
        setGroupedEvents(byMonth);
        break;

      default:
        setGroupedEvents({});
    }
  }, [events, activeFilter, searchParams]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handlePageChange = (groupTitle, direction) => {
    const totalPages = Math.ceil(
      groupedEvents[groupTitle].length / ITEMS_PER_PAGE
    );
    setCurrentPage((prev) => ({
      ...prev,
      [groupTitle]:
        direction === "next"
          ? ((prev[groupTitle] || 0) + 1) % totalPages
          : ((prev[groupTitle] || 0) - 1 + totalPages) % totalPages,
    }));
  };

  return (
    <div className="relative container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        EVENTS FILTERED
      </h2>

      <div className="space-y-8">
        {Object.entries(groupedEvents).map(([groupTitle, eventGroup]) => (
          <div key={groupTitle} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              {groupTitle}
            </h3>
            <div className="relative">
              {eventGroup.length > ITEMS_PER_PAGE && (
                <button
                  onClick={() => handlePageChange(groupTitle, "prev")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-800"
                >
                  ◀
                </button>
              )}

              <div
                id={`scroll-${groupTitle}`}
                className="grid grid-cols-3 gap-6"
              >
                {eventGroup
                  .slice(
                    (currentPage[groupTitle] || 0) * ITEMS_PER_PAGE,
                    (currentPage[groupTitle] || 0) * ITEMS_PER_PAGE +
                      ITEMS_PER_PAGE
                  )
                  .map((event) => (
                    <Link
                      key={event.id}
                      href={`/event/${event.id}`}
                      className="w-full"
                    >
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-3">
                        <div className="relative h-[200px]">
                          <Image
                            src={event.image}
                            alt={event.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                        <div className="mt-3 text-center">
                          <h3 className="text-sm font-semibold truncate">
                            {event.title}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {formatDate(event.date)} - {event.location}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>

              {eventGroup.length > ITEMS_PER_PAGE && (
                <button
                  onClick={() => handlePageChange(groupTitle, "next")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-800"
                >
                  ▶
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
