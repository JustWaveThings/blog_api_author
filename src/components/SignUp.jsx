import React, { useState } from 'react';
import signup from '../utils/signup';

function Signup() {
  const [signupData, setSignupData] = useState({ username: '', password: '' });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setSignupData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    signup(signupData);
  };

  return (
    <div className='element'>
      <h1>Blog Author Dashboard</h1>

      <p>Sign up to create account.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={signupData.username}
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
            value={signupData.password}
            onChange={handleInputChange}
            autoComplete='password'
          />
        </label>
        <br />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
