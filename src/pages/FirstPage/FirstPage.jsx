import { GlobalStyle } from '../../../GlobalStyle';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Layout } from '../../components/Layout/Layout';
import { RestrictedRoute } from '../../components/RestrictedRoute';
import { PrivateRoute } from '../../components/PrivateRoute';
import { LoadingMessage } from '../../App.styled';
import { refreshUser } from '../../redux/auth/operation';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../../pages/SignUp/SignUp'));
const LoginPage = lazy(() => import('../../pages/SignIn/SignIn'));
const ProfilePage = lazy(() => import('../../pages/Profile/ProfilePage'));

const FirstPage = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <LoadingMessage>Refreshing...</LoadingMessage>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/profile"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute
                redirectTo="/profile"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/profile" component={<ProfilePage />} />
            }
          />
          <Route path="*" element={<Navigate to="/error" />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};
export default FirstPage;
