import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CompraForm = () => {
  const [email, setEmail] = useState('');
  const [nombreTarjeta, setNombreTarjeta] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaCaducidad, setFechaCaducidad] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Guardar datos en sessionStorage
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('nombreTarjeta', nombreTarjeta);
    sessionStorage.setItem('numeroTarjeta', numeroTarjeta);
    sessionStorage.setItem('fechaCaducidad', fechaCaducidad);
    sessionStorage.setItem('cvv', cvv);
    
     // Navega a la página de resumen reemplazando la parte "/pago" con "/resumen"
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace('/pago', '/resumen');
    navigate(newPath, { replace: true });
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
    </div>
  );
};
