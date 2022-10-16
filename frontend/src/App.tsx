import React from 'react';
import './styles/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart';
import Shipping from './components/Cart/Shipping';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shipping' element={<Shipping/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
