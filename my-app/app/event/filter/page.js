// app/events/filter/page.js
import { useState } from "react";
import EventList from "@/components/events/EventList";

const EventFilterPage = () => {
  const [filters, setFilters] = useState({
    date: "",
    location: "",
    category: "",
  });

  const categories = [
    "Tous",
    "Concert",
    "Théâtre",
    "Sport",
    "Exposition",
    "Conférence",
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Filtrer les Événements</h1>

      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
          />
        </div>

        <div className="flex-1 min-w-[200px]">
          <label htmlFor="location">Lieu</label>
          <input
            type="text"
            id="location"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder="Entrez une ville"
          />
        </div>

        <div className="flex-1 min-w-[200px]">
          <label htmlFor="category">Catégorie</label>
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">Toutes les catégories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <EventList filters={filters} />
    </main>
  );
};

export default EventFilterPage;
