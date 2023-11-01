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
import Forgatepassword from './Pages/Forgatepassword';
import SignUp from './Pages/SignUp';
import Resetpassword from './Pages/Resetpassword';
import SingleBlog from './Pages/SingleBlog';
import Privacypolicy from './Pages/Privacypolicy';
import RefundPolicy from './Pages/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import TermsandCondition from './Pages/TermsandCondition';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="store" element={<OurStorepage />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blog" element={<Blogpage />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contactpage />} />
            <Route path="compare" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="Foragatpassword" element={<Forgatepassword />} />
            <Route path="Signup" element={<SignUp />} />
            <Route path="resetpassword" element={<Resetpassword />} />
            <Route path="privacypolicy" element={<Privacypolicy />} />
            <Route path="refundpolicy" element={<RefundPolicy />} />
            <Route path="shippingpolicy" element={<ShippingPolicy />} />
            <Route path="termsandcondition" element={<TermsandCondition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
