import Header from './components/Header';
import Footer from './components/Footer';

import { Outlet, ScrollRestoration, Navigate } from 'react-router-dom';

function App() {
  console.log(document.cookie);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
