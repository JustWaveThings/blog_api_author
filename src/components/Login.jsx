import React from 'react';
import { useNavigate, Form, useActionData } from 'react-router-dom';
import login from '../utils/login';

export const action = async ({ request }) => {
  const form = await request.formData();
  const username = form.get('username');
  const password = form.get('password');
  return login({ username, password });
};

function Login() {
  const actionData = useActionData();
  console.log(actionData);

  return (
    <div className='element'>
      <h1>Blog Author Dashboard</h1>

      <p>
        Login to create, edit, delete, publish and unpublish blog posts, as well
        as remove comments.
      </p>
      <Form method='post'>
        <input
          type='text'
          name='username'
          autoComplete='username'
          placeholder='username'
        />

        <br />

        <input
          type='password'
          name='password'
          placeholder='password'
          autoComplete='password'
        />

        <br />
        <button type='submit'>Log In</button>
      </Form>
    </div>
  );
}

export default Login;
