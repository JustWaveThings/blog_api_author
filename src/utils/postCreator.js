async function postCreator(
  postData,
  titleData = 'default title',
  subtitleData = 'default subtitle',
  publishBool = false
) {
  try {
    const response = await fetch(`http://localhost:3000/author/post`, {
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
