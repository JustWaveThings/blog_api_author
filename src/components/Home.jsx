import { useLoaderData, Link } from 'react-router-dom';
import validator from 'validator';

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
                <Link to={`/posts/${post._id}`}>
                  {' '}
                  {validator.unescape(post.title)}
                </Link>
                <div>Post Published: {post.published.toString()}</div>
                <Link to={`/posts/${post._id}/edit`}>Edit</Link>
                <Link to={`/posts/${post._id}/delete`}>Delete</Link>
                {post.published ? (
                  <Link to={`/posts/${post._id}/unpublish`}>Unpublish</Link>
                ) : (
                  <Link to={`/posts/${post._id}/publish`}>Publish</Link>
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
