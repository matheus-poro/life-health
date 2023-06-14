import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCs6UabAxhe6KVHazATo4jLQlBIW4s-p2I",
  authDomain: "app-life-health.firebaseapp.com",
  projectId: "app-life-health",
  storageBucket: "app-life-health.appspot.com",
  messagingSenderId: "397526974601",
  appId: "1:397526974601:web:9a152104bb1746293b8658",
  measurementId: "G-Z8HJ49S6RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);