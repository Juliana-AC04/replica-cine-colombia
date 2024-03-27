import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import ListMovies from "../components/ListMovies";
import { getAllMovies, getTrailerMovie } from "../services/movieServices";


export default function Index() {

  const [movies, setmovies] = useState([])
  const [video, setvideo] = useState("")

  useEffect(() => {
    getAllMovies().then((response) => {
      console.log(response);
      setmovies(response);
    }).catch((error) => console.error(error));
  }, [])

  useEffect(()=>{
    getTrailerMovie(1011985).then((response)=> {
      console.log(response);
      setvideo(response.key);
    }).catch((error)=> console.error(error))
  }, [])

  return (
    <div>
      <h1>Movies</h1>
      <iframe src={`https://www.youtube.com/embed/${video}`}></iframe>
      <Header></Header>
      <Carousel></Carousel>
      <ListMovies></ListMovies>
    </div>
  )
}
