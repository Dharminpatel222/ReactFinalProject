import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import Homepage from './Pages/Homepage'
import Contactpage from './Pages/Contactpage';
import OurStorepage from './Pages/OurStorepage';
import Blogpage from './Pages/Blogpage';
import CompareProduct from './Pages/CompareProduct';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="store" element={<OurStorepage />} />
            <Route path="blog" element={<Blogpage />} />
            <Route path="contact" element={<Contactpage />} />
            <Route path="compare" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
