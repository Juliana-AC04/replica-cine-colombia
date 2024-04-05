import { useEffect, useState } from "react";
import { getMovieSchedule, getTheatreName, getTicketInfo } from "../services/movieServices";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';

export default function Seats() {
  const { idMovie } = useParams();
  const [schedule, setSchedule] = useState({});
  const [idTeatro, setIdTeatro] = useState(null);
  const [sala, setSala] = useState(null);
  const [idProgramacion, setIdProgramacion] = useState(null);
  const [asientos, setAsientos] = useState({});
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);
  const [asientosOcupados, setAsientosOcupados] = useState([]);

  useEffect(() => {
    getMovieSchedule(idMovie)
      .then((response) => {
        if (response.length > 0) {
          const scheduleData = response[0];
          setSchedule(scheduleData);
          setIdTeatro(scheduleData.idTeatro);
          setSala(scheduleData.sala);
          setIdProgramacion(scheduleData.id);
        }
      })
      .catch((error) => console.error(error));
  }, [idMovie]);

  useEffect(() => {
    if (idTeatro && sala) {
      getTheatreName(idTeatro)
        .then((response) => {
          if (`Sala${sala}` in response[0].asientos) {
            setAsientos(response[0].asientos[`Sala${sala}`]);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [idTeatro, sala]);

  useEffect(() => {
    if (idProgramacion) {
      getTicketInfo(idProgramacion)
        .then((ticketInfo) => {
          const ocupados = ticketInfo.map((ticket) => ticket.codigoAsiento);
          setAsientosOcupados(ocupados);
        })
        .catch((error) => console.error(error));
    }
  }, [idProgramacion]);

  const handleSeatClick = (asiento) => {
    if (asientosOcupados.includes(asiento)) {
      return;
    }

    if (asientosSeleccionados.includes(asiento)) {
      setAsientosSeleccionados(asientosSeleccionados.filter((seat) => seat !== asiento));
    } else {
      setAsientosSeleccionados([...asientosSeleccionados, asiento]);
    }
  };

  return (
    <div className="flex flex-col max-w-full m-5 p-5 md:w-1/2">
      <h2 className="text-2xl font-bold text-gray-600">Selecciona tus asientos</h2>
      <p className="text-lg text-black mt-2">Para cambiar tu lugar asignado da click en el asiento deseado</p>
      <div className="flex flex-col sm:flex-row my-5">
        <div className='flex flex-row items-center mr-5 '>
          <FontAwesomeIcon icon={faCouch} style={{ color: "#eeeb37" }} className='m-2' />
          <p>Selección</p>
        </div>
        <div className='flex flex-row items-center mr-5 '>
          <FontAwesomeIcon icon={faCouch} style={{ color: "#ea5757" }} className='m-2' />
          <p>Ocupado</p>
        </div>
        <div className='flex flex-row items-center mr-5 '>
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3" }} className='m-2' />
          <p>Disponible</p>
        </div>
      </div>
      <p>Sala: {sala}</p>
      <p>Asientos:</p>
      <div className="flex flex-col">
        {Object.keys(asientos).map((letra, index) => (
          <div key={index} className="flex flex-wrap mb-5">
            <div className="flex flex-wrap">
              <p className="inline-block w-4">{letra}</p>
              {asientos[letra].slice(0, 7).map((asiento, index) => (
                <div key={index} onClick={() => handleSeatClick(`${letra}${index + 1}`)} className="flex items-center justify-center cursor-pointer">
                  <FontAwesomeIcon
                    icon={faCouch}
                    style={{ color: asientosOcupados.includes(`${letra}${index + 1}`) ? "#ea5757" : (asientosSeleccionados.includes(`${letra}${index + 1}`) ? "#eeeb37" : "#3678f3") }}
                    className="mr-2"
                  />
                </div>
              ))}
            </div>
            <div className="ml-4 flex flex-wrap">
              {asientos[letra].slice(7).map((asiento, index) => (
                <div key={index} onClick={() => handleSeatClick(`${letra}${index + 8}`)} className="flex items-center justify-center cursor-pointer">
                  <FontAwesomeIcon
                    icon={faCouch}
                    style={{ color: asientosOcupados.includes(`${letra}${index + 8}`) ? "#ea5757" : (asientosSeleccionados.includes(`${letra}${index + 8}`) ? "#eeeb37" : "#3678f3") }}
                    className="ml-2"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p>Asientos seleccionados: {asientosSeleccionados.join(", ")}</p>
    </div>
  );
}
