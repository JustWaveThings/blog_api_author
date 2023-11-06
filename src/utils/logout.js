import { redirect } from 'react-router-dom';

async function logout() {
  const response = await fetch(`http://localhost:3000/users/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
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
}

export default logout;
