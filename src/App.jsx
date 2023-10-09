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
        <Route path="/" element={<MainLayout />} >
          <Route path="home" element={<ProductList />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="password" element={<ForgetPassword />} />
          {/* <Route element={<AuthLayout />}> */}
          <Route path="createProduct" element={<CreateProduct />} />
          <Route path="editProduct/:productID" element={<EditProduct />} />
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

