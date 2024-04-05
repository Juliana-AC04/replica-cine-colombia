import { useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getMovie } from "../services/movieServices";
import SelectedTimeContext from "./context/SelectedTimeContext";
import TicketContext from "./context/TicketContext";

export default function Summary() {
  const { idMovie } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const { selectedTime } = useContext(SelectedTimeContext);
  const { tickets } = useContext(TicketContext);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        const movieInfo = await getMovie(idMovie);
        setMovieInfo(movieInfo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieInfo();
  }, [idMovie]);

  const handleConfirmSchedule = () => {
    console.log('continuar')
  }

  const adultPrice = 71;
  const childPrice = 56;
  const seniorPrice = 56;

  const totalPrice =
    tickets.adultTickets * adultPrice +
    tickets.childTickets * childPrice +
    tickets.seniorTickets * seniorPrice;

  return (
    <>
      <div className="flex justify-between w-4/5 m-20 mx-auto">
        <Outlet />
        <section className="bg-[#F4F4F4FF] w-[43%] p-4 rounded-lg">
        <h2 className="text-2xl font-epilogue font-bold text-gray-600 pb-3">
            Resumen de compra
        </h2>

        <div className="font-roboto text-lg">
          {movieInfo && (
            <figure className="flex gap-3">
            <img
              className={`shadow-sm w-[5.6rem] h-[8rem] p-1 pb-3 border-2`}
              src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
              alt={movieInfo.title}
            />
            <figcaption>
              <p>
                <span className="font-bold">Pelicula:</span> {movieInfo.title}
              </p>
              <p>
                <span className="font-bold">Complejo:</span> Macro Plaza del
                Mar
              </p>
              <p>
                <span className="font-bold">Fecha:</span> 07 Julio del 2023
              </p>
              <p>
                <span className="font-bold">Función:</span> {selectedTime}
              </p>
              <div className="flex flex-wrap">
              <p>
                    <span className="font-bold">Boletos:</span>
                 </p>
                 {tickets.adultTickets > 0 && (
                    <p>Adultos({tickets.adultTickets})&nbsp;</p>
                 )}
                 {tickets.childTickets > 0 && (
                    <p> Niños({tickets.childTickets})&nbsp;</p>
                 )}
                 {tickets.seniorTickets > 0 && (
                    <p> 3ra Edad({tickets.seniorTickets})</p>
                 )}
              </div>
            </figcaption>
          </figure>
          )}
          <section className="p-1">
            <p className="pt-8 pb-4">
                Se realizara un cargo por servicio por cada boleto dentro de la
                orden.
              </p>
              <div className="flex justify-between font-bold">
                <p>{`Total(IVA incluido):`}</p>
                <p className="text-[2.563rem]">${totalPrice}</p>
              </div>

              <div className="flex justify-center pt-7">
              <button
              className="bg-slate-400 p-2 text-white rounded-full hover:bg-blue-950 w-[94%]"
              onClick={handleConfirmSchedule}
            >
              Continuar
            </button>
            </div>
          </section>
        </div>
        </section>
      </div>
    </>
  );
}
