"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventFiltered from "./components/events/EventFiltered";
import { useState } from "react";
import AllEvents from "./components/events/AllEvents";

export default function HomePage() {
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    eventType: "",
  });

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <main>
      <Navbar />
      <Hero onSearch={handleSearch} />
      <EventFiltered filters={filters} />
      <AllEvents />
    </main>
  );
}
