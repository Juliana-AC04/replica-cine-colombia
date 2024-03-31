export default function Schedule() {
  return (
    <div className="flex flex-col max-w-full m-5 p-5 md:w-1/2">
      <h2 className="text-2xl font-bold text-gray-600">Horarios Disponibles - 30 de marzo</h2>
      <p className="text-lg text-black mt-2">Elige el horario que prefieras</p>
      <h3 className="font-bold text-lg mt-5">Macro plaza del mar</h3>
      <div className="flex flex-row my-5">
      <span className="rounded border border-slate-500 px-2 py-1 mr-2 hover:bg-stone-700 hover:text-white cursor-pointer">18:00</span>
      <span className="rounded border border-slate-500 px-2 py-1 mr-2 hover:bg-stone-700 hover:text-white cursor-pointer">19:30</span>
      <span className="rounded border border-slate-500 px-2 py-1 mr-2 hover:bg-stone-700 hover:text-white cursor-pointer">21:05</span>
      </div>
      <button className="bg-slate-400 p-2 text-white rounded-full hover:bg-blue-950">Seleccionar boletos</button>
    </div>
  )
}
