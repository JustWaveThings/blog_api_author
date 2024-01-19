async function publishUnpublish(id, publishBool) {
  try {
    const response = await fetch(`http://localhost:3000/author/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
      body: JSON.stringify({
        published: !publishBool,
      }),
    });
    const json = await response.json();

    window.location.reload();
  } catch (error) {
    console.error('Error:', error);
  }
}

export default publishUnpublish;
