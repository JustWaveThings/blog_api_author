async function homeLoader() {
  try {
    const response = await fetch('http://localhost:3000/author/', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default homeLoader;
