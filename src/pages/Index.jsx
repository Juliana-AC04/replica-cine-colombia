import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import ListMovies from "../components/ListMovies";
import { getAllMovies} from "../services/movieServices";
import MovieDetails from "../components/MovieDetails";


export default function Index() {

  const [movies, setmovies] = useState([])
  

  useEffect(() => {
    getAllMovies().then((response) => {
      console.log("todas",response);
      setmovies(response);
    }).catch((error) => console.error(error));
  }, [])

  return (
    <div>
      <Header></Header>
      <MovieDetails></MovieDetails>
      <Carousel></Carousel>
      <ListMovies></ListMovies>
    </div>
  )
}
