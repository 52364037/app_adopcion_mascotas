import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutActionAsync } from "../../redux/actions/userActions";
import Image from "react-bootstrap/Image";
import "./Home.scss";
// import CategoriasMascotas from "../categorias/Categorias";

const Home = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log(user);

  return (
    <div>
      Home
      <div>
        <Image src={user?.avatar} roundedCircle />
        <h2>{user?.name}</h2>
      </div>
      <button onClick={() => dispatch(logoutActionAsync())}>
        Cerrar Sesión
      </button>
      {/* <CategoriasMascotas /> */}
    </div>
  );
};

export default Home;
