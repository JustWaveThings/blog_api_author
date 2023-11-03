import { redirect } from 'react-router-dom';

// what is the point of this module? The point of this module is to be a function that confirms every route that is place on the users is authenticated. If the user is not authenticated, then they will be redirected to the login page. If they are authenticated, then they will be able to access the page that they are trying to access.

// additionally, the user will be redirected to the page that they were trying to access after they have logged in.

// params have been passed to the the nextloader so that if there are necessary params like post id that is preserved and accessible to that function. I'm sure there are slicker ways of handling this, but this is just what came to mind.

async function authRequired(request, nextLoader, params) {
  const pathName = new URL(request.url).pathname;

  // TODO - logic to to confirm user is logged in

  // temporary logic to simulate a logged in user
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
