async function publishUnpublish(id, publishBool) {
  try {
    const response = await fetch(`http://localhost:3000/author/post/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
      body: JSON.stringify({
        published: publishBool,
      }),
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('Error:', error);
  }
}

export default publishUnpublish;
