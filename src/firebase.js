import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaCq-jufVA8QpU8XGCkI85-84sU7z7Ep8",
  authDomain: "inventory-management-59d44.firebaseapp.com",
  projectId: "inventory-management-59d44",
  storageBucket: "inventory-management-59d44.appspot.com",
  messagingSenderId: "40189565303",
  appId: "1:40189565303:web:bfae996815f6965a1aa972",
  measurementId: "G-68K3METNK7"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };