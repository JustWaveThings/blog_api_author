async function postLoader(req) {
  console.log(req);
  const res = await fetch(`http://localhost:3000/author/${req.params.id}`);
  const data = await res.json();
  return data;
}

export default postLoader;
