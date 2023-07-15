// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW1VfuaX4bKJhbY7oIOo4vU8SadwP_kwI",
  authDomain: "app-adoption-mascotas.firebaseapp.com",
  projectId: "app-adoption-mascotas",
  storageBucket: "app-adoption-mascotas.appspot.com",
  messagingSenderId: "75607517762",
  appId: "1:75607517762:web:df474929afcde71385dbdb",
  measurementId: "G-SE37P3KNF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);