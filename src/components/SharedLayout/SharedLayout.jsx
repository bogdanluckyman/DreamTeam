import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn && <Header />}
      <Outlet />
    </>
  );
};

export default SharedLayout;
