import MovieDetails from "../../components/MovieDetails";
import Schedule from "../../components/Schedule";


import { Outlet } from 'react-router-dom'

export default function Details() {
  return (
    <div className="flex flex-col sm:flex-row">
    <MovieDetails />
    <Schedule />
    <Outlet />
  </div>
  )
}
