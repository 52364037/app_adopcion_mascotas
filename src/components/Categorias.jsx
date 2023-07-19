import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import firestore from "./firebase";

const CategoriasMascotas = () => {
  const [categoriasMascotas, setCategoriasMascotas] = useState([]);

  useEffect(() => {
    const obtenerCategoriasMascotas = async () => {
      try {
        const categoriasSnapshot = await getDocs(collection(firestore, "categorias"));
        const categoriasData = categoriasSnapshot.docs.map((doc) => doc.data());
        setCategoriasMascotas(categoriasData);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    };

    obtenerCategoriasMascotas();
  }, []);

  return (
    <div>
      <h2>Categorías de mascotas</h2>
      <ul>
        {categoriasMascotas.map((categoria, index) => (
          <li key={index}>{categoria.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriasMascotas;
