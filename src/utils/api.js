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
