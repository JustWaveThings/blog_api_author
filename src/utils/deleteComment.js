async function deleteComment(id, commentId) {
  try {
    const response = await fetch(
      `http://localhost:3000/author/${id}/comment/${commentId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          mode: 'cors',
        },
      }
    );
    const json = await response.json();
    console.log(json);
    window.location.reload();
  } catch (error) {
    console.error('Error:', error);
  }
}

export default deleteComment;
