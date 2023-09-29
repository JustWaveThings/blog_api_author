async function homeLoader() {
  return await fetch('http://localhost:3000/posts/').then(res => res.json());
}

export default homeLoader;
