import { initializeApp } from "firebase/app";

export const initFirebase = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyCs6UabAxhe6KVHazATo4jLQlBIW4s-p2I",
    authDomain: "app-life-health.firebaseapp.com",
    projectId: "app-life-health",
    storageBucket: "app-life-health.appspot.com",
    messagingSenderId: "397526974601",
    appId: "1:397526974601:web:9a152104bb1746293b8658",
    measurementId: "G-Z8HJ49S6RJ"
  };
  
  const app = initializeApp(firebaseConfig);
  return app;
};
