import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutActionAsync } from "../../redux/actions/userActions";
import Image from "react-bootstrap/Image";
import './Perfil1.scss';
import Footer from "../../components/footer/Footer";

const Perfil1 = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log(user);

  return (
    <div>
      estoy en el Perfil1
      <div className="Avatar">
        <Image src={user?.avatar} roundedCircle />
      </div>
      <div className="Name_user">
        <h2>{user?.name}</h2>
      </div>

     <button onClick={() => dispatch(logoutActionAsync())}>
        Cerrar Sesión
      </button> 
      <form>
        <div className="container">
          <div className="name">
            <label htmlFor="nombre"><h4>Nombre:</h4></label>
          </div>
          <div>
            <input type="text" id="nombre" name="nombre" required style={{
              backgroundColor: 'white', color: 'black', width: '330px', right: '40px', padding: '10px',
              lineHeight: '20px',
            }} />
          </div>
          <div className="last_name">
            <label htmlFor="apellido"><h4>Apellido:</h4></label>
          </div>
          <div>
            <input type="text" id="apellido" name="apellido" required style={{
              backgroundColor: 'white', color: 'black', width: '330px', right: '40px', padding: '10px',
              lineHeight: '20px',
            }} />
          </div>
          <div className="mail">
            <label htmlFor="correo"><h4>Correo:</h4></label>
          </div>
          <div>
            <input type="email" id="correo" name="correo" required style={{
              backgroundColor: 'white', color: 'black', width: '330px', right: '40px', padding: '10px',
              lineHeight: '20px',
            }} />
          </div>
          {/* <div className="guardar"> */}
          <button type="submit" className="custom-button">Guardar</button>
          {/* </div> */}
        </div>
      </form>

      <Footer />


    </div>

  );

};

export default Perfil1;
