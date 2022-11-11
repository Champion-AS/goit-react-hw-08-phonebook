import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selector';

export default function PrivateRouts() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/authorization" />;
}
