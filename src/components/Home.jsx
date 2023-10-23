import { useLoaderData, Link } from 'react-router-dom';
import validator from 'validator';
import publishUnpublish from '../utils/publishUnpublish';

const Home = () => {
  const { posts } = useLoaderData();

  return (
    <div className='element'>
      <h1>Blog Editing Home</h1>
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
                <Link to={`author/${post._id}/edit`}>Edit</Link>
                <Link to={`author/${post._id}/delete`}>Delete</Link>
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
      <Link to='editor'>Go to Post Editor</Link>
    </div>
  );
};

export default Home;
