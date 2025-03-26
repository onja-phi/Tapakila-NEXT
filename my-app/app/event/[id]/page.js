"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Users, Ticket } from "lucide-react";
import Image from "next/image";
import TicketSelection from "@/components/events/TicketSelection";
import { useParams } from "next/navigation";

export default function EventDetails() {
  const { id } = useParams();

  const [ticketCount, setTicketCount] = useState(1);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const events = [
    {
      id: 1,
      title: "Concert de Jazz",
      date: "15 Juin 2024",
      time: "20:00",
      location: "Salle de Concert, Antananarivo",
      organizer: "Jazz Productions",
      category: "Concert",
      price: 50000,
      availableTickets: 100,
      description:
        "Une soirée exceptionnelle de jazz avec les meilleurs artistes locaux. Venez profiter d'une ambiance unique et de musiques envoûtantes.",
      image: "/Evenement1.jpg",
    },
    {
      id: 2,
      title: "Festival de Danse",
      date: "20 Juin 2024",
      time: "19:00",
      location: "Centre Culturel",
      organizer: "Dance Company",
      category: "Spectacle",
      price: 75000,
      availableTickets: 50,
      description:
        "Un festival de danse exceptionnel avec les meilleurs danseurs du pays.",
      image: "/Evenement2.jpg",
    },
    {
      id: 3,
      title: "Exposition d'Art",
      date: "25 Juin 2024",
      time: "10:00",
      location: "Galerie d'Art",
      organizer: "Art Gallery",
      category: "Exposition",
      price: 25000,
      availableTickets: 200,
      description:
        "Une exposition unique présentant les œuvres des artistes contemporains.",
      image: "/Evenement3.jpg",
    },
    {
      id: 4,
      title: "Théâtre",
      date: "30 Juin 2024",
      time: "19:30",
      location: "Théâtre Municipal",
      organizer: "Theatre Company",
      category: "Concert",
      price: 40000,
      availableTickets: 150,
      description: "Une représentation exceptionnelle d'une pièce classique.",
      image: "/Evenement4.jpg",
    },
    {
      id: 5,
      title: "Concert Rock",
      date: "5 Juillet 2024",
      time: "21:00",
      location: "Arena",
      organizer: "Rock Productions",
      category: "Spectacle",
      price: 60000,
      availableTickets: 80,
      description:
        "Un concert rock exceptionnel avec les meilleurs groupes locaux.",
      image: "/Evenement5.jpg",
    },
    {
      id: 6,
      title: "Business Conference",
      date: "3 Juillet 2024",
      time: "18:00",
      location: "Parc Municipal",
      organizer: "Music Festival",
      category: "Conférence",
      price: 45000,
      availableTickets: 120,
      description:
        "Un festival de musique variée avec des artistes de renommée.",
      image: "/Evenement6.jpg",
    },
    {
      id: 7,
      title: "Festival de Musique",
      date: "10 Juillet 2024",
      time: "18:00",
      location: "Parc Municipal",
      organizer: "Music Festival",
      category: "Spectacle",
      price: 45000,
      availableTickets: 120,
      description:
        "Un festival de musique variée avec des artistes de renommée.",
      image: "/Evenement7.jpg",
    },
    {
      id: 8,
      title: "Festival de Musique",
      date: "10 Juillet 2024",
      time: "18:00",
      location: "Parc Municipal",
      organizer: "Music Festival",
      category: "Spectacle",
      price: 45000,
      availableTickets: 120,
      description:
        "Un festival de musique variée avec des artistes de renommée.",
      image: "/Evenement8.jpg",
    },
    {
      id: 9,
      title: "Concert de Jazz",
      date: "15 Juin 2024",
      time: "20:00",
      location: "Salle de Concert, Antananarivo",
      organizer: "Jazz Productions",
      category: "Concert",
      price: 50000,
      availableTickets: 100,
      description:
        "Une soirée exceptionnelle de jazz avec les meilleurs artistes locaux. Venez profiter d'une ambiance unique et de musiques envoûtantes.",
      image: "/Evenement9.jpg",
    },
    {
      id: 10,
      title: "Festival de Danse",
      date: "20 Juin 2024",
      time: "19:00",
      location: "Centre Culturel",
      organizer: "Dance Company",
      category: "Spectacle",
      price: 75000,
      availableTickets: 50,
      description:
        "Un festival de danse exceptionnel avec les meilleurs danseurs du pays.",
      image: "/Evenement10.jpg",
    },
    {
      id: 11,
      title: "Exposition d'Art",
      date: "25 Juin 2024",
      time: "10:00",
      location: "Galerie d'Art",
      organizer: "Art Gallery",
      category: "Exposition",
      price: 25000,
      availableTickets: 200,
      description:
        "Une exposition unique présentant les œuvres des artistes contemporains.",
      image: "/Evenement11.jpg",
    },
    {
      id: 12,
      title: "Théâtre",
      date: "30 Juin 2024",
      time: "19:30",
      location: "Théâtre Municipal",
      organizer: "Theatre Company",
      category: "Concert",
      price: 40000,
      availableTickets: 150,
      description: "Une représentation exceptionnelle d'une pièce classique.",
      image: "/Evenement12.jpg",
    },
    {
      id: 13,
      title: "Concert Rock",
      date: "5 Juillet 2024",
      time: "21:00",
      location: "Arena",
      organizer: "Rock Productions",
      category: "Spectacle",
      price: 60000,
      availableTickets: 80,
      description:
        "Un concert rock exceptionnel avec les meilleurs groupes locaux.",
      image: "/Evenement13.jpg",
    },
    {
      id: 14,
      title: "Business Conference",
      date: "3 Juillet 2024",
      time: "18:00",
      location: "Parc Municipal",
      organizer: "Music Festival",
      category: "Conférence",
      price: 45000,
      availableTickets: 120,
      description:
        "Un festival de musique variée avec des artistes de renommée.",
      image: "/Evenement14.jpg",
    },
    {
      id: 15,
      title: "Festival de Musique",
      date: "10 Juillet 2024",
      time: "18:00",
      location: "Parc Municipal",
      organizer: "Music Festival",
      category: "Spectacle",
      price: 45000,
      availableTickets: 120,
      description:
        "Un festival de musique variée avec des artistes de renommée.",
      image: "/Evenement15.jpg",
    },
    {
      id: 16,
      title: "Festival de Musique",
      date: "10 Juillet 2024",
      time: "18:00",
      location: "Parc Municipal",
      organizer: "Music Festival",
      category: "Spectacle",
      price: 45000,
      availableTickets: 120,
      description:
        "Un festival de musique variée avec des artistes de renommée.",
      image: "/Evenement16.jpg",
    },
    {
      id: 17,
      title: "Concert de Jazz",
      date: "15 Juin 2024",
      time: "20:00",
      location: "Salle de Concert, Antananarivo",
      organizer: "Jazz Productions",
      category: "Concert",
      price: 50000,
      availableTickets: 100,
      description:
        "Une soirée exceptionnelle de jazz avec les meilleurs artistes locaux. Venez profiter d'une ambiance unique et de musiques envoûtantes.",
      image: "/Evenement17.jpg",
    },
    {
      id: 18,
      title: "Festival de Danse",
      date: "20 Juin 2024",
      time: "19:00",
      location: "Centre Culturel",
      organizer: "Dance Company",
      category: "Spectacle",
      price: 75000,
      availableTickets: 50,
      description:
        "Un festival de danse exceptionnel avec les meilleurs danseurs du pays.",
      image: "/Evenement18.jpg",
    },
    {
      id: 19,
      title: "Exposition d'Art",
      date: "25 Juin 2024",
      time: "10:00",
      location: "Galerie d'Art",
      organizer: "Art Gallery",
      category: "Exposition",
      price: 25000,
      availableTickets: 200,
      description:
        "Une exposition unique présentant les œuvres des artistes contemporains.",
      image: "/Evenement19.jpg",
    },
    {
      id: 20,
      title: "Théâtre",
      date: "30 Juin 2024",
      time: "19:30",
      location: "Théâtre Municipal",
      organizer: "Theatre Company",
      category: "Concert",
      price: 40000,
      availableTickets: 150,
      description: "Une représentation exceptionnelle d'une pièce classique.",
      image: "/Evenement20.jpg",
    },
  ];

  const event = events.find((e) => e.id === parseInt(id)) || events[0];

  useEffect(() => {
    const calculateTimeLeft = () => {
      const monthMap = {
        Janvier: "01",
        Février: "02",
        Mars: "03",
        Avril: "04",
        Mai: "05",
        Juin: "06",
        Juillet: "07",
        Août: "08",
        Septembre: "09",
        Octobre: "10",
        Novembre: "11",
        Décembre: "12",
      };

      const [day, month, year] = event.date.split(" ");
      const [hours, minutes] = event.time.split(":");

      const eventDate = new Date(
        `${year}-${monthMap[month]}-${day.padStart(2, "0")}T${hours}:${minutes}`
      );
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [event.date, event.time]);

  const handleReservation = () => {
    console.log(`Réservation de ${ticketCount} billets`);
  };

  return (
    <div className="min-h-screen bg-bgColor dark:bg-gray-900 pt-40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image de l'événement */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Détails de l'événement */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-blackColor dark:text-white">
              {event.title}
            </h1>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-greyText dark:text-gray-300">
                <Calendar size={20} />
                <span>{event.date}</span>
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
                <span>Organisé par {event.organizer}</span>
              </div>
              <div className="flex items-center space-x-2 text-greyText dark:text-gray-300">
                <Ticket size={20} />
                <span>{event.category}</span>{" "}
                {/* Displaying the category here */}
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
        <div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex justify-center">
            <TicketSelection id={event.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
