import { NavBar } from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Carousel from '../Carousel'
import { useState } from 'react';
import { createContext } from 'react';

export const SelectedMoviesContext = createContext();

const Layout = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  
  return (
    <>
    <SelectedMoviesContext.Provider value={{ selectedMovies, setSelectedMovies }}>
    <div>
        <NavBar setSelectedMovies={setSelectedMovies} />
        <Carousel selectedMovies={selectedMovies}/>
        <Outlet/>
    </div>
    </SelectedMoviesContext.Provider>
    </>
  )
}

export default Layout