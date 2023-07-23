// import React, { useState, useEffect } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { dataBase } from '../../Firebase/firebaseConfig';

// const Home = () => {
//   const [mascotas, setMascotas] = useState([]);

//   useEffect(() => {
//     const obtenerMascotas = async () => {
//       try {
//         const mascotasSnapshot = await getDocs(collection(dataBase, 'Mascotas'));
//         const mascotasData = mascotasSnapshot.docs.map((doc) => doc.data());
//         setMascotas(mascotasData);
//       } catch (error) {
//         console.error('Error al obtener las mascotas:', error);
//       }
//     };

//     obtenerMascotas();
//   }, []);

//   return (
//     <div>
//       <h1>Mascotas disponibles para adopción</h1>
//       {/* Mostrar la lista de mascotas */}
//       {mascotas.map((mascota) => (
//         <div key={mascota.id}>
//           <img src={mascota.imagen} alt={mascota.nombre} />
//           <h3>{mascota.nombre}</h3>
//           <p>Raza: {mascota.raza}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from '../../Firebase/firebaseConfig';
import FiltroMascotas from '../../pages/filtroMascotas/FiltroMascotas';


const Home = () => {
  const [mascotas, setMascotas] = useState([]);
  const [filtro, setFiltro] = useState('Todos');

  useEffect(() => {
    const obtenerMascotas = async () => {
      try {
        // Obtener los datos de la colección "CategoriasMascotas" desde Firebase
        const categoriasSnapshot = await getDocs(
          collection(dataBase, 'CategoriasMascotas')
        );
        const categoriasData = categoriasSnapshot.docs.map(doc => doc.data());

        // Actualizar el estado con los datos de las mascotas
        setMascotas(categoriasData);
      } catch (error) {
        console.error('Error al obtener las mascotas:', error);
      }
    };

    obtenerMascotas();
  }, []);

  // Función para manejar el cambio de filtro
  const handleFiltroChange = (nuevoFiltro) => {
    setFiltro(nuevoFiltro);
  };

  // Filtrar las mascotas según el filtro seleccionado
  const mascotasFiltradas = mascotas.filter(
    (mascota) => filtro === 'Todos' || mascota.categoria === filtro
  );

  return (
    <div>
        {/* Agregar el componente FiltroMascotas */}
      <FiltroMascotas
        opciones={['Todos', 'Perros', 'Gatos']} // Opciones de filtro para el componente
        filtro={filtro}
        onFiltroChange={handleFiltroChange}
      />
      {/* Renderizar cada mascota */}
      {mascotasFiltradas.map((mascota, index) => (
        <div key={index} className="card">
          <img src={mascota.imagen} className="card-img-top" alt={mascota.nombre} />
          <div className="card-body">
            <h5 className="card-title">{mascota.nombre}</h5>
            <p className="card-text">Raza: {mascota.raza}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
