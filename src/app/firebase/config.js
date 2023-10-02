import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAtDZARMgfWraBat0Nr8QKOaLH734pfY8",
  authDomain: "tutorr-ff7f6.firebaseapp.com",
  projectId: "tutorr-ff7f6",
  storageBucket: "tutorr-ff7f6.appspot.com",
  messagingSenderId: "526438004443",
  appId: "1:526438004443:web:6a81b590b9b6f654eebefe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};