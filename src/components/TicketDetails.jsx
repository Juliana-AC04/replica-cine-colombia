import React from 'react'
import {Boletos, Background, Spider,Text,Text1,Text2, Text3,Qrcode, Qrtext,Color, Date,Time} from './StyledTiketdetails'

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
    <color>
        <Qrcode src="https://i.blogs.es/32ee74/qrcode-xataka/450_1000.png" alt="logo.qr" />
        < Qrtext>WQX9KNZ </Qrtext>
    </color>

    </Background>
    

  )
}
