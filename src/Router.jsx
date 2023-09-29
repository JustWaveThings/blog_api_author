import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';

import Home from './components/Home';
import homeLoader from './loaders/homeLoader';

import postLoader from './loaders/postLoader';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeLoader,
        },
        /*  {
          path: '/posts/:id',
          element: <Post />,
          loader: postLoader,
        }, */
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
