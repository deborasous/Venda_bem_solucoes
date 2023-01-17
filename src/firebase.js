// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5NvLvapX5GS015E0bg5IW2nuzIVTLpyo",
  authDomain: "venda-bem-solucoes.firebaseapp.com",
  projectId: "venda-bem-solucoes",
  storageBucket: "venda-bem-solucoes.appspot.com",
  messagingSenderId: "11778309922",
  appId: "1:11778309922:web:c8585fa7dfae32a4acaf7b",
  measurementId: "G-B2F3959E54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };
