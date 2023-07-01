import React from "react";
import { useAuth } from "../../context/auth-context";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const { authState } = useAuth();
  const location = useLocation();

  return authState?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
