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

        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                {/* <button className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                    {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap" /></svg> */}
                {/* </button> */} 

        </div>
      </div>

  );
};

export default Footer;
