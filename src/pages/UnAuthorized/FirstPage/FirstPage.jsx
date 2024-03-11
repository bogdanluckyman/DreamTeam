import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Layout } from '../../../components/Layout/Layout';
import { RestrictedRoute } from '../../../RestrictedRoute';
import { PrivateRoute } from '../../../PrivateRoute';
import { refreshUser } from '../../../redux/auth/operation';
import { Loader } from '../../../components/Loader/Loader';

const HomePage = lazy(() => import('../../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../SignUp/SignUp'));
const LoginPage = lazy(() => import('../SignIn/SignIn'));
const ProfilePage = lazy(() =>
  import('../../Authorized/ProfilePage/ProfilePage')
);

const FirstPage = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const location = useLocation();

  useEffect(() => {
    dispatch(refreshUser());
    window.localStorage.setItem('lastPath', location.pathname);
  }, [dispatch, location.pathname]);

  return isRefreshing ? (
    <Loader />
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
    </>
  );
};
export default FirstPage;
