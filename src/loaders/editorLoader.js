import validator from 'validator';

async function editorLoader(req) {
  try {
    const res = await fetch(`http://localhost:3000/author/${req.params.id}`);
    const data = await res.json();
    data.body = validator.unescape(data.body);
    data.title = validator.unescape(data.title);
    data.subtitle = validator.unescape(data.subtitle);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to load editor data');
  }
}

export default editorLoader;
