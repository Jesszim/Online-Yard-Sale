import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import LoginPage from "./views/LoginPage.jsx";
import RegisterPage from "./views/RegisterPage.jsx";
import YardSale from './views/YardSale.jsx'
import NavBar from './components/Nav.jsx';
import PrivateRoutes from './components/PrivateRoutes.jsx';
import appAPI from './util/API/appAPI.js';
import ThankYou from './views/ThankYou';
import './App.css'
import Checkout from './views/Checkout.jsx';
import Home from './views/Home.jsx';


const App = () => {

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      appAPI.validateAuth()
    }
  }, [])
  return (
    <div className="app">
      <div className="background"></div>
      <Routes>

        <Route element={<NavBar />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/yardsale" element={<YardSale />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path='/ThankYou' element={<ThankYou />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
