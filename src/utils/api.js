import validator from 'validator'; // used by editorFetch

// this file is used to make api calls to the backend using fetch

export async function allPostFetch() {
  try {
    const response = await fetch('http://localhost:3000/author/', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postFetch(params) {
  const res = await fetch(`http://localhost:3000/author/${params.id}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
  });
  const data = await res.json();
  return data;
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
