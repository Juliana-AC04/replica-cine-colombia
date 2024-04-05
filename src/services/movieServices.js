import axios from "axios"
import endpoint from "./endpoint"
import endpointBack from "./endpointBack";

export const getAllMovies = async() =>{
    try {
        const {data} = await axios.get(endpoint.getAllMovies);
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}

export const getMovie = async(idMovie) =>{
    try {
        const {data} = await axios.get(endpoint.getMovie(idMovie));
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

export const getTrailerMovie = async (idMovie)=>{
    try{
        const {data} = await axios.get(endpoint.getVideoMovie(idMovie));
        return data.results.find((item)=> item.type.toLowerCase()== 'trailer')
    } catch (error) {
        console.error(error);
        return []
    }
}

export const getGenres = async () => {
    try {
        const response = await axios.get(endpoint.getGenres);
        return response.data.genres;
    } catch (error) {
        console.error(error);
        return []
    }
}

export const getMovieSchedule = async (idMovie) =>{
    try {
        const {data} = await axios.get(endpointBack.getMovieSchedule(idMovie));
        return data
    } catch (error) {
        console.error(error);
        return []
    }
}

export const getTheatreName = async (idTeatro) => {
    try {
      const {data} = await  axios.get(endpointBack.getTeatro(idTeatro));
      return data
    } catch (error) {
        console.error(error);
        return []
    }
  };

  export const getTicketInfo = async (idProgramacion) => {
    try {
      const {data} = await axios.get(endpointBack.getTicketInfo(idProgramacion));
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  