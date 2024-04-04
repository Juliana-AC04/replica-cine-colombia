import { NavBar } from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Carousel from '../Carousel'
import SelectedTimeContext from '../context/SelectedTimeContext';
import { useState } from 'react';

const Layout = () => {
  const [selectedTime, setSelectedTime] = useState("");

  return (
     <SelectedTimeContext.Provider value={ {selectedTime, setSelectedTime} }>
       <div>
         <NavBar/>
         <Carousel/>
         <Outlet/>
       </div>
     </SelectedTimeContext.Provider>
  );
 }
 
 export default Layout;
 