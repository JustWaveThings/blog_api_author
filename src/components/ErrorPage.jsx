import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = props => {
  let error = useRouteError();
  console.log(props);
  return (
    <div className='element'>
      <h1>Oops! Something went wrong!</h1>
      <Link to='/'>
        You can go back to the home page by clicking here, though!
      </Link>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
};

export default ErrorPage;
