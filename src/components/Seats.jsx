import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCouch } from '@fortawesome/free-solid-svg-icons'

export default function Seats() {
  return (
    <div className="flex flex-col max-w-full m-5 p-5 md:w-1/2">
      <h2 className="text-2xl font-bold text-gray-600">Selecciona tus asientos</h2>
      <p className="text-lg text-black mt-2">Para cambiar tu lugar asignado da click en el asiento deseado</p>
      <div className="flex flex-col sm:flex-row my-5">
        <div className='flex flex-row items-center mr-5 '>
          <FontAwesomeIcon icon={faCouch} style={{ color: "#eeeb37", }} className='m-2' />
          <p>Selección</p>
        </div>
        <div className='flex flex-row items-center mr-5 '>
          <FontAwesomeIcon icon={faCouch} style={{ color: "#ea5757", }} className='m-2' />
          <p>Ocupado</p>
        </div>
        <div className='flex flex-row items-center mr-5 '>
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <p>Disponible</p>
        </div>
      </div>

      <div className='flex flex-row'>
        <p>A</p>
        <div>
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
        </div>
        <div className='ml-5'>
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
        </div>
      </div>      
      <div className='flex flex-row'>
        <p>B</p>
        <div>
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
        </div>
        <div className='ml-5'>
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
        </div>
      </div>      
      <div className='flex flex-row'>
        <p>C</p>
        <div>
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
        </div>
        <div className='ml-5'>
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
          <FontAwesomeIcon icon={faCouch} style={{ color: "#3678f3", }} className='m-2' />
        </div>
      </div>
    </div>
  )
}
