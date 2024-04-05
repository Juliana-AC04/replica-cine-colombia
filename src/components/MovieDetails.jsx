import { useEffect, useState } from "react";
import { getMovie, getTrailerMovie } from "../services/movieServices";

export default function MovieDetails({ idMovie = 0 }) {
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState("");

  useEffect(() => {
    getMovie(idMovie)
      .then((response) => {
        setMovie(response);
      })
      .catch((error) => console.error(error));
  }, [idMovie]);

  useEffect(() => {
    getTrailerMovie(idMovie)
      .then((response) => {
        setVideo(response.key);
      })
      .catch((error) => console.error(error));
  }, [idMovie]);

  return (
    <div className="max-w-full md:w-1/2 p-5 m-5">
      {movie && (
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 sm:mr-5 mb-5 sm:mb-0">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full h-auto  md:h-48 lg:h-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-600">
              {movie.title}
            </h2>
            <p className="text-lg text-gray-500">{movie.original_title} ({movie.release_date})</p>
            <div className="flex flex-wrap">
              <span className="bg-[#a8a29e] text-white mt-1 mr-1 p-2 rounded">
                {movie.vote_average} Votos
              </span>
              <span className="bg-[#020617] text-white mt-1 mr-1 p-2 rounded">
                {movie.runtime} min
              </span>
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-[#1e3a8a] text-white mt-1 mr-1 p-2 rounded"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="max-w-full mt-5 sm:w-full">
        <h3 className="text-lg text-base font-bold text-slate-600">Trailer</h3>
        {video && (
          <iframe
            src={`https://www.youtube.com/embed/${video}`}
            title="movie-trailer"
            className="w-full h-64"
          />
        )}
        <h3 className="text-lg font-bold text-slate-600 mt-5">Sinopsis</h3>
        <p className="text-lg font-normal">{movie?.overview}</p>
      </div>
    </div>
  );
}
