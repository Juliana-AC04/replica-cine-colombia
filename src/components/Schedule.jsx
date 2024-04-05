import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { getMovie, getMovieSchedule } from "../services/movieServices";
import Swal from "sweetalert2";
import SelectedTimeContext from "./context/SelectedTimeContext";

export default function Schedule() {
  const [showSummary, setShowSummary] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");
  const [movieInfo, setMovieInfo] = useState(null);
  const navigate = useNavigate();
  const { idMovie } = useParams();
  const { selectedTime, setSelectedTime } = useContext(SelectedTimeContext);
  const [schedule, setSchedule] = useState([]);
  
  
  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        if (idMovie) {
          const movieData = await getMovie(idMovie);
          setMovieInfo(movieData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieInfo();
  }, [idMovie]);

  useEffect(() => {
    getMovieSchedule(idMovie)
      .then((response) => {
        setSchedule(response);
      })
      .catch((error) => console.error(error));
  }, [idMovie]);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const options = {year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate2 = new Intl.DateTimeFormat('es-ES', options).format(currentDate);

  const availableHours = schedule.find(item => item.fechas.includes(formattedDate))?.horas;

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
    if (selectedTime) {
      setShowSummary(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Por favor, selecciona un horario antes de continuar.",
        icon: "error",
        title: "¡Error!",
        text: "Por favor, selecciona un horario antes de continuar.",
      });
    }
  };

  const handleConfirmSchedule = () => {
    if (selectedTime) {
      setShowSummary(true);
      navigate(`/details/${idMovie}/movie/tickets`);
    } else {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Por favor, selecciona un horario antes de continuar.",
      });
    }
  };

  return (
    <div className="flex flex-col max-w-[34%] m-5 p-5 md:w-1/2">
      <Outlet />
      {!showSummary ? (
        <div>
          <h2 className="text-2xl font-bold text-gray-600">
            Horarios Disponibles - {formattedDate2}
          </h2>
          <div>
            <p className="text-lg text-black mt-2">
              {availableHours ? "Elige el horario que prefieras" : "No hay horas disponibles para esta película en esta fecha"}
            </p>
            {availableHours && (
              <div>
                <h3 className="font-bold text-lg mt-5">Macro plaza del mar</h3>
                <div className="flex flex-row my-5">
                  {availableHours.map((time, index) => (
                    <span
                      key={index}
                      className={`rounded border px-2 py-1 mr-2 cursor-pointer ${
                        selectedButton === time
                          ? "bg-blue-950 text-white"
                          : "border-slate-500 hover:bg-stone-700 hover:text-white"
                      }`}
                      onClick={() => handleTimeSelection(time)}
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          {availableHours && (
            <button
              className="bg-slate-400 p-2 text-white w-full rounded-full hover:bg-blue-950"
              onClick={handleConfirmSelection}
            >
              Seleccionar boletos
            </button>
          )}
        </div>
      ) : (
        <div className="bg-[#F4F4F4FF] p-4 rounded-lg">
          <h2 className="text-2xl font-epilogue font-bold text-gray-600 pb-3">
            Resumen de compra
          </h2>
          <section className="font-roboto">
            <figure className="flex gap-3">
              <img
              className={`shadow-sm w-[5.6rem] h-[8rem] p-1 pb-3 border-2`} 
              src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt={movieInfo.title}
               />
               <figcaption>
               <p><span className="font-bold">Pelicula:</span> {movieInfo.title}</p>
            <p><span className="font-bold">Complejo:</span> Macro Plaza del Mar</p>
            <p><span className="font-bold">Fecha:</span>{formattedDate}</p>
            <p><span className="font-bold">Función:</span> {selectedTime}</p>
               </figcaption>
            </figure>

            <p className="pt-8 pb-4">
              Se realizara un cargo por servicio por cada boleto dentro de la
              orden.
            </p>
            {/* <div className="flex justify-between">
              <p className="font-bold">{`Total(IVA incluido):`}</p>
              <p>$0</p>
            </div> */}
          </section>
          <div className="flex justify-between mt-4">
            <button
              className="bg-slate-400 p-2 text-white rounded-full hover:bg-blue-950 w-[58%]"
              onClick={handleConfirmSchedule}
            >
              Continuar
            </button>
            <button
              className="bg-red-500 p-2 text-white rounded-full w-[40%] hover:bg-red-700"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
