import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <h2>This is the Blog Authoring Frontend</h2>
      <Link to='/'>Post List</Link>
      <Link to='editor'>Create New Post</Link>
    </div>
  );
}

export default Header;
