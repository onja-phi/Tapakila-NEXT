"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const TicketSelection = ({ id }) => {
  const router = useRouter();
  const [selectedTickets, setSelectedTickets] = useState({
    vip: 0,
    standard: 0,
    earlyBird: 0,
  });

  const ticketTypes = [
    {
      id: "vip",
      name: "VIP",
      price: 100,
      available: 20,
      description: "Accès VIP avec places réservées",
    },
    {
      id: "standard",
      name: "Standard",
      price: 45,
      available: 50,
      description: "Place standard",
    },
    {
      id: "earlyBird",
      name: "Early Bird",
      price: 35,
      available: 30,
      description: "Tarif préférentiel",
    },
  ];

  const handleQuantityChange = (ticketId, value) => {
    setSelectedTickets((prev) => ({
      ...prev,
      [ticketId]: Math.max(
        0,
        Math.min(value, ticketTypes.find((t) => t.id === ticketId).available)
      ),
    }));
  };

  const calculateTotal = () => {
    return Object.entries(selectedTickets).reduce(
      (total, [ticketId, quantity]) => {
        const ticket = ticketTypes.find((t) => t.id === ticketId);
        return total + ticket.price * quantity;
      },
      0
    );
  };

  const handleReservation = async () => {
    router.push(`/login?eventId=${id}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 mb-10 px-4 lg:px-8">
      <h2 className="text-2xl font-bold mb-6 mt-10">Sélection des Billets</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ticketTypes.map((ticket) => (
          <div
            key={ticket.id}
            className="border rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{ticket.name}</h3>
                  <p className="text-sm text-gray-500">{ticket.description}</p>
                </div>
                <span className="font-bold">{ticket.price}€</span>
              </div>
              <div className="text-sm text-gray-100 mb-2">
                {ticket.available} disponibles
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <button
                onClick={() =>
                  handleQuantityChange(
                    ticket.id,
                    selectedTickets[ticket.id] - 1
                  )
                }
                className="px-2 py-1 border rounded"
                aria-label={`Réduire la quantité de ${ticket.name}`}
              >
                -
              </button>
              <span className="w-8 text-center">
                {selectedTickets[ticket.id]}
              </span>
              <button
                onClick={() =>
                  handleQuantityChange(
                    ticket.id,
                    selectedTickets[ticket.id] + 1
                  )
                }
                className="px-2 py-1 border rounded"
                aria-label={`Augmenter la quantité de ${ticket.name}`}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-2xl font-bold">{calculateTotal()}€</span>
        </div>

        <button
          onClick={handleReservation}
          disabled={calculateTotal() === 0}
          className="w-[200px] bg-red-800 text-white dark:bg-gray-700 dark:hover:bg-red-300 hover:bg-red-800 justify-center py-3 px-4 rounded-lg font-semibold disabled:cursor-not-allowed"
        >
          Réserver
        </button>
      </div>
    </div>
  );
};

export default TicketSelection;
