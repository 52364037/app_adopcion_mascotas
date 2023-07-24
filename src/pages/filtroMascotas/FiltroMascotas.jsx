import React from 'react';
import './FiltroMascotas.scss'; // Importa tus estilos CSS aquí
import imgPerro from '../../assets/imgPerro.png';
import imgGato from '../../assets/imgGato.png';

const FiltroMascotas = ({ opciones, filtro, onFiltroChange }) => {
  return (
    <div className="filtro-mascotas">
      {opciones.map((opcion) => (
        <button
          key={opcion}
          className={`filtro-btn ${filtro === opcion ? 'activo' : ''}`}
          onClick={() => onFiltroChange(opcion)}
        >
          {opcion === 'Perros' ? (
            <img className='BottunGat' src={imgPerro} alt="Perros" />
          ) : (
            <img className='BottunDog' src={imgGato} alt="Gatos" />
          )}
          {opcion}
        </button>
      ))}
    </div>
  );
};


export default FiltroMascotas;