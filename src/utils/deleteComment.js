async function deleteComment(id, commentId) {
  try {
    const response = await fetch(
      `http://localhost:3000/author/${id}/comment/${commentId}`,
      {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          mode: 'cors',
        },
      }
    );
    return await response.json();

    window.location.reload();
  } catch (error) {
    console.error('Error:', error);
  }
}

export default deleteComment;
