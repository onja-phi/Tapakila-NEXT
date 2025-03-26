"use client";

import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import EventList from "@/components/events/EventList";
import { useState } from "react";
import AllEvents from "@/components/events/AllEvents";

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
      <EventList filters={filters} />
      <AllEvents />
    </main>
  );
}
