import validator from 'validator';

async function editorLoader(params) {
  try {
    const res = await fetch(`http://localhost:3000/author/${params.id}`);
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

export default editorLoader;
