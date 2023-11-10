async function login(authData) {
  try {
    const response = await fetch(`http://localhost:3000/users/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
      body: JSON.stringify({
        username: authData.username,
        password: authData.password,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default login;
