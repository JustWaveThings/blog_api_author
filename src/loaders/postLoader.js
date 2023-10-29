async function postLoader(params) {
  const res = await fetch(`http://localhost:3000/author/${params.id}`);
  const data = await res.json();
  return data;
}

export default postLoader;
