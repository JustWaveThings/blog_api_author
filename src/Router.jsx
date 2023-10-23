import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';

import Home from './components/Home';
import homeLoader from './loaders/homeLoader';
import Post from './components/Post';
import postLoader from './loaders/postLoader';
import PEContainer from './components/PEContainer';

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
        {
          path: 'author/:id',
          element: <Post />,
          loader: postLoader,
        },
        {
          path: '/editor',
          element: <PEContainer />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
