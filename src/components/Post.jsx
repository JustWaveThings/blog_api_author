import { useLoaderData, Link } from 'react-router-dom';
import validator from 'validator';
import PostContent from './PostContent';
import { dateTimeDisplay } from '../utils/dateTimeDisplay';
import deleteComment from '../utils/deleteComment';
import { postFetch } from '../utils/api';

export function loader({ params }) {
  return postFetch(params.id);
}

function Post() {
  const post = useLoaderData();

  return (
    <div className='element'>
      <p>Title: {validator.unescape(post.title)}</p>
      <p>Subheading: {validator.unescape(post.subtitle)}</p>
      <p>Created: {dateTimeDisplay(post.created_timestamp)}</p>
      <br />
      <PostContent />
      <br />
      <p>All Comments: </p>
      <br />
      {post.comment_array.map(comment => (
        <div className='comment' key={comment._id}>
          <p>Name: {comment.name}</p>
          <p>
            Posted: {dateTimeDisplay(comment.published_timestamp)}
            {` - `}
            {post.created_timestamp_formatted}
          </p>
          <p className='textarea'>
            Comment: {validator.unescape(comment.body)}
          </p>
          <button
            onClick={() => {
              deleteComment(post._id, comment._id);
            }}>
            Delete Comment
          </button>
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
