import Header from "../components/Header";
import ListMovies from "../components/ListMovies";
import MovieDetails from "../components/MovieDetails";
import Schedule from "../components/Schedule";
import Seats from "../components/Seats";


export default function Index() {
  return (
    <div>
      <Header></Header>
      <ListMovies></ListMovies>
      <div className="flex flex-col sm:flex-row">
        <MovieDetails></MovieDetails>
        <Schedule></Schedule>
      </div>
      <Seats></Seats>
    </div>
  )
}
