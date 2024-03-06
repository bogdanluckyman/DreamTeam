import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

// PrivatRoute відповідає за приватний маршрут, який доступний тільки для зареєстрвоаних юзерів
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component; // Перенаправляємо на redirectTo, якщо користувач не авторизований, інакше рендеримо компонент Component
};
