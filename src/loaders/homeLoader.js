async function homeLoader() {
  return await fetch('http://localhost:3000/author/').then(res => res.json());
}

export default homeLoader;
