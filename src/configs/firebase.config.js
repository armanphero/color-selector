// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPJNwkVICEtETVU64aarIKQkqqwc_A8g4",
  authDomain: "color-select-1d570.firebaseapp.com",
  projectId: "color-select-1d570",
  storageBucket: "color-select-1d570.appspot.com",
  messagingSenderId: "593205840584",
  appId: "1:593205840584:web:f51f6695b0ecbb718733fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
