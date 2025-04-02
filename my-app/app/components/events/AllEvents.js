"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch("/dbStatique/db.json");
      const data = await res.json();
      setEvents(data.events || []);
    }

    fetchEvents();
  }, []);

  const half = Math.ceil(events.length / 2);
  const firstRowEvents = events.slice(0, half);
  const secondRowEvents = events.slice(half);

  return (
    <div className="w-full max-w-[1300px] mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mt-10 mb-8 text-black dark:text-white">
        ALL EVENTS
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-6 animate-scroll-left">
          {firstRowEvents.map((event) => (
            <Link key={event.id} href={`/event/${event.id}`}>
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 w-72 shrink-0 cursor-pointer transition-all duration-300">
                <div className="relative w-full h-64">
                  <Image
                    src={event.image}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-4 bg-[#F6F5F2]">
                  <h3 className="text-lg dark:text-black font-semibold">
                    {event.title}
                  </h3>
                  <p className="dark:text-black">{event.date}</p>
                  <p className="dark:text-black">{event.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden mt-8">
        <div className="flex space-x-6 animate-scroll-right">
          {secondRowEvents.map((event) => (
            <Link key={event.id} href={`/event/${event.id}`}>
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 w-72 shrink-0 cursor-pointer transition-all duration-300">
                <div className="relative w-full h-64">
                  <Image
                    src={event.image}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-4 bg-[#F6F5F2]">
                  <h3 className="text-lg dark:text-black font-semibold">
                    {event.title}
                  </h3>
                  <p className="dark:text-black">{event.date}</p>
                  <p className="dark:text-black">{event.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          display: flex;
          animation: scrollLeft 10s linear infinite;
        }

        .animate-scroll-right {
          display: flex;
          animation: scrollRight 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
