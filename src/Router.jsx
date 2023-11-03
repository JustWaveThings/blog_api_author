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
import authRequired from './utils/authRequired';

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
          loader: async ({ request }) => authRequired(request, homeLoader),
        },
        {
          path: 'author/:id',
          element: <Post />,
          loader: async ({ request, params }) =>
            await authRequired(request, postLoader, params),
        },
        {
          path: 'editor',
          element: <PEContainer />,
          loader: async ({ request }) => authRequired(request),
        },
        {
          path: 'editor/:id',
          element: <PostEditor />,
          loader: async ({ request, params }) =>
            authRequired(request, editorLoader, params),
        },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
