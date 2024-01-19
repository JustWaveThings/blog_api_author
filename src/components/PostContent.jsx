import validator from 'validator';

function PostContent({ content }) {
  const markup = { __html: validator.unescape(content) };
  return <div className='textarea' dangerouslySetInnerHTML={markup} />;
}

export default PostContent;
