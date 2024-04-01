import React, { useState } from "react";
import { Outlet } from "react-router-dom";




export default function Schedule() {
  const [showSummary, setShowSummary] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedButton, setSelectedButton] = useState("");

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setSelectedButton(time);
  };

  const handleCancel = () => {
    setShowSummary(false);
    setSelectedTime("");
    setSelectedButton("");
  };

  const handleConfirmSelection = () => {
    setShowSummary(true);
  };

  const handleConfirmSchedule = () => {
    console.log("Hora confirmada:", selectedTime);
    alert("Hora confirmada:", selectedTime);
    setShowSummary(true);
  };

  return (
    <div className="flex flex-col max-w-full m-5 p-5 md:w-1/2">
      <Outlet/>
      {!showSummary ? (
        <div>
          <h2 className="text-2xl font-bold text-gray-600">
            Horarios Disponibles - 30 de marzo
          </h2>
          <div>
            <p className="text-lg text-black mt-2">Elige el horario que prefieras</p>
            <h3 className="font-bold text-lg mt-5">Macro plaza del mar</h3>
            <div className="flex flex-row my-5">
              <span
                className={`rounded border px-2 py-1 mr-2 cursor-pointer ${selectedButton === "18:00" ? "bg-blue-950 text-white" : "border-slate-500 hover:bg-stone-700 hover:text-white"}`}
                onClick={() => handleTimeSelection("18:00")}
              >
                18:00
              </span>
              <span
                className={`rounded border px-2 py-1 mr-2 cursor-pointer ${selectedButton === "19:30" ? "bg-blue-950 text-white" : "border-slate-500 hover:bg-stone-700 hover:text-white"}`}
                onClick={() => handleTimeSelection("19:30")}
              >
                19:30
              </span>
              <span
                className={`rounded border px-2 py-1 mr-2 cursor-pointer ${selectedButton === "21:05" ? "bg-blue-950 text-white" : "border-slate-500 hover:bg-stone-700 hover:text-white"}`}
                onClick={() => handleTimeSelection("21:05")}
              >
                21:05
              </span>
            </div>
          </div>
          <button className="bg-slate-400 p-2 text-white rounded-full hover:bg-blue-950" onClick={handleConfirmSelection}>
            Seleccionar boletos
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-gray-600">
            RESUMEN DE COMPRA
          </h2>
          <section>
            <p>Nombre de la película</p>
            <p>Hora seleccionada: {selectedTime}</p>
            <p>Total</p>
          </section>
          <div className="flex justify-between mt-4">
            <button className="bg-slate-400 p-2 text-white rounded-full hover:bg-blue-950" onClick={handleConfirmSchedule}>
              Continuar
            </button>
            <button className="bg-red-500 p-2 text-white rounded-full hover:bg-red-700" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}