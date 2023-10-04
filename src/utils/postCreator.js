async function postCreator(data) {
  try {
    const response = await fetch(`http://localhost:3000/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
      body: JSON.stringify({
        body: data,
        title: 'test',
        subtitle: 'test',
        published: true,
      }),
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('Error:', error);
  }
}

export default postCreator;
