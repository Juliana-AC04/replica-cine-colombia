import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled.form`
    .container {
        display: flex;
        flex-direction: column;
        width: 621px; 
        padding: 5px;
        margin: 55px;
    }

    h1 {
        font-family: Roboto;
        font-size: 24px; 
        font-weight: 700; 
        color: #171A1FFF;
    }

    p {
        font-family: Roboto; 
        font-size: 18px; 
        font-weight: 400; 
        color: #303236FF; 
    }

    form {
        display: flex;
        flex-direction: column;
        margin-left: -20px;
        width: 521px;

        label {
            font-family: Roboto; 
            font-size: 14px; 
            line-height: 22px; 
            font-weight: 700;
            margin: 20px;       

            input {
                width: 528px; 
                height: 41px; 
                padding-left: 12px; 
                padding-right: 12px; 
                font-family: Roboto; 
                font-size: 14px; 
                font-weight: 400; 
                background: #F3F4F6FF; 
                border-radius: 6px; 
                border-width: 0px; 
                outline: none; 
            }
        }
    }

    .divShorts {
        display: flex;
        flex-direction: row;

        .labelShort {
            width: 244px; 
            height: 41px;
        }
    }

    button {
        width: 60%; 
        height: 55px; 
        background: #999999FF; 
        border-radius: 28px; 
        box-shadow: 0px 0px 1px #171a1f, 0px 0px 2px #171a1f;
        font-family: Inter; 
        font-size: 16px; 
        font-weight: 400; 
        color: #FFFFFFFF;
        border: none;
    }

    @media (max-width: 700px) {
        .container {
            width: auto; 
        }

        form {
            width: auto; 

            input {
                width: auto;
            }
            
            .divShorts {
                flex-direction: column;
            }
        }
    }

`

export const CompraForm = () => {
  const [email, setEmail] = useState('');
  const [nombreTarjeta, setNombreTarjeta] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaCaducidad, setFechaCaducidad] = useState('');
  const [cvv, setCvv] = useState('');
  const [mostrarResumen, setMostrarResumen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Guardar datos en sessionStorage
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('nombreTarjeta', nombreTarjeta);
    sessionStorage.setItem('numeroTarjeta', numeroTarjeta);
    sessionStorage.setItem('fechaCaducidad', fechaCaducidad);
    sessionStorage.setItem('cvv', cvv);

    // Generar código aleatorio
    const newCodigo = generarCodigo();

    // Calcular total de la compra
    const newTotal = calcularTotal();

    // Guardar código y total en sessionStorage
    sessionStorage.setItem('codigo', newCodigo);
    sessionStorage.setItem('total', newTotal.toString());

    // Mostrar resumen
    setMostrarResumen(true);
  };

  const generarCodigo = () => {
    const numeral = '#';
    const numeros = Math.random().toString().substr(2, 10); // Generar 10 números aleatorios      
    return numeral + numeros;
  };

  const calcularTotal = () => {
    // Lógica para calcular el total de la compra (en este caso, se podría hacer una llamada a una API o realizar algún cálculo local)
    return 100; // Ejemplo de total calculado
  };

  return (
    <div className="flex flex-col w-621 p-5 m-10 ml-10 max-w-full md:w-1/2">
      <h1 className="font-roboto text-lg font-bold text-gray-900">Información personal</h1>
      <p className="font-roboto text-base font-normal text-gray-800">Completa los datos del formulario para realizar el pago.</p>
      <form className="flex flex-col w-196" onSubmit={handleSubmit}>
        <label className="flex flex-col text-sm font-roboto leading-22 font-bold my-5 text-gray-800">Correo electrónico:
          <input className="w-3/4 h-8 text-xs px-px font-roboto font-normal bg-gray-100 rounded-6 border-0 outline-none"  placeholder='Ingrese su correo electrónico' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </label>
        <label className="flex flex-col text-sm font-roboto leading-22 font-bold my-5 text-gray-800"> Nombre en la tarjeta:
          <input className="w-3/4 h-8 text-xs px-pxfont-roboto font-normal bg-gray-100 rounded-6 border-0 outline-none"  placeholder='Ingrese nombre en la tarjeta' type="text" value={nombreTarjeta} onChange={(e) => setNombreTarjeta(e.target.value)} required/>
        </label >
        <label className="flex flex-col text-sm font-roboto leading-22 font-bold my-5 text-gray-800">Número de tarjeta:
          <input className="w-3/4 h-8 text-xs px-px font-roboto font-normal bg-gray-100 rounded-6 border-0 outline-none"  placeholder='1234 1234 1234 1234' type="number" value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)}required/>
        </label>
        <div className="flex flex-row max-md:flex-col">
        <label className="flex flex-col text-sm font-roboto leading-22 font-bold my-5 text-gray-800"> Fecha de caducidad:
          <input className="w-3/4 h-8 text-xs px-px font-roboto font-normal bg-gray-100 rounded-6 border-0 outline-none"  type="month" value={fechaCaducidad} onChange={(e) => setFechaCaducidad(e.target.value)} required/>
        </label>
        <label className="flex flex-col text-sm ml-44 font-roboto leading-22 font-bold my-5 text-gray-800 max-md:mx-[0px]"> CVV:
          <input className="w-3/4 h-8 text-xs px-px font-roboto font-normal bg-gray-100 rounded-6 border-0 outline-none"  placeholder='Enter CVV' type="number" value={cvv} onChange={(e) => setCvv(e.target.value)} required/>
        </label>
        </div>
        <button className="w-96 h-8 bg-gray-600 rounded-lg shadow-md font-inter text-16 font-normal text-white border-none hover:bg-sky-700 max-md:w-auto" type="submit">Pagar</button>
      </form>
      {mostrarResumen && (
        <Navigate to="/resumen" replace />
      )}
    </div>
  );
};
