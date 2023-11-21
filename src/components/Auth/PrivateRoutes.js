import React, { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";
function PrivateRoutes() {
  const { isLoggedIn } = useAuth();
  console.log("auth : ", isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
  // return <Outlet />;
}

export default PrivateRoutes;
