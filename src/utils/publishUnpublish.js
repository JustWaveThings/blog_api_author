async function publishUnpublish(id, publishBool) {
  console.log(id, publishBool);
  try {
    const response = await fetch(`http://localhost:3000/author/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
      body: JSON.stringify({
        published: !publishBool,
      }),
    });
    const json = await response.json();
    console.log(json);
    window.location.reload();
  } catch (error) {
    console.error('Error:', error);
  }
}

export default publishUnpublish;
