const URL_BASE = "https://miniback-webpack.onrender.com/";

const endpointBack = {
  getTeatro: (idTeatro) =>
  `${URL_BASE}programacion?idTeatro=${idTeatro}`,
  programacion: `${URL_BASE}programacion`,
  getMovieSchedule: (idMovie) => `${URL_BASE}programacion?idPelicula=${idMovie}`,

};

export default endpointBack;