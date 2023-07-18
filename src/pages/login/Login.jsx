import React, { useState } from "react";
// import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import {
  loginActionAsync,
  actionLoginGoogle,
} from "../../redux/actions/userActions";
import { Link } from "react-router-dom";
import "./Login.scss";
import { IoIosMail } from "react-icons/io";

import { IoIosEye } from "react-icons/io";
import google from "../../assets/google-logo.png";

const schema = yup.object({
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Este campo es obligatorio"),
  password: yup.string().required("Este campo es obligatorio"),
})

// const validationSchema = yup.object({
//   email: yup
//     .string()
//     .email("Debes ingresar tu correo electronico")
//     .required("Este campo es obligatorio"),
//   password: yup.string().required("Este campo es obligatorio"),
// });

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  



  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const logIn = (dataForm) => {
    console.log(dataForm);
    dispatch(loginActionAsync(dataForm.email, dataForm.password));
  };

  const handleGoogleLogin = () => dispatch(actionLoginGoogle());

  return (
    <main className="main">
      <figure className="imagen_login">
        <img
          src=""
          alt=""
        />
      </figure>
      <div>
        <span className="span">
          Login or create an account with your phone number to start ordering
        </span>
      </div>
      <Form className="p-5" onSubmit={handleSubmit(logIn)}>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="" {...register("email")} />
          <Form.Text className="text-muted">{errors.email?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder=""
            {...register("password")}
          />
          <div className="icono_sobre">
            <IoIosMail />
          </div>
          
          <div className="icono_ojo" onClick={handleTogglePassword}>
            <IoIosEye />
          </div>
          <Form.Text className="text-muted">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>

        <button type="submit" className="buttonLogin ">
          Login
        </button>

        <div className="crearNuevoUsuario">
          <p>
            {" "}
            <Link className="CreateUser" to="/register">Create New User</Link>
          </p>
        </div>
      </Form>
      <div className="">
        <div>
          <figure onClick={handleGoogleLogin}>
            <img className="Login_google" src={google} alt="google" />
            <p className="Login">LOGIN WITH GOOGLE</p>
          </figure>
        </div>
      </div>
    </main>
  );
};

export default Login;
