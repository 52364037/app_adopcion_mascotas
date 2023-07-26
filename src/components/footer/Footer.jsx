import React, { useState, useEffect }  from "react";
import BotonMeGusta from "../../pages/BotonMeGusta/BotonMeGusta";
import "./Footer.scss";
import { FaHouse } from "react-icons/fa6";
import { FaComment } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";
import Favoritos from "../../pages/favoritos/Favoritos";

const Footer = () => {
  const handleRouteChange = (route) => {
    window.location.href = route;
  };
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const obtenerFavoritos = async () => {
      try {
        const q = query(collection(dataBase, "CategoriasMascotas"), where("favorito", "==", true));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const favoritosData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setFavoritos(favoritosData);
        });

        return unsubscribe;
      } catch (error) {
        console.error("Error al obtener los favoritos:", error);
      }
    };

    obtenerFavoritos();
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        {/* <button className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                    {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap" /></svg> */}
        {/* </button> */}

        <div className="footer">
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li className="Home">
              <button
                className="nav-link text-secondary"
                onClick={() => handleRouteChange("/")}
              >
                <svg
                  className="bi1 d-block mx-auto mb-1"
                  width="24"
                  height="24"
                >
                  <use href="#home" />
                </svg>

                <div className="icon_home" title="Home">
                  <FaHouse />
                </div>
              </button>
            </li>
            <li>
              <button
                className="nav-link text-secondary"
                onClick={() => handleRouteChange("/comentarios")}
              >
                <svg
                  className="bi2 d-block mx-auto mb-1"
                  width="24"
                  height="24"
                >
                  <use href="#speedometer2" />
                </svg>

                <div className="icon_comment" title="Comentarios">
                  <FaComment />
                </div>
              </button>
            </li>
            <li>
              <button
                className="nav-link text-secondary"
                onClick={() => handleRouteChange("/favoritos")}
              >
                <svg
                  className="bi3 d-block mx-auto mb-1"
                  width="24"
                  height="24"
                >
                  <use href="#table" />
                </svg>

                <div className="icon_heard" title="Favoritos">
                  <FaHeart />
                </div>
              </button>
            </li>
            <li>
              <button
                className="nav-link text-secondary"
                onClick={() => handleRouteChange("/perfil1")}
              >
                <svg
                  className="bi4 d-block mx-auto mb-1"
                  width="24"
                  height="24"
                >
                  <use href="#grid" />
                </svg>

                <div className="icon_user" title="Perfil1">
                  <FaUserLarge />
                </div>
              </button>
            </li>
          </ul>
          <div className="favoritos-container">
        {favoritos.map((mascota) => (
          <div key={mascota.id} className="favorito-card">
              <Favoritos mascota={mascota} />
            {/* Mostrar información de la mascota favorita */}
          </div>
        ))}
      </div>
    </div>
  

        </div>
      </div>

  );
};

export default Footer;
