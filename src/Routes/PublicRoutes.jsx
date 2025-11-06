import { Navigate, Outlet } from "react-router";

export const PublicRoutes = ({ isLogged }) => {
  return !isLogged ? <Outlet /> : <Navigate to="/home" />;
};
