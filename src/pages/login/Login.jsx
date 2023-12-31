import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/authprovider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const location = useLocation();
  const { gwithpopup, usersignin } = useContext(AuthContext);
  const navi = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    usersignin(email, password)
      .then(() => {
        toast.success("Successfully logged In");
        navi(location.state ? location.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="h-[700px]  ">
      <div className="max-w-screen-lg mx-auto flex justify-center gap-10  items-center h-full my-12 px-4 ">
        <div className="w-full max-w-md p-4 rounded-md sm:p-8 dark:bg-gray-900 dark:text-gray-100 shadow-2xl">
          <h2 className="mb-10 text-2xl md:text-3xl  font-extrabold text-center">
            Login to your account
          </h2>

          <form className="space-y-8" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label for="email" className="block text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label for="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-black text-white  dark:bg-white dark:text-gray-900"
              >
                LOGIN
              </button>
            </div>
          </form>

          <p className="text-sm text-center dark:text-gray-400 my-3">
            Dont have account?
            <Link
              to="/registration"
              rel="noopener noreferrer"
              className="focus:underline font-extrabold hover:underline"
            >
              Registration here
            </Link>
          </p>

          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-400" />
            <p className="px-3 dark:text-gray-400">OR</p>
            <hr className="w-full dark:text-gray-400" />
          </div>

          <div className="my-6 space-y-4">
            <button
              aria-label="Login with Google"
              type="button"
              onClick={() => {
                gwithpopup()
                  .then(() => {
                    toast.success("Successfully logged In");
                    navi(location.state ? location.state : "/");
                  })

                  .catch((err) => console.log(err));
              }}
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md hover:border-black  dark:border-gray-400 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="https://i.ibb.co/X466D8F/signin.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
