import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Index from '../pages/Index';
import { Login } from '../pages/Login/Login';
import { CompraForm } from '../components/FormCompra/CompraForm';
import ResumenCompra from '../components/FormCompra/ResumenCompraForm';
import Details from '../pages/Details/Details';
import Tickets from '../pages/Tickets/Tickets';



const IndexRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />

          <Route path="/details" element={<Details />} />
          <Route path="/tickets" element={<Tickets />} />
          {/* <Route path="/" element= { <Index/>}> 
          </Route> */}
          {/* <Route path="movie" element={<Schedule />}>
            <Route path=":id" element={<MovieDetails />} />
            <Route path=":id/seats" element={<NumberSeats />} />
           
          </Route> */}
          {/* Aquí van las demás rutas que son abrazadas por el componente layout */}
          <Route path="/" element={<CompraForm />} />
          <Route path="/resumen" element={<ResumenCompra />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default IndexRouter