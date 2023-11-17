import { Suspense } from 'react';
import { useLoaderData, Link, defer, Await } from 'react-router-dom';
import validator from 'validator';
import publishUnpublish from '../utils/publishUnpublish';
import deletePost from '../utils/deletePost';
import editPost from '../utils/editPost';
import login from '../utils/login';
import { postFetch } from '../utils/api';
import { SpinnerDiamond } from 'spinners-react';

export function loader() {
  return defer({ posts: postFetch() });
}

export const Home = () => {
  const dataPromise = useLoaderData();

  function renderHomeElements({ posts }) {
    const postElements = posts.map(post => (
      <li key={post._id}>
        <div>
          Post Title:
          <Link to={`/author/${post._id}`}>
            {' '}
            {validator.unescape(post.title)}
          </Link>
          <div>Post Published: {post.published.toString()}</div>
          <button onClick={() => editPost(post._id)}>Edit</button>
          <button onClick={() => deletePost(post._id)}>Delete</button>
          {post.published ? (
            <button onClick={() => publishUnpublish(post._id, post.published)}>
              Unpublish
            </button>
          ) : (
            <button onClick={() => publishUnpublish(post._id, post.published)}>
              Publish
            </button>
          )}
        </div>
      </li>
    ));

    return <ul>{postElements}</ul>;
  }

  return (
    <div className='element'>
      <h1>Post List</h1>
      <Suspense fallback={<SpinnerDiamond enabled='true' />}>
        <Await resolve={dataPromise.posts}>{renderHomeElements}</Await>
      </Suspense>
    </div>
  );
};
