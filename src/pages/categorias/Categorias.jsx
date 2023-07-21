import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";
import AdoptaTitle from "../../assets/Adopta una adorable mascota.png";
import Personalidad from "../../assets/Frame 35.png";
import genero from "../../assets/hembra.png";
import Raza from "../../assets/raza.png";
import EdadMascota from "../../assets/edad.png";
import Ubication from "../../assets/ubication.png";
import "./Categorias.scss";
import Bloque from "../../assets/Frame 9.png";

const CategoriasMascotas = () => {
  const [categoriasMascotas, setCategoriasMascotas] = useState([]);

  useEffect(() => {
    const obtenerCategoriasMascotas = async () => {
      try {
        const categoriasSnapshot = await getDocs(
          collection(dataBase, "CategoriasMascotas")
        );
        const categoriasData = categoriasSnapshot.docs.map((doc) => doc.data());
        console.log(categoriasData);

        setCategoriasMascotas(categoriasData);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    };

    obtenerCategoriasMascotas();
  }, []);

  return (
    <div className="container_cate">
      <figure className="present11">
        <img src={AdoptaTitle} alt="Adopta tu Adorable Mascota" />
      </figure>
      <h2>Categorías de mascotas</h2>

      {categoriasMascotas.map((categoria, index) => (
        <div key={index} className="card" style={{ width: "25rem" }}>
          <img src={categoria.imagen} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="LogoGenero">
              {" "}
              {categoria.nombre}
            <div>
              <figure>
                  <img src={genero} alt="generoMascota" />
                </figure>
              </div>
            </h5>
            <div>
              <figure className="razayedad">
                <img src={Raza} alt="Tipo-de-Raza" />
                 <h5 className="card-texto">{categoria.raza} </h5> 
                <img src={EdadMascota} alt="Edad promedio de la Mascota" />
                <h5 className="card-text">{categoria.edad}</h5>
              </figure>
            </div>
            <div>
              <figure className="personalidad">
                <img className="EdadMascota" src={Personalidad} alt="imagen de personalidad" />
              </figure>
            </div>
            <figure className="ubication">
            <img src={Ubication} alt="ubication" />
            </figure>
            <div className="historia_mascota">
            <h5 className="card_text">{categoria.ana}  {categoria.kiara}  {categoria.toll} {categoria.pitufa} {categoria.katy} {categoria.misu} {categoria.hermanitos} {categoria.toby} {categoria.tomas} {categoria.noa} </h5>
            </div>
           <div className="categoria_mascotas">
           <p className="card-textt">{categoria.historia} </p>
           </div>

            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriasMascotas;
