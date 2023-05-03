import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { Constants } from "expo-constants";


 const firebaseConfig={
  apiKey: "AIzaSyAFuY9paoVyQ8EWmvaz_ZepzQIF_vmJiHg",
  authDomain: "task-me-59351.firebaseapp.com",
  projectId: "task-me-59351",
  storageBucket: "task-me-59351.appspot.com",
  messagingSenderId: "733660559350",
  appId: "1:733660559350:web:84a25f524e320a8f2139d7",
  measurementId: "G-DLFPE599R7"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth();
  export const db = getFirestore(app);



if (!firebase.app.length){
    firebase.initializeApp(firebaseConfig);
}

// function newFunction() {
//     return initializeApp(firebaseConfig);
// }