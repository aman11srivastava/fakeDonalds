import React, { Dispatch, useEffect } from 'react';
import './styles/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import {path, Routes as Paths} from './routes/routes'
import OrderDetails from './components/Orders/OrderDetails';
import NotFound from './components/Layout/NotFound';
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/actions/userActions';

function App() {

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  console.log("a commit");
  

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
