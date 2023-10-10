import { useLoaderData } from 'react-router-dom';
import validator from 'validator';

function PostContent() {
  const post = useLoaderData();
  const markup = { __html: validator.unescape(post.body) };
  return <div className='textarea' dangerouslySetInnerHTML={markup} />;
}

export default PostContent;
