import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRouter = ({ isAutentication }) => {
  return <div>{isAutentication ? <Outlet /> : <Navigate to="/Login" />}</div>;
};

export default PrivateRouter;
