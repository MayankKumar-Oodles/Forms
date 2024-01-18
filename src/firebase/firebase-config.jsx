import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAirUndWRODz-swF1v1Bd9ntQDUOE3LP6A",
  authDomain: "employee-crud-18b82.firebaseapp.com",
  projectId: "employee-crud-18b82",
  storageBucket: "employee-crud-18b82.appspot.com",
  messagingSenderId: "859324782102",
  appId: "1:859324782102:web:2b4dd6818d6f1753288737",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
