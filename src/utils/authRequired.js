import { redirect } from 'react-router-dom';

async function authRequired(request, nextLoader, params) {
  const pathName = new URL(request.url).pathname;

  // const isLoggedIn = request.headers.get('Cookie').includes('loggedIn=true');
  const isLoggedIn = true;
  if (!isLoggedIn) {
    const response = redirect(`/login?redirectTo=${pathName}`);
    throw response;
  }
  if (!nextLoader) {
    return null;
  } else {
    return await nextLoader(params);
  }
}

export default authRequired;
