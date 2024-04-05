import { createContext, useState } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState({
    adultTickets: 0,
    childTickets: 0,
    seniorTickets: 0,
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const updateTickets = (type, value) => {
    setTickets((prevTickets) => ({
      ...prevTickets,
      [type]: value,
    }));
  };

  const calculateTotalPrice = (adultPrice, childPrice, seniorPrice) => {
    const total =
      tickets.adultTickets * adultPrice +
      tickets.childTickets * childPrice +
      tickets.seniorTickets * seniorPrice;
    setTotalPrice(total);
  };

  const ticketInfo = `Adulto (${tickets.adultTickets}), Niño (${tickets.childTickets}), 3ra Edad (${tickets.seniorTickets})`;
  
  return (
    <TicketContext.Provider value={{ 
      tickets, 
      updateTickets, 
      totalPrice, 
      calculateTotalPrice,
      ticketInfo 
    }}>
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContext;
