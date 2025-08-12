"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventFiltered from "./components/events/EventFiltered";
import { useState } from "react";
import AllEvents from "./components/events/AllEvents";

export default function Home() {
  const [searchParams, setSearchParams] = useState({});
  const [activeFilter, setActiveFilter] = useState("");

  return (
    <main>
      <Navbar />
      <Hero
        onSearch={(params) => setSearchParams(params)}
        onFilterChange={(filter) => setActiveFilter(filter)}
      />
      <EventFiltered searchParams={searchParams} activeFilter={activeFilter} />
      <AllEvents />
    </main>
  );
}
