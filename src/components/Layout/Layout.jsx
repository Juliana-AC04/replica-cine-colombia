import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Carousel from '../Carousel'
import TicketSelection from '../TicketSelection'


const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Carousel/>
        <Outlet/>
 esta la pueden borrar, era para
    </div>
  )
}

export default Layout