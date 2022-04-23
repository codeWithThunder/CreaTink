// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfHjiG7jStWmT0a-4juzq0Ccn4zoR1sIU",
  authDomain: "creatink-93711.firebaseapp.com",
  projectId: "creatink-93711",
  storageBucket: "creatink-93711.appspot.com",
  messagingSenderId: "199324668525",
  appId: "1:199324668525:web:739d3a79a3658a26956564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;