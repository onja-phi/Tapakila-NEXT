"use client";
import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Users, Ticket } from "lucide-react";
import Image from "next/image";
import TicketSelection from "@/app/components/events/TicketSelection";
import { useParams } from "next/navigation";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    async function fetchEvent() {
      try {
        setError(null);
        const res = await fetch(`/api/events/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event:", error);
        setError("Impossible de charger les informations de cet événement.");
      }
    }

    if (id) {
      fetchEvent();
    }
  }, [id]);

  useEffect(() => {
    if (!event?.date) return;

    const calculateTimeLeft = () => {
      const eventDate = new Date(event.date);
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [event]);

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-xl font-bold text-red-600">{error}</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-xl font-bold">Loading event...</div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  return (
    <div className="min-h-screen bg-bgColor dark:bg-gray-900 pt-40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[580px] rounded-lg overflow-hidden">
            <Image
              sm-height={900}
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-blackColor dark:text-white">
              {event.title}
            </h1>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-greyText dark:text-gray-300">
                <Calendar size={20} />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center space-x-2 text-greyText dark:text-gray-300">
                <Clock size={20} />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center space-x-2 text-greyText dark:text-gray-300">
                <MapPin size={20} />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-greyText dark:text-gray-300">
                <Users size={20} />
                <span>Organisé par {event.organizator}</span>
              </div>
              <div className="flex items-center space-x-2 text-greyText dark:text-gray-300">
                <Ticket size={20} />
                <span>{event.category}</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blackColor dark:text-white mb-2">
                  Temps restant
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-bgColor dark:bg-gray-700 p-2 rounded text-center">
                    <div className="text-xl font-bold text-primaryColor dark:text-red-500">
                      {timeLeft.days}
                    </div>
                    <div className="text-sm text-greyText dark:text-gray-300">
                      Jours
                    </div>
                  </div>
                  <div className="bg-bgColor dark:bg-gray-700 p-2 rounded text-center">
                    <div className="text-xl font-bold text-primaryColor dark:text-red-500">
                      {timeLeft.hours}
                    </div>
                    <div className="text-sm text-greyText dark:text-gray-300">
                      Heures
                    </div>
                  </div>
                  <div className="bg-bgColor dark:bg-gray-700 p-2 rounded text-center">
                    <div className="text-xl font-bold text-primaryColor dark:text-red-500">
                      {timeLeft.minutes}
                    </div>
                    <div className="text-sm text-greyText dark:text-gray-300">
                      Minutes
                    </div>
                  </div>
                  <div className="bg-bgColor dark:bg-gray-700 p-2 rounded text-center">
                    <div className="text-xl font-bold text-primaryColor dark:text-red-500">
                      {timeLeft.seconds}
                    </div>
                    <div className="text-sm text-greyText dark:text-gray-300">
                      Secondes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blackColor dark:text-white mb-4">
                Description
              </h2>
              <p className="text-greyText dark:text-gray-300">
                {event.description}
              </p>
            </div>
          </div>
        </div>

        <TicketSelection id={event.id} />
      </div>
    </div>
  );
}
