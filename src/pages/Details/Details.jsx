import MovieDetails from "../../components/MovieDetails";
import Schedule from "../../components/Schedule";
import { Outlet, useParams } from 'react-router-dom'

export default function Details() {
  const { idMovie } = useParams();
  return (
    <div className="flex flex-col sm:flex-row">
      <MovieDetails idMovie={idMovie} />
      <Schedule />
      <Outlet />
    </div>
  );
}
