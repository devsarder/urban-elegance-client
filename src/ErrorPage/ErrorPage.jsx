import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div>
        <h3 className="absolute text-9xl font-semibold drop-shadow-2xl  ">
          404
        </h3>
        <p className=" relative text-5xl text-white mt-20 capitalize">
          Page not found
        </p>
      </div>
      <Link to="/" className="btn btn-neutral my-6 ">
        Go To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
