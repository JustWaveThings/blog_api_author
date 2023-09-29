async function postLoader(req) {
  const res = await fetch(`http://localhost:3000/posts/${req.params.id}`);
  const data = await res.json();
  return data;
}

export default postLoader;
