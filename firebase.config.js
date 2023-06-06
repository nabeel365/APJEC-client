// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVjBgGjleDkKnpBA62cZcRi41vZCvOzew",
  authDomain: "craftopia-art-school.firebaseapp.com",
  projectId: "craftopia-art-school",
  storageBucket: "craftopia-art-school.appspot.com",
  messagingSenderId: "503789249322",
  appId: "1:503789249322:web:53e15a26ce28895ec2b453"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;