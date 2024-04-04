import { NavBar } from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Carousel from '../Carousel'
import { useState } from 'react';

const Layout = () => {
  const [movies, setMovies] = useState([]);
  
  return (
    <div>
        <NavBar setMovies={setMovies} />
        <Carousel movies={movies}/>
        <Outlet/>
    </div>
  )
}

export default Layout