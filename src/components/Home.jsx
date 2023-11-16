import { useLoaderData, Link } from 'react-router-dom';
import validator from 'validator';
import publishUnpublish from '../utils/publishUnpublish';
import deletePost from '../utils/deletePost';
import editPost from '../utils/editPost';
import login from '../utils/login';
import { postFetch } from '../utils/api';

export function loader() {
  return postFetch();
}

const Home = () => {
  const posts = useLoaderData();

  return (
    <div className='element'>
      <h1>Post List</h1>
      {posts && (
        <ul>
          {posts.map(post => (
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
                  <button
                    onClick={() => publishUnpublish(post._id, post.published)}>
                    Unpublish
                  </button>
                ) : (
                  <button
                    onClick={() => publishUnpublish(post._id, post.published)}>
                    Publish
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
