import { useLoaderData, Link } from 'react-router-dom';
import validator from 'validator';
import PostContent from './PostContent';

function Post() {
  const post = useLoaderData();

  return (
    <div className='element'>
      <p>Title: {validator.unescape(post.title)}</p>
      <p>Subheading: {validator.unescape(post.subtitle)}</p>
      <p>
        Created: {post.created_timestamp_formatted} ({post.post_age_created}{' '}
        days old)
      </p>
      <br />
      <PostContent />
      <br />
      <p>All Comments: </p>
      <br />
      {post.comment_array.map(comment => (
        <div className='comment' key={comment._id}>
          <p>Name: {comment.name}</p>
          <p>
            Posted: {comment?.published_timestamp_formatted} (
            {comment?.comment_age_published} days ago)
          </p>
          <p className='textarea'>
            Comment: {validator.unescape(comment.body)}
          </p>
          <p>
            {comment.likes === 0
              ? '0 likes'
              : comment.likes === 1
              ? `1 like`
              : `${comment.likes} likes`}
            <button>Like</button>
            <button>Delete</button>
          </p>
        </div>
      ))}
      <br />

      <nav>
        <Link to='/'>
          <button>Back to Posts</button>
        </Link>
      </nav>
      <br />
    </div>
  );
}

export default Post;
