// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAurNFLpymrbNkKvyKwnAbMXxRqbRr6DX4",
  authDomain: "my-portfolio-5806b.firebaseapp.com",
  projectId: "my-portfolio-5806b",
  storageBucket: "my-portfolio-5806b.appspot.com",
  messagingSenderId: "206561585606",
  appId: "1:206561585606:web:30c3768f0003e6375a6ac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

