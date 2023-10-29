async function login(authData) {
  console.log(authData);

  const response = await fetch(`http://localhost:3000/author/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
    body: JSON.stringify({
      username: authData.username,
      password: authData.password,
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
}

export default login;
