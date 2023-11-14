import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import login from '../utils/login';

function Login() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginState, setLoginState] = useState(false);
  const handleInputChange = e => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const { response, username } = await login(loginData);

    if (response.ok) {
      console.log(
        `${response.status} http code. ${username} should be logged into the frontend author dashboard`
      );
    } else {
      console.log(
        `${response.status} http code. This should show that we are not logged in on the FE`
      );
    }
  }

  return (
    <div className='element'>
      <h1>Blog Author Dashboard</h1>
      {loginState && <h2> user is logged in </h2>}
      <p>
        Login to create, edit, delete, publish and unpublish blog posts, as well
        as remove comments.
      </p>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={loginData.username}
            onChange={handleInputChange}
            autoComplete='username'
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={loginData.password}
            onChange={handleInputChange}
            autoComplete='password'
          />
        </label>
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
