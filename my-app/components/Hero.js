/*"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const slogans = [
    "Achetez avec Tapakila",
    "Les meilleurs événements à portée de main",
    "Vivez l'expérience, réservez maintenant",
  ];

  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [eventType, setEventType] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 2000);
    return () => clearInterval(interval);
  });

  const handleSearch = () => {
    console.log("Recherche :", { search, location, eventType });
  };

  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/heroimg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-3xl sm:text-5xl font-bold animate-fadeIn mb-6">
          {slogans[currentSlogan]}
        </h1>

        <div className="flex flex-row justify-center bg-white text-black rounded-full w-[300px] sm:w-[500px] shadow-lg">
          <input
            type="text"
            placeholder="Rechercher un événement"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-l-full focus:outline-none text-sm"
          />
          <button
            onClick={handleSearch}
            className="bg-red-300 text-white dark:bg-gray-700 dark:hover:bg-red-800 px-4 py-3 rounded-r-full hover:bg-red-800 text-sm"
          >
            Rechercher
          </button>
        </div>
      </div>
    </section>
  );
}
*/

"use client";

import { useState, useEffect } from "react";

export default function Hero({ onSearch }) {
  const slogans = [
    "Achetez avec Tapakila",
    "Les meilleurs événements à portée de main",
    "Vivez l'expérience, réservez maintenant",
  ];

  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [eventType, setEventType] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    onSearch({ search, location, eventType });
  };

  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/heroimg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-3xl sm:text-5xl font-bold animate-fadeIn mb-6">
          {slogans[currentSlogan]}
        </h1>

        <div className="flex flex-row justify-center bg-white text-black rounded-full w-[400px] sm:w-[600px] shadow-lg">
          <input
            type="text"
            placeholder="Rechercher un événement"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-l-full focus:outline-none text-sm"
          />
          <button
            onClick={handleSearch}
            className="bg-red-300 text-white dark:bg-gray-700 dark:hover:bg-red-800 px-4 py-3 rounded-r-full hover:bg-red-800 text-sm"
          >
            Rechercher
          </button>
        </div>
      </div>
    </section>
  );
}
