import { NavBar } from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Carousel from '../Carousel'
import SelectedTimeContext from '../context/SelectedTimeContext';
import { TicketProvider } from '../context/TicketContext';
import { useState } from 'react';
import { createContext } from 'react';

export const SelectedMoviesContext = createContext();

const Layout = () => {
  const [selectedTime, setSelectedTime] = useState("");

  const [selectedMovies, setSelectedMovies] = useState([]);
  
  return (
    <>
    <TicketProvider>
      <SelectedTimeContext.Provider value={{ selectedTime, setSelectedTime }}>
      <SelectedMoviesContext.Provider value={{ selectedMovies, setSelectedMovies }}>
    <div>
          <NavBar setSelectedMovies={setSelectedMovies} />
          <Carousel selectedMovies={selectedMovies}/>
          <Outlet/>
        </div>
    </SelectedMoviesContext.Provider>
    </SelectedTimeContext.Provider>
    </TicketProvider>
    </>
  );
};

export default Layout;
