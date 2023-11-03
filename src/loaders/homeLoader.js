async function homeLoader() {
  try {
    const response = await fetch('http://localhost:3000/author/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return { error: error.message };
  }
}

export default homeLoader;
