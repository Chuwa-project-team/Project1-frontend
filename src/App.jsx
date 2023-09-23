/* eslint-disable no-unused-vars */
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainLayout from './components/Layout';


function App() {
  console.log('App')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="signup" element={<SignIn />} />
        <Route path="signin" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;

