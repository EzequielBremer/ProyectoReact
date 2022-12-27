// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "santapaz-15f86.firebaseapp.com",
  projectId: "santapaz-15f86",
  storageBucket: "santapaz-15f86.appspot.com",
  messagingSenderId: "684107909048",
  appId: "1:684107909048:web:7f8756b6640fec05c9f14d",
  measurementId: "G-QTK68KHJJW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);