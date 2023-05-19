import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';

import Product from './components/Product';
import Dashbord from './components/Dashbord';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';


const router=createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Dashbord/>} ></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
    {/* <Route path='/products' element={<Product/>}/> */}

  </Route>
))

function App() {
  return (
    <div className="App">
      

      <RouterProvider router={router}/>
      
    {/* <Product/> */}
    </div>
  );
}

export default App;
