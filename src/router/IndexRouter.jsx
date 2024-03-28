import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Index from '../pages/Index';
import { Login } from '../pages/Login/Login';



const IndexRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element= { <Index/>}/> 
          <Route path="/" element= { <Index/>}> 
            <Route path="login" element={<Login/>}/>
          </Route>
        </Route>
      </Routes>    
    </BrowserRouter>
  )
}

export default IndexRouter