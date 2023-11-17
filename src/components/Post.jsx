import { Suspense } from 'react';
import { useLoaderData, Link, defer, Await } from 'react-router-dom';
import validator from 'validator';
import PostContent from './PostContent';
import { dateTimeDisplay } from '../utils/dateTimeDisplay';
import deleteComment from '../utils/deleteComment';
import { postFetch } from '../utils/api';
import { SpinnerDiamond } from 'spinners-react';

export function loader({ params }) {
  return defer({ post: postFetch(params.id) });
}

export function Post() {
  const dataPromise = useLoaderData();

  function renderPostElements(post) {
    return (
      <div className='element'>
        <p>Title: {validator.unescape(post.title)}</p>
        <p>Subheading: {validator.unescape(post.subtitle)}</p>
        <p>Created: {dateTimeDisplay(post.created_timestamp)}</p>
        <br />
        <PostContent content={post.body} />
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

  return (
    <Suspense fallback={<SpinnerDiamond enabled='true' />}>
      <Await resolve={dataPromise.post}>{renderPostElements}</Await>
    </Suspense>
  );
}
