import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";

const reducer = {
  user: userReducer,
};
const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

// reducer configuramos todos los reducers 
// devTool lo configuramos, es la extension donde podemos ver los estados 
// va estar disponble en el ambiente de desarrollo, pero no en produccion.



