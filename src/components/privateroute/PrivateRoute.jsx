import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import toast from "react-hot-toast";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[90vh] ">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <>
      <Navigate state={location.pathname} to="/login"></Navigate>
    </>
  );
};

export default PrivateRoute;
