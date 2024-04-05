import { useContext, useEffect, useState } from "react";
import { getMovie, getAllMovies, getGenres } from "../services/movieServices";
import { useNavigate } from "react-router-dom";
import { SelectedMoviesContext } from "./Layout/Layout";
import SelectedGenerContext from "./NavBar/SelectedGenerContext";

const getClassification = (adult, voteAverage) => {
  if (adult) {
    return "Para mayores de 18 años";
  } else {
    if (voteAverage >= 7) {
      return "Apto para mayores de 15 años";
    } else if (voteAverage >= 6 || voteAverage < 6) {
      return "Apto para todo publico";
    }
  }
};


const Items = ({ movies, genres, movieRuntimes }) => {
  // const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const handleClick = idMovie => {
    navigate(`details/${idMovie}`);
  };
  return (
    <>
      {movies.slice(0, 8).map((movie) => (
        <li
          key={movie.id}
          className={`flex flex-row gap-4 p-4 mb-4 rounded-md ${'lg:w-72 lg:flex-col lg:bg-transparent lg:shadow-none'
            } bg-gray-100 shadow-xl text-[#171A1FFF]`}
        >
          <figure>
            <img
              className={`shadow-md w-56 h-full rounded-md ${'lg:w-[90%] lg:h-[18rem]'}`}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title}`}
              onClick={() => handleClick(movie.id)}
            />
          </figure>
          <div className=" lg:w-[14.7rem] ">
            <figcaption className="flex-col">
              <h3 className="font-bold text-lg">{movie.title}</h3>
              <div className="text-xs">
                <p>Titulo en ingles: {movie.original_title}</p>
                <p>Estreno: {movie.release_date}</p>
                <p>
                  Generos:{" "}
                  {movie.genre_ids
                    .slice(0, 3)
                    .map((genreId) => genres[genreId])
                    .join(", ")}
                </p>
              </div>
              <div className="flex flex-wrap text-[0.6875rem] mt-3 gap-2">
                <p
                  className={`bg-zinc-200 px-3 shadow-md rounded-md p-1 ${movie.adult
                      ? "text-blue-500"
                      : movie.vote_average >= 7
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                >
                  {getClassification(movie.adult, movie.vote_average)}
                </p>
                <p className="bg-zinc-200 rounded-md px-3 shadow-md w-auto p-1">
                  {movieRuntimes[movie.id]} Min
                </p>
              </div>
            </figcaption>
          </div>
        </li>
      ))}
    </>
  );
};

export default function ListMovies() {
  const { selectedMovies } = useContext(SelectedMoviesContext);
  const { selectedGenre } = useContext(SelectedGenerContext); // Accede al género seleccionado
 
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [movieRuntimes, setMovieRuntimes] = useState({});
 
  useEffect(() => {
     const showData = async () => {
       try {
         const moviesData = await getAllMovies();
         const genresData = await getGenres();
 
         const genresObject = {};
         genresData.forEach((genre) => {
           genresObject[genre.id] = genre.name;
         });
 
         setGenres(genresObject);
 
         // Filtrar las películas seleccionadas y por género solo si hay un género seleccionado
         const selectedMoviesData = selectedGenre
           ? moviesData.results.filter(movie => 
               selectedMovies.includes(movie.id) && 
               movie.genre_ids.some(genreId => genresObject[genreId] === selectedGenre) // Asegúrate de que esto funcione según tu estructura de datos
             )
           : moviesData.results.filter(movie => selectedMovies.includes(movie.id));
 
         // Obtener los datos de las películas seleccionadas
         const runtimeData = {};
         for (const movie of selectedMoviesData) {
           const movieData = await getMovie(movie.id);
           runtimeData[movie.id] = movieData.runtime;
         }
 
         setMovieRuntimes(runtimeData);
         setMovies(selectedMoviesData); // Actualizar el estado con las películas seleccionadas
       } catch (error) {
         console.error(error);
       }
     };
 
     showData();
  }, [selectedMovies, selectedGenre]);


  return (
    <div className={`flex flex-col gap-2 font-inter ${'lg:flex'}`}>
      <h2 className="w-11/12 py-8 mx-auto text-lg font-medium">EN CARTELERA</h2>
      <ul className="flex flex-wrap gap-2 mx-auto lg:w-11/12 lg:flex lg:justify-around lg:pb-8">
        <Items movies={movies} genres={genres} movieRuntimes={movieRuntimes} />
      </ul>

    </div>
  );
}
