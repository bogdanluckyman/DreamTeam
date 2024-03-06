import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

// RestrictedRoute відповідає за обмежений доступ для юзерів які не зареєструвались
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
