import React from "react";

const Favoritos = ({ mascotasFavoritas }) => {
 // Aquí asegúrate de que mascotasFavoritas sea un arreglo antes de usar map
 if (!mascotasFavoritas || !Array.isArray(mascotasFavoritas)) {
    return null; // O muestra un mensaje de que no hay mascotas favoritas
  }


  return (
    <div>
      <h2>Mascotas Favoritas</h2>
      {mascotasFavoritas.map((mascota) => (
        <div key={mascota.id}>
          <h3>{mascota.nombre}</h3>
          <img src={mascota.imagen} alt={mascota.nombre} />
          <p>Categoría: {mascota.categoria}</p>
          <p>Edad: {mascota.edad}</p>
          <p>Historia: {mascota.historia}</p>
          <p>Raza: {mascota.raza}</p>
          <p>Personalidad: {mascota.personalidad}</p>
          <p>Id: {mascota.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Favoritos;