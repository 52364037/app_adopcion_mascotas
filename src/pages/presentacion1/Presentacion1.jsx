import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Presentacion1.scss';
import presentacion1 from '../../assets/presentacion1.png';




const Presentacion1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
navigate('/Presentacion2');
};

  return (
    <div className='container'>
    <figure className='present11'>
      <img src={presentacion1} alt="present1" />
    </figure>

    <button className="custom-button" onClick={handleClick}>Siguiente</button>
   </div>
   
  );
}

export default Presentacion1;