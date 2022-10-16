import React from 'react';
import './styles/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import {Routes as Paths} from './routes/routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {Paths.map(path => (
          <Route path={path.path} element={path.component()}/>
        ))}
        {/* <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shipping' element={<Shipping/>} />
        <Route path='/confirmorder' element={<ConfirmOrder/>}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
