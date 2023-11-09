import { redirect } from 'react-router-dom';

async function signup(authData) {
  console.log(authData);

  const response = await fetch(`http://localhost:3000/users/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
    body: JSON.stringify({
      username: authData.username,
      password: authData.password,
      admin: true,
    }),
  });
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw {
      message: data.message,
      statusText: response.statusText,
      status: response.status,
    };
  }

  redirect('/');
}

export default signup;