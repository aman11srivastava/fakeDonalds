import React from 'react';
import './styles/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
