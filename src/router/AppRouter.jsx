
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../pages/register/Register'
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Layout from "../components/Layout";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home"; 
import Presentacion1 from "../pages/presentacion1/Presentacion1";
import Presentacion2 from "../pages/presentacion2/Presentacion2";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { loginActionSync } from "../redux/actions/userActions";


const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log(user);

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged?.uid) {
        setIsLoggedIn(true);

        if (!Object.entries(user).length) {
          console.log("No hay info");
          const logged = {
            email: userLogged.auth.currentUser.email,
            name: userLogged.auth.currentUser.displayName,
            avatar: userLogged.auth.currentUser.photoURL,
            accessToken: userLogged.auth.currentUser.accessToken,
          };
          dispatch(loginActionSync(logged));
        }
        console.log(userLogged);
      } else {
        setIsLoggedIn(false);
      }

      setLoading(false);
    });
  }, [user, dispatch]);

  if (loading) {
    return <Spinner animation="grow" />;
  }


  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout />}>
    <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="presentacion1" element={<Presentacion1 />} />
            <Route path="presentacion2" element={<Presentacion2 />} />
          </Route>
          <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
            <Route path="home" element={<Home />} />
            
          </Route>
        </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;