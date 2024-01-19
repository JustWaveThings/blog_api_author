import { redirect } from 'react-router-dom';

async function logout() {
  const response = await fetch(`http://localhost:3000/users/logout`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
  });
  const data = await response.json();
  const { ok } = response;

  if (!response.ok) {
    throw new Error(response.status);
  }

  return { ok, data };
}

export default logout;
