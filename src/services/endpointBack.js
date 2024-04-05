const URL_BASE = "https://miniback-webpack.onrender.com/";

const endpointBack = {
  getTeatro: (idTeatro) => `${URL_BASE}teatros?id=${idTeatro}`,
  programacion: `${URL_BASE}programacion`,
  getMovieSchedule: (idMovie) => `${URL_BASE}programacion?idPelicula=${idMovie}`,
  getTicketInfo:(idProgramacion) => `${URL_BASE}tiquetescomprados?idProgramacion=${idProgramacion}`

};

export default endpointBack;