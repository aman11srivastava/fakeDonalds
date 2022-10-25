import React from 'react';
import './styles/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import {path, Routes as Paths} from './routes/routes'
import OrderDetails from './components/Orders/OrderDetails';
import NotFound from './components/Layout/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {Paths.map(path => (
          <Route path={path.path} element={path.component()}/>
        ))}
        <Route path={path.SingleOrder + '/:id'} element={<OrderDetails/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
