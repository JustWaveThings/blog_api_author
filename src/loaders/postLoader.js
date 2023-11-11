async function postLoader(params) {
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

export default postLoader;
