import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Index from '../pages/Index';
import { Login } from '../pages/Login/Login';
import { CompraForm } from '../components/FormCompra/CompraForm';
import ResumenCompra from '../components/FormCompra/ResumenCompraForm';



const IndexRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element= { <Index/>}/> 
          <Route path="login" element={<Login/>}/>
          <Route path="/" element={<CompraForm />} />
          <Route path="/resumen" element={<ResumenCompra />} />
        </Route>
      </Routes>    
    </BrowserRouter>
  )
}

export default IndexRouter