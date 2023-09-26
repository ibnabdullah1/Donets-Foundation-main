import { Link, useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center text-center items-center min-h-screen">
      <div id="error-page" className="text-center">
        <h1 className="font-bold text-9xl text-gray-200">404</h1>
        <h1 className="font-semibold text-2xl">
          Oops! This Page Could Not Be Found
        </h1>

        <p>
          <i>{error.statusText || error.message}</i>
        </p>

        <Link to={"/"}>
          <button
            type="button"
            className="text-white bg-gradient-to-r mt-3 inline-block from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-red-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            HOMEPAGE
          </button>
        </Link>
      </div>
    </div>
  );
}
