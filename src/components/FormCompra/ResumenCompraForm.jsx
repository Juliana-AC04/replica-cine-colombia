import React from 'react';
import styled from 'styled-components';

const StyledTransac = styled.form`
    .containerExito {
      display: flex;
      margin: 50px;
      width: 1180px; 
      height: 111px; 
      background: #FBFAF4FF; 
      border-radius: 6px;
      border-width: 1px; 
      border-color: #3B3416FF; 
      border-style: solid; 
      img{
        margin-top: 34px; 
        margin-left: 33px; 
        width: 44px; 
        height: 44px; 
        fill: #3B3416FF;
      }
      h1{
        margin-top: 41px; 
        margin-left: 33px; 
        font-family: Roboto; /* Body */
        font-size: 20px; 
        line-height: 30px; 
        font-weight: 700; 
        color: #323743FF;
      }
    }

    .etiqueta{
      width: 100px;
      height: 36px; 
      padding: 0 12px; 
      display: flex; 
      align-items: center; 
      justify-content: flex-start;
      font-family: Roboto; 
      font-size: 14px; 
      line-height: 22px; 
      font-weight: 400; 
      color: #19508AFF; /* primary-500 */
      background: #F2F7FDFF; /* primary-100 */
      opacity: 1; 
      border: none; 
      border-radius: 6px;
      margin-left: 1180px;
    }

    .infoCompra{
      margin-top: 3px; 
      margin-left: 50px; 
      font-family: Roboto;
      height: 200px;
      div {
        display: flex;
        margin-top: 50px;
        justify-content: space-around;
        width: 1000px;
        margin-left: -80px;
        h5 {
          font-family: Roboto; /* Body */
          font-size: 16px; 
          line-height: 26px; 
          font-weight: 400; 
          color: #6F7787FF;
        }
        p{
          font-family: Roboto; /* Body */
          font-size: 16px; 
          line-height: 26px; 
          font-weight: 400; 
          color: #171A1FFF; 
        }
      }
      h2{
        font-size: 24px; 
        line-height: 36px; 
        font-weight: 700; 
        color: #171A1FFF;
      }
    }

    @media (max-width: 1074px) {
        .containerExito {
            width: auto; 
        }

        .etiqueta{
          margin-left: 60px;
        }

        .infoCompra{
          height: 350px;
          div{
            width: auto;
            flex-direction:column;
            margin-left: 0px;
          }
          
        }
    }

`

const ResumenCompra = () => {
  // Obtener datos del sessionStorage
  const codigo = sessionStorage.getItem('codigo');
  const total = sessionStorage.getItem('total');
  const numeroTarjeta = sessionStorage.getItem('numeroTarjeta');

  return (
    <StyledTransac>
    <div className='containerExito'>
        <img src="src\assets\resumenCompra\circle-half-dotted-check@2x.png" alt="exitoIcon" />
        <h1>¡Transacción exitosa!</h1>
    </div>
    <label className='etiqueta'><p>Facturación</p></label>        
    <div className='infoCompra'>
      <h2>Información de la compra</h2>
      <div>
      <label><h5>Código</h5><p>{codigo}</p></label>
      <label><h5>Fecha </h5><p>{new Date().toISOString().slice(0, 10)}</p></label>
      <label><h5>Total</h5><p>{total}</p></label>
      <label><h5>Método de pago</h5><p>{numeroTarjeta}</p></label>
      </div>      
    </div>
    </StyledTransac>
  );
};

export default ResumenCompra;
