import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AuthLayout() {
  const { isAuthenticated, role } = useSelector(state => state.user);
//   const location = useLocation();

  if (!isAuthenticated || role !== 'admin') {
    return <Navigate to="/" />; // redirect to /login ?
  }

  return <Outlet />;
}