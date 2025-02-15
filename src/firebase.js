// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase project configuration (Replace with your actual Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyCeoXyMUSuoA3_3WGzfT0I8LleRY86LuTU",
  authDomain: "auth-app-1081e.firebaseapp.com",
  projectId: "auth-app-1081e",
  storageBucket: "auth-app-1081e.appspot.com", // ✅ Fixed storageBucket
  messagingSenderId: "54933489340",
  appId: "1:54933489340:web:78278167ac1452f0f432b9",
  measurementId: "G-L4TJXHS0WG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export auth to use in other files
export { auth };
