import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';
import { Home, loader as postsLoader } from './components/Home';
import { Post, loader as postLoader } from './components/Post';
import PEContainer from './components/PEContainer';
import { PostEditor, loader as editorLoader } from './components/PostEditor';
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
          loader: postsLoader,
          errorElement: <ErrorPage />,
        },
        {
          path: 'author/:id',
          element: <Post />,
          loader: postLoader,
          errorElement: <ErrorPage />,
        },
        {
          path: 'editor',
          element: <PEContainer />,
        },
        {
          path: 'editor/:id',
          element: <PostEditor />,
          loader: editorLoader,
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
