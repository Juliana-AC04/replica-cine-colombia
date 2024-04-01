import React, { useState } from "react";
import styled from "styled-components";

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
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [seniorTickets, setSeniorTickets] = useState(0);

  const handleTicketChange = (setValue, newValue, otherValues) => {
    const totalTickets = newValue + otherValues.reduce((acc, val) => acc + val, 0);
    if (totalTickets >= 0 && totalTickets <= 10) {
      setValue(newValue);
    }
  };

  const adultPrice = 71;
  const childPrice = 56;
  const seniorPrice = 56;

  return (
    <div className="ml-20	 max-w-md">
      <h3 className="text-xl font-bold mb-2">Selecciona tus boletos</h3>
      <p className="mb-8">Puedes comprar 10 boletos por transacción.</p>

      <TicketItem>
        <h4>Adulto</h4>
        <p className="ticket-price">${adultPrice}</p>
        <div className="button-container">
          <button
            className="button"
            onClick={() => handleTicketChange(setAdultTickets, adultTickets - 1, [childTickets, seniorTickets])}>-</button>
          <span className="mr-8 ml-8">{adultTickets}</span>
          <button
            className="button active"
            onClick={() => handleTicketChange(setAdultTickets, adultTickets + 1, [childTickets, seniorTickets])}>+</button>
        </div>
      </TicketItem>

      <TicketItem>
        <h4>Niño</h4>
        <p className="ticket-price">${childPrice}</p>
        <div className="button-container">
          <button
            className="button"
            onClick={() => handleTicketChange(setChildTickets, childTickets - 1, [adultTickets, seniorTickets])}>-</button>
          <span className="mr-8 ml-8">{childTickets}</span>
          <button
            className="button active"
            onClick={() => handleTicketChange(setChildTickets, childTickets + 1, [adultTickets, seniorTickets])}>+</button>
        </div>
      </TicketItem>

      <TicketItem>
        <h4>3 Era edad</h4>
        <p className="ticket-price">${seniorPrice}</p>
        <div className="button-container">
          <button
            className="button"
            onClick={() => handleTicketChange(setSeniorTickets, seniorTickets - 1, [adultTickets, childTickets])}>-</button>
          <span className="mr-8 ml-8">{seniorTickets}</span>
          <button
            className="button active"
            onClick={() => handleTicketChange(setSeniorTickets, seniorTickets + 1, [adultTickets, childTickets])}>+</button>
        </div>
      </TicketItem>
    </div>
  );
};

export default TicketSelection;
