// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

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
const db = getFirestore(app);
export { db };
export const storage = getStorage(app);

