import React from 'react';
// import Selector from "../../assets/categorias.png";

const FiltroCategorias = ({ opciones, filtro, onFiltroChange }) => {
  const datos = [
    { id: 1, categoria: "Perros" },
    { id: 2, categoria: "Gatos" },
    // Agrega más categorías si es necesario
  ];

  return (
    <div>
      {/* Botones de filtro */}
     {/* <button onClick={() => onFiltroChange("Todos")}>Todos</button> */}
     <div>
      {/* <img src={Selector} alt="selector" /> */}
     <button onClick={() => onFiltroChange("Perros")}>Perros</button>
      <button onClick={() => onFiltroChange("Gatos")}>Gatos</button> 
     </div>

      {/* <button onClick={() => onFiltroChange("Todos")}>Todos</button>
      {opciones.map((opcion) => (
        <button key={opcion} onClick={() => onFiltroChange(opcion)}>{opcion}</button>
      ))} */}

      {/* Lista de categorías seleccionada */}
      <ul>
        {datos
          .filter((item) => filtro === "Todos" || item.categoria === filtro)
          .map((item) => (
            <li key={item.id}>{item.categoria}</li>
          ))}
      </ul>
    </div>
  );
};

export default FiltroCategorias;