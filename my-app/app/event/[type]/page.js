// app/events/[type]/page.js
import { useState } from "react";
import { useRouter } from "next/router";
import EventList from "@/components/events/EventList";

const EventFilterPage = () => {
  const router = useRouter();
  const { type } = router.query;

  const [filters, setFilters] = useState({
    date: "",
    location: "",
    category: "",
    search: "",
  });

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

      {/* Formulaire de filtres */}
      <div className="mb-6 flex items-center space-x-4">
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleFilterChange}
          placeholder="Rechercher un événement..."
          className="p-2 border rounded-lg w-1/2"
        />
        <select
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
          className="p-2 border rounded-lg"
        >
          <option value="">Filtrer par date</option>
          <option value="2025-05-01">2025-05-01</option>
          <option value="2025-06-15">2025-06-15</option>
        </select>
        <select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="p-2 border rounded-lg"
        >
          <option value="">Filtrer par lieu</option>
          <option value="Paris">Paris</option>
          <option value="Lyon">Lyon</option>
        </select>
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="p-2 border rounded-lg"
        >
          <option value="">Filtrer par catégorie</option>
          <option value="Concert">Concert</option>
          <option value="Festival">Festival</option>
        </select>
      </div>

      {/* Liste des événements filtrés */}
      <EventList filters={filters} />
    </main>
  );
};

export default EventFilterPage;
