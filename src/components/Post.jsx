import { useLoaderData, Link } from 'react-router-dom';
import validator from 'validator';

function Post() {
  const post = useLoaderData();

  return (
    <div className='element'>
      <p>Title: {post.title}</p>
      <p>Subheading: {post.subtitle}</p>
      <p>
        Created: {post.created_timestamp_formatted} ({post.post_age_created}{' '}
        days old)
      </p>
      <p></p>
      <p>
        {post.likes === 0
          ? 'Be the first person to like this post.'
          : post.likes === 1
          ? `1 like`
          : `${post.likes} likes`}
      </p>
      <br />
      <p>{post.body}</p>
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
            <button>Report</button>
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
