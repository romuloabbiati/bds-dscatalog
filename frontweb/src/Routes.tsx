import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';
import ProductDetails from 'components/ProductDetails';

const Paths = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Catalog />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='products/:productId' element={<ProductDetails />} />
    </Routes>
  </BrowserRouter>
);

export default Paths;
