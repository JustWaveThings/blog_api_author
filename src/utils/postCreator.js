async function postCreator(
  postData,
  titleData,
  subtitleData,
  publishBool = false
) {
  try {
    const response = await fetch(`http://localhost:3000/posts`, {
      method: 'POST',
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

export default postCreator;
