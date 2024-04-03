import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Index from "../pages/Index";
import { Login } from "../pages/Login/Login";
import { CompraForm } from "../components/FormCompra/CompraForm";
import ResumenCompra from "../components/FormCompra/ResumenCompraForm";
import Details from "../pages/Details/Details";
import Tickets from "../pages/Tickets/Tickets";
import Summary from "../components/Summary";
import Seats from "../components/Seats";

const IndexRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="details/:idMovie" element={<Details />} />
          <Route path="details/:idMovie/movie" element={<Summary />}>
            <Route path="tickets" element={<Tickets />} />
            <Route path="seats" element={<Seats />} />
            <Route path="pago" element={<CompraForm />} />
            <Route path="resumen" element={<ResumenCompra />} />
          </Route>          
          <Route path="login" element={<Login />} />
          <Route path="/tiketDetails" element={<TicketDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRouter;
