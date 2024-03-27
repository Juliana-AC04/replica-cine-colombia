const API_TMDB_BASE = `https://api.themoviedb.org/3/movie/`

const API_TMDB = `${API_TMDB_BASE}now_playing`
const API_KEY = `c02f660aec21d09df1bf0a0dd61ed35f`

const endpoint = {
    getAllMovies: `${API_TMDB}?api_key=${API_KEY}&language=es-ES`,
    getMovie: (idMovie) => `${API_TMDB_BASE}${idMovie}?api_key=${API_KEY}&language=es-ES`,
    getVideoMovie: (idMovie) => `${API_TMDB_BASE}${idMovie}/videos?api_key=${API_KEY}&language=es-ES`
}

export default endpoint