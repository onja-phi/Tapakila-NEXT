"use client";
import { useState, useEffect } from "react";

export default function Hero({ onSearch, onFilterChange }) {
  // Changed from onFilter
  const slogans = [
    "Achetez avec Tapakila",
    "Les meilleurs événements à portée de main",
    "Vivez l'expérience, réservez maintenant",
  ];

  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [search, setSearch] = useState("");
  const [showFilterButtons, setShowFilterButtons] = useState(false);
  const [activeFilter, setActiveFilter] = useState(""); // "category", "location", "date"

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    onSearch({ search });
  };

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
    onFilterChange(filterType); // Changed from onFilter
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

        <div className="flex flex-col gap-4 w-[400px] sm:w-[600px]">
          <div className="flex flex-row justify-center bg-white text-black rounded-full shadow-lg">
            <input
              type="text"
              placeholder="Rechercher un événement"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 rounded-l-full focus:outline-none text-sm"
            />
            <button
              onClick={() => setShowFilterButtons(!showFilterButtons)}
              className="bg-red-800 text-white px-4 py-3 hover:bg-red-600"
            >
              FILTRER
            </button>
            <button
              onClick={handleSearch}
              className="bg-[hsl(0,55%,56%)] text-white dark:bg-gray-700 dark:hover:bg-red-800 px-4 py-3 rounded-r-full hover:bg-red-800 text-sm"
            >
              Rechercher
            </button>
          </div>

          {showFilterButtons && (
            <div className="flex justify-center gap-4 rounded-lg p-4">
              <button
                onClick={() => handleFilterClick("category")}
                className={`px-4 py-2 rounded ${
                  activeFilter === "category"
                    ? "bg-red-800 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                CATEGORIES
              </button>
              <button
                onClick={() => handleFilterClick("location")}
                className={`px-4 py-2 rounded ${
                  activeFilter === "location"
                    ? "bg-red-700 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                LIEU
              </button>
              <button
                onClick={() => handleFilterClick("date")}
                className={`px-4 py-2 rounded ${
                  activeFilter === "date"
                    ? "bg-red-800 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                DATE
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
