/* eslint-disable no-unused-vars */
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import currentUserSlice, { setCurrentUser, logOutUser } from './app/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainLayout from './components/Layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProductList from './pages/ProductList';
import ForgetPassword from './pages/ForgetPassword';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import NotFound from './pages/NotFound';
import PasswordEmailSent from './pages/PasswordEmailSent';
import ProductDetail from './pages/ProductDetail';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        const userData = JSON.parse(userString);
        dispatch(setCurrentUser(userData));
      } catch (e) {
        console.error("Parsing error:", e);
      }
    }
  }, [dispatch]); 
  const user = useSelector(state => state.user.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<ProductList />} />
          <Route path="home" element={<ProductList />} />
          <Route path="product/:name" element={<ProductDetail />} />  
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="password" element={<ForgetPassword />} />
          {/* <Route element={<AuthLayout />}> */}
          <Route path="createProduct" element={<CreateProduct />} />          
          <Route path="editProduct/:name" element={<EditProduct />} />
          {/* </Route> */}
          <Route path="passwordEmailSent" element={<PasswordEmailSent />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

