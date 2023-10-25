import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-white text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 ">
        <img
          src="https://i.ibb.co/Ny4kDxK/386459595-679530474122013-2009469985288980616-n.gif"
          alt=""
        />
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            rel="noopener noreferrer"
            className="px-8 py-3 font-semibold rounded bg-black text-gray-50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
