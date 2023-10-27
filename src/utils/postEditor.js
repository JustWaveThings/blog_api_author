async function postEditor(postData, titleData, subtitleData, publishBool, id) {
  try {
    const response = await fetch(`http://localhost:3000/author/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
      body: JSON.stringify({
        body: postData,
        title: titleData,
        subtitle: subtitleData,
        published: publishBool,
      }),
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('Error:', error);
  }
}

export default postEditor;
