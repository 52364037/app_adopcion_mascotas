import React from 'react'
import { useNavigate } from 'react-router-dom';
import Imagen2 from "../../assets/presentacion2.png";
import "./Presentacion2.scss";



const Presentacion2 = () => {
  const navigate = useNavigate ();
  const handleClick = () => {
    navigate ("/Login")
  }
  return (
    
      <div className='container'>
        <figure className='imagen'>
        <img src={Imagen2} alt="" />
        </figure>
        <button className='custom-button' onClick={handleClick}>Siguiente</button>
      </div>
    
  );
}

export default Presentacion2;