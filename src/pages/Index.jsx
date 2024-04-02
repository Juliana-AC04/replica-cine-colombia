import { CompraForm } from "../components/FormCompra/CompraForm";
import Header from "../components/Header";
import ListMovies from "../components/ListMovies";
import MovieDetails from "../components/MovieDetails";
import Schedule from "../components/Schedule";
import Seats from "../components/Seats";


export default function Index() {
  return (
    <div>
      <Header/>
      <ListMovies></ListMovies>
      <div className="flex flex-col sm:flex-row">
        <MovieDetails/>
        <Schedule/>
      </div>
      <ListMovies/>
      <CompraForm/>
      <Seats></Seats>
    </div>
    
   
  )
}
