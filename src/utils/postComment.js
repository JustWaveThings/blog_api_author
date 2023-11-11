async function postJSON(data, id) {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}/comment`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
      body: JSON.stringify(data),
    });

    await response.json();
    window.location.reload();
  } catch (error) {
    console.error('Error:', error);
  }
}

export default postJSON;
