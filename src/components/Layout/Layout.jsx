import { AppBar } from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Wrapper } from './Layout.styled';
// import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Wrapper>
      {/* <Loader /> */}
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Wrapper>
  );
};
