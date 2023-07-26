import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";
import FiltroCategorias from "../../pages/filtroCategorias/FiltroCategorias";
import AdoptaTitle from "../../assets/Adopta una adorable mascota.png";
import Personalidad from "../../assets/Frame 35.png";
import genero from "../../assets/hembra.png";
import Raza from "../../assets/raza.png";
import EdadMascota from "../../assets/edad.png";
import Ubication from "../../assets/ubication.png";
import BotonMeGusta from "../../pages/BotonMeGusta/BotonMeGusta"; 
import "./Categorias.scss";


const CategoriasMascotas = () => {
  const [categoriasMascotas, setCategoriasMascotas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [filtro, setFiltro] = useState("Todos"); // Estado del filtro
 


  useEffect(() => {
// Lógica para obtener las categorías de mascotas...
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
  // Función para manejar el cambio de filtro
  const handleFiltroChange = (nuevoFiltro) => {
    setFiltro(nuevoFiltro);
  };

  const handleFavoritoClick = (mascota) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, mascota]);
  };


  const opcionesFiltro = categoriasMascotas.map((categoria) => categoria.categoria);

  return (
    <div className="container_cate">
      <figure className="present11">
        <img src={AdoptaTitle} alt="Adopta tu Adorable Mascota" />
      </figure>
      <h2>Categorías de mascotas</h2>
       {/* Agregar los botones de filtro y pasar el estado y función */}
       <FiltroCategorias opciones={opcionesFiltro} filtro={filtro} onFiltroChange={handleFiltroChange} />
{/* Lista de categorías de mascotas filtradas */}
      {categoriasMascotas.filter((categoria) => filtro === "Todos" || categoria.categoria === filtro)
      .map((categoria) => (
        <div key={categoria.id} className="card" style={{ width: "25rem" }}> 
           <div href={`/mascotas/${categoria.id}`}> {/* Reemplazar <link> por <a> */}
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
          {/* Agrega el botón de "Me gusta" dentro del div.card-body */}
          <BotonMeGusta onClick={() => handleFavoritoClick(categoria)} />
        </div>
      ))}
    </div>
  );
};
export default CategoriasMascotas;