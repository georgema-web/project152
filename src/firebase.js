import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyC6tTacvFFII8QbypsZt1bXIp7cKehvYiI",
  authDomain: "project152-1bfda.firebaseapp.com",
  databaseURL: "https://project152-1bfda-default-rtdb.firebaseio.com",
  projectId: "project152-1bfda",
  storageBucket: "project152-1bfda.appspot.com",
  messagingSenderId: "509636658226",
  appId: "1:509636658226:web:d85e4a50741b5aa3d1282b",
  measurementId: "G-0MHPEP03QJ"
};

// Initialize Firebase
const app = initializeApp(config);
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
export default app; 