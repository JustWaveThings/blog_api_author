async function homeLoader() {
  try {
    const response = await fetch('http://localhost:3000/author/', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return { error: error.message };
  }
}

export default homeLoader;
