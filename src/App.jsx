/* eslint-disable no-unused-vars */
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import currentUserSlice, { setCurrentUser, logOutUser } from './app/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProductList from './pages/ProductList';
import ForgetPassword from './pages/ForgetPassword';
import MainLayout from './components/Layout';


function App() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  //dispatch(setCurrentUser({ id: 1, username: 'exampleUser' }));
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
  console.log('App')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="password" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;

