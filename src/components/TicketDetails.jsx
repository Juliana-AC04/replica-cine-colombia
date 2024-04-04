import React from "react";
import styled from "styled-components";

export const Boletos = styled.h2`
  position: absolute;
  top: 61px;
  left: 27px;
  font-family: Epilogue;
  font-size: 34px;
  line-height: 48px;
  font-weight: 700;
  color: #bdc1caff; /* neutral-400 */
`;

export const Background = styled.div`
  position: absolute;
  top: 641px;
  left: 432px;
  width: 544px;
  height: 544px;
  background: #11184aff;
  border-radius: 6px; /* border-m */
  box-shadow: 0px 0px 1px #171a1f, 0px 0px 2px #171a1f;
`; /* shadow-xs */

export const Spider = styled.img`
  position: absolute;
  top: 119px;
  left: 24px;
  width: 131px;
  height: 183px;
  border-radius: 6px;
`; /* border-m */



export const Qrcode = styled.img`
  position: absolute;
  width: 218px;
  height: 198px;
  border-radius: 0px;
`;
export const Qrtext = styled.p`
  margin-top: 12rem;
  text-align: center;
`;
export const Color = styled.div`
  position: absolute;
  top: 312px;
    left: 165px;
    width: 187px;
    height: 223px;
  background: #ffffff;
  border-radius: 3px; /* border-xs */
  box-shadow: 0px 0px 1px #171a1f, 0px 0px 2px #171a1f; /* shadow-xs */
`;

export default function TicketDetails() {
  return (
    <Background>
      <div className="Date flex items-end	 flex-col-reverse gap-3	 mt-16  mr-8">
        <div>
          <Boletos>Boletos</Boletos>
        </div>
        <p className="font-bold text-slate-400  	"> 7:30PM</p>
        <p className="text-slate-400			"> 07JUL </p>
      </div>
      <div className="flex flex-row my-5">
        <div>
          <Spider
            src="https://www.sonypictures.com.co/sites/colombia/files/2022-04/SNH_LAS_OnLine_1400x2075.jpg"
            alt="Spider-ticketDetails"
          />
        </div>
        <div className="Info flex flex-col-reverse text-slate-400	ml-40	h-32	 text-2xl">
          <p>Sala: 2</p>
          <p>Asientos:D8,D9,D10,D11</p>
          <p>Complejo: Macro plaza del Mar</p>
          <p> Pelicula:Spider-MainSin Camino a Casa</p>
        </div>
      </div>
      <Color>
        <Qrcode
          src="https://i.blogs.es/32ee74/qrcode-xataka/450_1000.png"
          alt="logo.qr"
        />
        <Qrtext>WQX9KNZ </Qrtext>
      </Color>
    </Background>
  );
}

