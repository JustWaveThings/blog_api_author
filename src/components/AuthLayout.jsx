import Header from './Header';
import Footer from './Footer';

import { Outlet, ScrollRestoration } from 'react-router-dom';

function AuthLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default AuthLayout;
