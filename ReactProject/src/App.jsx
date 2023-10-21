import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import Homepage from './Pages/Homepage'
import Aboutpage from './Pages/Aboutpage';
import Contactpage from './Pages/Contactpage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Homepage />} />
            <Route path="about" element={<Aboutpage />} />
            <Route path="contact" element={<Contactpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
