import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from 'components/Header/Header';

const SharedLayout = () => {
  const location = useLocation();
  const isAuthorizedPage = location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/signin';

  return (
    <>
      {isAuthorizedPage && <Header />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
