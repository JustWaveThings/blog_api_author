async function editorLoader(req) {
  try {
    const res = await fetch(`http://localhost:3000/author/${req.params.id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to load editor data');
  }
}
