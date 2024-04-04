import React from 'react'
import styled from "styled-components";

export const Boletos = styled.h2`
position: absolute; 
top: 100px; 
left: 27px; 
font-family: Epilogue; 
font-size: 34px; 
line-height: 48px; 
font-weight: 700; 
color: #BDC1CAFF; /* neutral-400 */

`;

export const Background = styled.div`
position: absolute; 
top: 641px; 
left: 432px; 
width: 544px; 
height: 655px; 
background: #11184AFF; 
border-radius: 6px; /* border-m */
box-shadow: 0px 0px 1px #171a1f, 0px 0px 2px #171a1f;` /* shadow-xs */
; 

export const Spider = styled.img`
position: absolute; 
  top: 183px; 
  left: 24px; 
  width: 131px; 
  height: 183px; 
  border-radius: 6px;` /* border-m */


export const Text = styled.h5 `
position: absolute; 
top: 185px; 
left: 157px; 
font-family: Epilogue; 
font-size: 22px; 
line-height: 34px; 
font-weight: 700; 
color: #858CB5FF; 
`;

export const Text1 = styled.h6 `
position: absolute; 
top: 225px; 
left: 153px; 
font-family: Epilogue; 
font-size: 22px; 
line-height: 34px; 
font-weight: 700; 
color: #858CB5FF; 
`;
export const Text2 = styled.h6 `
position: absolute; 
top: 262px; 
left: 153px; 
font-family: Epilogue; 
font-size: 22px; 
line-height: 34px; 
font-weight: 700; 
color: #858CB5FF; 
`;

export const Text3 = styled.h6 `
position: absolute; 
  top: 303px; 
  left: 162px; 
  font-family: Epilogue; 
  font-size: 22px; 
  line-height: 34px; 
  font-weight: 700; 
  color: #858CB5FF; 
`;

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
  top: 390px; 
  left: 165px; 
  width: 219px; 
  height: 247px; 
  background: #FEFFFFFF; 
  border-radius: 3px; /* border-xs */
  box-shadow: 0px 0px 1px #171a1f, 0px 0px 2px #171a1f; /* shadow-xs */
`;
export const Date = styled.div`
position: absolute; 
  top: 390px; 
  left: 165px; 
  width: 219px; 
  height: 247px; 
  background: #FEFFFFFF; 
  border-radius: 3px; /* border-xs */
  box-shadow: 0px 0px 1px #171a1f, 0px 0px 2px #171a1f; /* shadow-xs */
`;
export const Time = styled.div`
position: absolute; 
  top: 390px; 
  left: 165px; 
  width: 219px; 
  height: 247px; 
  background: #FEFFFFFF; 
  border-radius: 3px; /* border-xs */
  box-shadow: 0px 0px 1px #171a1f, 0px 0px 2px #171a1f; /* shadow-xs */
`;






export default function TicketDetails() {
  return (
    <Background>
    <div className="flex flex-row my-5">
        <div>
            <Boletos >Boletos</Boletos>
        </div>
        <Date> 7 De julio </Date>
        <Time> 7:30 PM</Time>
    </div>
    <div className="flex flex-row my-5">
        <div>
            <Spider src="https://www.sonypictures.com.co/sites/colombia/files/2022-04/SNH_LAS_OnLine_1400x2075.jpg" alt="Spider-ticketDetails" />
        </div>
        <div>
            <Text> Pelicula:Spider-MainSin Camino a Casa</Text>
            <Text1>Complejo: Macro plaza del Mar</Text1>
            <Text2 >Asientos:D8,D9,D10,D11</Text2 >
            <Text3 >Sala: 2</Text3 >
        </div>
    </div>
    <Color>
        <Qrcode src="https://i.blogs.es/32ee74/qrcode-xataka/450_1000.png" alt="logo.qr" />
        < Qrtext>WQX9KNZ </Qrtext>
    </Color>

    </Background>
    

  )
}
