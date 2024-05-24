// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcyjOmN0m17sSOSWlZkn6ALkPIXTGCoq8",
  authDomain: "lista-de-linguagens-330f8.firebaseapp.com",
  databaseURL: "https://lista-de-linguagens-330f8-default-rtdb.firebaseio.com",
  projectId: "lista-de-linguagens-330f8",
  storageBucket: "lista-de-linguagens-330f8.appspot.com",
  messagingSenderId: "455388594465",
  appId: "1:455388594465:web:5cda3bd2c8f35b072b7e60",
  measurementId: "G-GGGPR4T1NH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);