import { useEffect, useState } from "react";
import { getMovie, getTrailerMovie } from "../services/movieServices";

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [video, setVideo] = useState("");

    useEffect(() => {
        getMovie(1011985)
            .then((response) => {
                setMovie(response);
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        getTrailerMovie(1011985)
            .then((response) => {
                setVideo(response.key);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="max-w-full md:w-1/2 p-5 m-5">
            {movie && (
                <div className="flex flex-row">
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} className="w-1/2 md:w-32 lg:w-48 h-auto" />
                    <div className="ml-5 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-gray-600">{movie.original_title}</h2>
                        <p className="text-lg text-gray-500">{movie.release_date}</p>
                        <div className="w-1/2 flex flex-wrap">
                            <span className="bg-stone-700 text-white mt-1 mr-1 p-2 rounded">{movie.vote_average} Votos</span>
                            <span className="bg-[#020617] text-white mt-1 mr-1 p-2 rounded">{movie.runtime} min</span>
                            {movie.genres.map((genre) => (
                                <span key={genre.id} className="bg-blue-950 text-white mt-1 mr-1 p-2 rounded">{genre.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div className="max-w-full mt-5">
                <h3 className="text-lg font-bold text-slate-600">Trailer</h3>
                {video && <iframe src={`https://www.youtube.com/embed/${video}`} title="movie-trailer" className="w-full h-64" />}
                <h3 className="text-lg font-bold text-slate-600 mt-5">Sinopsis</h3>
                <p className="text-lg font-normal">{movie?.overview}</p>
            </div>
        </div>
    );
}
