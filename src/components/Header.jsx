import { Link } from 'react-router-dom';
import logout from '../utils/logout';

function Header() {
  return (
    <div className='header'>
      <h2>This is the Blog Authoring Frontend</h2>
      <Link to='/'>Post List</Link>
      <Link to='editor'>Create New Post</Link>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Header;
