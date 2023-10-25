import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
  ButtonGroup,
} from "@material-tailwind/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import toast from "react-hot-toast";

export function StickyNavbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlelogout = () => {
    logout().then(() => {
      toast.success("Successfully Logged out");
      navigate("/");
    });
  };
  console.log(user);
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-b-2 border-t-2 border-black"
              : ""
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-b-2 border-t-2 border-black"
              : ""
          }
        >
          About
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/schedule_&_price"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-b-2 border-t-2 border-black"
              : ""
          }
        >
          Schedule & Price
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/hiring"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-b-2 border-t-2 border-black"
              : ""
          }
        >
          Hiring
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="  h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="mx-auto max-w-screen-2xl flex items-center justify-between text-blue-gray-900">
        <Link
          as="a"
          to={"/"}
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <h1 className="border-4 border-black text-2xl md:text-4xl">
            <span className="bg-black p-1 md:p-0 text-white">Event</span>
            Crafters
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className=" w-max flex-col gap-4 hidden lg:inline-block">
            {user ? (
              <ButtonGroup size="sm">
                <Button>
                  <div className="flex justify-center items-center">
                    <h4 className="font-semibold mr-1 ">{user.displayName}</h4>
                    {user.photoURL ? (
                      <img
                        src={user?.photoURL}
                        className="rounded-full w-[30px]  h-[30px]  m-1 border border-white"
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </Button>
                <Button onClick={handlelogout} className="inline-block">
                  <span>LogOut</span>
                </Button>
              </ButtonGroup>
            ) : (
              <Link to="/login">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Login</span>
                </Button>
              </Link>
            )}
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}

        <div className="flex w-max flex-col gap-4">
          {user ? (
            <ButtonGroup size="sm">
              <Button>
                <div className="flex justify-center items-center">
                  <h4 className="font-semibold mr-1 ">{user.displayName}</h4>
                  {user.photoURL ? (
                    <img
                      src={user?.photoURL}
                      className="rounded-full m-1 border border-white"
                      width="30px"
                      height="30px"
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </div>
              </Button>
              <Button onClick={handlelogout} className="inline-block">
                <span>LogOut</span>
              </Button>
            </ButtonGroup>
          ) : (
            <Link to="/login">
              <Button variant="gradient" size="sm" className="inline-block">
                <span>Login</span>
              </Button>
            </Link>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
}
