import validator from 'validator'; // used by editorFetch

export async function postFetch(id) {
  const url = id
    ? `http://localhost:3000/author/${id}`
    : 'http://localhost:3000/author/';
  try {
    const res = await fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
    });
    if (!res.ok) {
      throw {
        message: 'Failed to fetch post(s)',
        statusText: res.statusText,
        status: res.status,
      };
    }
    // destruture the returned object in the receiving function
    // if multiple posts are returned
    return await res.json();
  } catch (error) {
    return error;
  }
}

export async function editorFetch(id) {
  try {
    const res = await fetch(`http://localhost:3000/author/${id}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
    });
    const data = await res.json();
    data.body = validator.unescape(data.body);
    data.title = validator.unescape(data.title);
    data.subtitle = validator.unescape(data.subtitle);
    return data;
  } catch (error) {
    return error;
  }
}

export async function postEditor(
  postData,
  titleData,
  subtitleData,
  publishBool,
  id
) {
  try {
    const response = await fetch(`http://localhost:3000/author/${id}`, {
      method: 'PUT',
      credentials: 'include',
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
  } catch (error) {
    console.error('Error:', error);
  }
}
