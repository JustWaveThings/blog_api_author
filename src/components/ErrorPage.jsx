import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  let error = useRouteError();

  return (
    <div className='element'>
      <h1>Oops! Something went wrong!</h1>
      <Link to='/'>
        You can go back to the home page by clicking here, though!
      </Link>

      <>
        <h1>Error: {error.message}</h1>
        <h2>
          {' '}
          {error.status} - {error.statusText}
        </h2>
      </>
    </div>
  );
};

export default ErrorPage;
