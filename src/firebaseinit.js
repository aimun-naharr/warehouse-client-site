// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwJgdJTrUUMkZMG_K7RbUDxRt99QNUP2E",
  authDomain: "brunch-fruits-warehouse.firebaseapp.com",
  projectId: "brunch-fruits-warehouse",
  storageBucket: "brunch-fruits-warehouse.appspot.com",
  messagingSenderId: "208529350612",
  appId: "1:208529350612:web:da6dfc151b64602bebc041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth