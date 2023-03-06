// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWaT_iQ3CZD7PJ7hO-utro9JFKqIeTVKg",
    authDomain: "cs378-p4.firebaseapp.com",
    databaseURL: "https://cs378-p4-default-rtdb.firebaseio.com",
    projectId: "cs378-p4",
    storageBucket: "cs378-p4.appspot.com",
    messagingSenderId: "462405594804",
    appId: "1:462405594804:web:3dd80b1ef46888a51d71e1",
    measurementId: "G-SMGNMKVB49"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;