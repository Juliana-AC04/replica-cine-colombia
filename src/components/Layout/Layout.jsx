import { NavBar } from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Carousel from '../Carousel'

const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Carousel/>
        <Outlet/>
    </div>
  )
}

export default Layout