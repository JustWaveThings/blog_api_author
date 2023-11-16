import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Home, { loader as postLoader } from './components/Home';
import { postFetch, editorFetch } from '../src/utils/api.js';
import Post from './components/Post';
import PEContainer from './components/PEContainer';
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
          loader: postLoader,
          errorElement: <ErrorPage />,
        },
        {
          path: 'author/:id',
          element: <Post />,
          loader: postFetch,
          errorElement: <ErrorPage />,
        },
        {
          path: 'editor',
          element: <PEContainer />,
        },
        {
          path: 'editor/:id',
          element: <PostEditor />,
          loader: editorFetch,
          errorElement: <ErrorPage />,
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
