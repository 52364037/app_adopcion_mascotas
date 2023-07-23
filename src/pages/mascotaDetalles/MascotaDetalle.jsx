import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa useParams para obtener el id desde la URL
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";

const MascotaDetalle = () => {
  const { id } = useParams(); // Obtiene el id desde la URL
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    const obtenerMascota = async () => {
      try {
        // Obtener la mascota específica desde Firebase utilizando su id
        const mascotaDoc = doc(dataBase, "CategoriasMascotas", id);
        const mascotaSnapshot = await getDoc(mascotaDoc);
        const mascotaData = mascotaSnapshot.data();

        // Actualizar el estado con los datos de la mascota
        setMascota(mascotaData);
      } catch (error) {
        console.error("Error al obtener la mascota:", error);
      }
    };

    obtenerMascota();
  }, [id]);

  if (!mascota) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      {/* Renderiza los detalles de la mascota */}
      <h2>{mascota.nombre}</h2>
      {/* Agrega aquí el resto de la información de detalle de la mascota */}
    </div>
  );
};

export default MascotaDetalle;