"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const TICKET_DESCRIPTIONS = {
  VIP: "Accès VIP avec places réservées",
  Standard: "Place standard",
  EarlyBird: "Tarif préférentiel limité",
};

const MAX_TICKETS_PER_PERSON = 10;

const TicketSelection = ({ id }) => {
  const router = useRouter();
  const [tickets, setTickets] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState({});
  const [totalTickets, setTotalTickets] = useState(0);

  useEffect(() => {
    async function fetchTickets() {
      try {
        const res = await fetch(`/api/events/${id}`);
        if (!res.ok) throw new Error("Failed to fetch event tickets");
        const event = await res.json();
        const eventTickets = event?.tickets || [];
        setTickets(eventTickets);

        const initialSelected = {};
        eventTickets.forEach((ticket) => {
          initialSelected[ticket.id] = 0;
        });
        setSelectedTickets(initialSelected);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    }
    fetchTickets();
  }, [id]);

  useEffect(() => {
    const total = Object.values(selectedTickets).reduce(
      (sum, qty) => sum + qty,
      0
    );
    setTotalTickets(total);
  }, [selectedTickets]);

  const handleQuantityChange = (ticketId, value) => {
    const ticket = tickets.find((t) => t.id === ticketId);
    if (!ticket) return;

    const currentTotal = Object.values(selectedTickets).reduce(
      (sum, qty) => sum + qty,
      0
    );

    const otherTicketsCount = currentTotal - (selectedTickets[ticketId] || 0);

    const maxAllowed = Math.min(
      ticket.maxPerUser || MAX_TICKETS_PER_PERSON,
      ticket.quantity,
      MAX_TICKETS_PER_PERSON - otherTicketsCount
    );

    const newValue = Math.max(0, Math.min(value, maxAllowed));

    if (otherTicketsCount + newValue <= MAX_TICKETS_PER_PERSON) {
      setSelectedTickets((prev) => ({
        ...prev,
        [ticketId]: newValue,
      }));

      const newTotal = otherTicketsCount + newValue;
      setTotalTickets(newTotal);
    }
  };

  const calculateTotal = () => {
    const total = Object.entries(selectedTickets).reduce(
      (total, [ticketId, quantity]) => {
        const ticket = tickets.find((t) => t.id === Number(ticketId));
        return total + (ticket?.price || 0) * quantity;
      },
      0
    );

    return new Intl.NumberFormat("mg-MG", {
      style: "currency",
      currency: "MGA",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(total);
  };

  const handleReservation = async () => {
    router.push(`/login?eventId=${id}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 mb-10 px-4 lg:px-8">
      <h2 className="text-2xl font-bold justify-center mb-6 mt-10">
        Sélection des Billets
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Maximum {MAX_TICKETS_PER_PERSON} billets au total par personne
      </p>

      <div className="grid grid-cols-1 dark:text-white md:grid-cols-3 gap-6">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="border bg-red-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{ticket.type}</h3>
                    <p className="text-sm text-gray-500">
                      {TICKET_DESCRIPTIONS[ticket.type]}
                    </p>
                    <p className="text-sm text-gray-500">
                      Maximum {ticket.maxPerUser} par personne
                    </p>
                  </div>
                  <span className="font-bold">
                    {new Intl.NumberFormat("mg-MG", {
                      style: "currency",
                      currency: "MGA",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(ticket.price)}
                  </span>
                </div>
                <div className="text-sm dark:text-white text-gray-900 mb-2">
                  {ticket.quantity} disponibles
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <button
                  onClick={() =>
                    handleQuantityChange(
                      ticket.id,
                      (selectedTickets[ticket.id] || 0) - 1
                    )
                  }
                  className="px-2 py-1 border rounded"
                  disabled={!selectedTickets[ticket.id]}
                >
                  -
                </button>
                <span className="w-8 text-center">
                  {selectedTickets[ticket.id] || 0}
                </span>
                <button
                  onClick={() =>
                    handleQuantityChange(
                      ticket.id,
                      (selectedTickets[ticket.id] || 0) + 1
                    )
                  }
                  className="px-2 py-1 border rounded"
                  disabled={
                    selectedTickets[ticket.id] >= ticket.quantity ||
                    selectedTickets[ticket.id] >= ticket.maxPerUser ||
                    totalTickets >= MAX_TICKETS_PER_PERSON
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-2xl font-bold">{calculateTotal()}</span>
        </div>

        <button
          onClick={handleReservation}
          disabled={totalTickets === 0}
          className="w-[200px] bg-red-800 text-white hover:bg-red-600 justify-center py-3 px-4 rounded-lg font-semibold disabled:cursor-not-allowed"
        >
          Réserver
        </button>
      </div>
    </div>
  );
};

export default TicketSelection;
