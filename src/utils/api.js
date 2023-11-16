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
    const data = await res.json();
    return data.posts;
  } catch (error) {
    return error;
  }
}

export async function editorFetch(params) {
  try {
    const res = await fetch(`http://localhost:3000/author/${params.id}`, {
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
    throw {
      statusText: res.statusText,
      status: res.status,
      error: error.message,
    };
  }
}
