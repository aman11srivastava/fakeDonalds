import React, { Dispatch, useEffect } from 'react';
import './styles/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import {path, Routes as Paths} from './routes/routes'
import OrderDetails from './components/Orders/OrderDetails';
import NotFound from './components/Layout/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions/userActions';
import toast, {Toaster} from 'react-hot-toast';
import { RootState } from './redux/store';
import { CLEAR_ERROR, CLEAR_MESSAGE } from './redux/constants/constants';

function App() {

  const dispatch: Dispatch<any> = useDispatch();
  const {error, isAuthenticated, message} = useSelector((state: RootState) => state?.auth)

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_ERROR });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: CLEAR_MESSAGE });
    }
  }, [dispatch, error, message])

  return (
    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated}/>
      <Routes>
        {Paths.map(path => (
          <Route path={path.path} element={path.component()}/>
        ))}
        <Route path={path.SingleOrder + '/:id'} element={<OrderDetails/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
