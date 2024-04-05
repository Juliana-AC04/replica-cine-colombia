import React from "react";
import styled from "styled-components";

// Contenedor
export const Background = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 60%;
  max-width: 35rem;
  background: #11184aff;
  border-radius: 6px;
  box-shadow: 0px 0px 1px #171a1f, 0px 0px 2px #171a1f;

  @media screen and (min-width: 425px) and (max-width: 1047px) {
    margin-top: 4rem;
  }
`;

// Imagen de Spiderman
export const Spider = styled.img`
  position: absolute;
  top: 119px;
  left: 24px;
  width: 131px;
  height: 183px;
  border-radius: 6px;
`;

// Contenedor del Qr
export const Color = styled.div`
  position: absolute;
  top: 21rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 187px;
  height: auto;
  max-height: 223px;
  background: #ffffff;
  border-radius: 3px;
  box-shadow: 0px 0px 1px #171a1f, 0px 0px 2px #171a1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 773px) and (max-width: 1055px) {
    width: 28%;
    margin-top: 3rem;
  }

  @media screen and (min-width: 300px) and (max-width: 440px) {
    width: 41%;
    max-width: none;
    margin-top: 6rem;
  }
`;

// QR
export const Qrcode = styled.img`
  width: 97%;
  height: auto;
  max-height: 82%;
`;

// Texto del QR
export const Qrtext = styled.p`
  margin-top: 0rem;
  text-align: center;
  width: 90%;
`;

export default function TicketDetails() {
  return (
    <Background>
      <div className="Date flex items-end flex-col-reverse gap-3 mt-4	 mr-8">
        <div>
          <h2 className="absolute top-14 left-6 font-epilogue text-2xl font-semibold text-slate-400">
            Boletos
          </h2>
        </div>
        <p className="font-bold text-slate-400"> 7:30PM</p>
        <p className="text-slate-400"> 07JUL </p>
      </div>
      <div className="flex flex-row my-5">
        <Spider
          src="https://www.sonypictures.com.co/sites/colombia/files/2022-04/SNH_LAS_OnLine_1400x2075.jpg"
          alt="Spider-ticketDetails"
        />
        <div className="Info flex flex-col-reverse text-slate-400  md:flex-row md:flex-wrap  md:text-left md:text-2xl  lg:justify-between ml-40  h-auto">
          <p className="mx-2 md:w-1/2 lg:w-full">Sala: 2</p>
          <p className="mx-2 md:w-1/2 lg:w-full">Asientos: D8, D9, D10, D11</p>
          <p className="mx-2 md:w-1/2 lg:w-full">
            Complejo: Macro plaza del Mar
          </p>
          <p className="mx-2 md:w-1/2 lg:w-full">
            Película: Spider-MainSin Camino a Casa
          </p>
        </div>
      </div>
      <Color>
        <Qrcode
          src="https://i.blogs.es/32ee74/qrcode-xataka/450_1000.png"
          alt="logo.qr"
        />
        <Qrtext>WQX9KNZ</Qrtext>
      </Color>
    </Background>
  );
}
