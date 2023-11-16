async function deletePost(id) {
  try {
    const response = await fetch(`http://localhost:3000/author/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
    });
    await response.json();
    window.location.reload();
  } catch (error) {
    console.error('Error:', error);
  }
}

export default deletePost;
