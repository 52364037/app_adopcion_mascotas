import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {dataBase} from "../Firebase/firebaseConfig";
import  AdoptaTitle  from '../../src/assets/Adopta una adorable mascota.png';

const CategoriasMascotas = () => {
  const [categoriasMascotas, setCategoriasMascotas] = useState([]);

  useEffect(() => {
    const obtenerCategoriasMascotas = async () => {
      try {
        const categoriasSnapshot = await getDocs(collection(dataBase, "CategoriasMascotas"));
        const categoriasData = categoriasSnapshot.docs.map((doc) => doc.data());
        console.log (categoriasData);

        setCategoriasMascotas(categoriasData);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    };

    obtenerCategoriasMascotas();
  }, []);

  return (
    <div>
       <figure className='present11'>
      <img src={AdoptaTitle} alt="Adopta tu Adorable Mascota" />
    </figure>
      <h2>Categorías de mascotas</h2>
      
        {categoriasMascotas.map((categoria) => (
          <div className="card" style={{width: "18rem"}}>
          <img src={categoria.imagen} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{categoria.nombre}</h5>
            <p className="card-text"> {categoria.personalidad} {categoria.historia} </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
          
        ))}
     
    </div>
  );
};

export default CategoriasMascotas;
