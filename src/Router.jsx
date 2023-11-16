import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';

import Home from './components/Home';
import homeLoader from './loaders/homeLoader';
import Post from './components/Post';
import postLoader from './loaders/postLoader';
import PEContainer from './components/PEContainer';
import editorLoader from './loaders/editorLoader';
import PostEditor from './components/PostEditor';
import Login from './components/Login';
import Signup from './components/SignUp';
import { SpinnerDiamond } from 'spinners-react';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: async () => await homeLoader(),
        },
        {
          path: 'author/:id',
          element: <Post />,
          loader: postLoader,
        },
        {
          path: 'editor',
          element: <PEContainer />,
        },
        {
          path: 'editor/:id',
          element: <PostEditor />,
          loader: async params => await editorLoader(params),
        },
      ],
    },
    {
      path: 'login',
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'signup',
      element: <Signup />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <RouterProvider
      router={router}
      fallbackElement={<SpinnerDiamond enabled={true} />}
    />
  );
};

export default Router;
