import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import TicketContext from "./context/TicketContext";

const TicketItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .button-container {
    border: 1px solid #000000;
    border-radius: 4px;
    padding: 2px;
  }
  .button {
    padding: 6px 12px;
    background-color: #f3f4f6;
    color: #000000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      color: #f3f4f6;
      background-color: #000667ff;
    }
  }
  .active {
    color: #ffffffff;
    background: #000667ff;
  }
  .ticket-price {
    margin-left: auto;
    margin-right: 2rem;
  }
`;

const TicketSelection = () => {
  const { tickets, updateTickets } = useContext(TicketContext);
  const [totalTickets, setTotalTickets] = useState(0);

  useEffect(() => {
    setTotalTickets(tickets.adultTickets + tickets.childTickets + tickets.seniorTickets);
  }, [tickets]);

  const adultPrice = 71;
  const childPrice = 56;
  const seniorPrice = 56;

  const canIncrement = (ticketType) => {
    return totalTickets < 10 && (totalTickets + 1 <= 10 || tickets[ticketType] < 10);
  };

  const canDecrement = (ticketType) => {
    return tickets[ticketType] > 0;
  };

  return (
    <div className="max-w-md">
      <h3 className="text-xl font-bold mb-2">Selecciona tus boletos</h3>
      <p className="mb-8">Puedes comprar 10 boletos por transacción.</p>

      <TicketItem>
        <h4>Adulto</h4>
        <p className="ticket-price">${adultPrice}</p>
        <div className="button-container">
          <button
            className="button"
            onClick={() => canDecrement("adultTickets") && updateTickets("adultTickets", tickets.adultTickets - 1)}
            disabled={!canDecrement("adultTickets")}
          >
            -
          </button>
          <span className="mr-8 ml-8">{tickets.adultTickets}</span>
          <button
            className="button active"
            onClick={() => canIncrement("adultTickets") && updateTickets("adultTickets", tickets.adultTickets + 1)}
            disabled={!canIncrement("adultTickets")}
          >
            +
          </button>
        </div>
      </TicketItem>

      <TicketItem>
        <h4>Niño</h4>
        <p className="ticket-price">${childPrice}</p>
        <div className="button-container">
          <button
            className="button"
            onClick={() => canDecrement("childTickets") && updateTickets("childTickets", tickets.childTickets - 1)}
            disabled={!canDecrement("childTickets")}
          >
            -
          </button>
          <span className="mr-8 ml-8">{tickets.childTickets}</span>
          <button
            className="button active"
            onClick={() => canIncrement("childTickets") && updateTickets("childTickets", tickets.childTickets + 1)}
            disabled={!canIncrement("childTickets")}
          >
            +
          </button>
        </div>
      </TicketItem>

      <TicketItem>
        <h4>3ra Edad</h4>
        <p className="ticket-price">${seniorPrice}</p>
        <div className="button-container">
          <button
            className="button"
            onClick={() => canDecrement("seniorTickets") && updateTickets("seniorTickets", tickets.seniorTickets - 1)}
            disabled={!canDecrement("seniorTickets")}
          >
            -
          </button>
          <span className="mr-8 ml-8">{tickets.seniorTickets}</span>
          <button
            className="button active"
            onClick={() => canIncrement("seniorTickets") && updateTickets("seniorTickets", tickets.seniorTickets + 1)}
            disabled={!canIncrement("seniorTickets")}
          >
            +
          </button>
        </div>
      </TicketItem>
    </div>
  );
};

export default TicketSelection;
