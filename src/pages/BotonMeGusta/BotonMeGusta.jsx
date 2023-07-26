import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./BotonMeGusta.scss";

const BotonMeGusta = () => {
  const [meGusta, setMeGusta] = useState(false);

  const handleMeGustaClick = () => {
    setMeGusta((prevMeGusta) => !prevMeGusta);
  };

  return (
    <button className={`boton-megusta ${meGusta ? "activo" : ""}`} onClick={handleMeGustaClick}>
      <FaHeart className="corazon" />
    </button>
  );
};

export default BotonMeGusta;