import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJ53bV_IXHYhPtOnehCLXQi0jBFFP21wM",
  authDomain: "aeons-web-app.firebaseapp.com",
  databaseURL:
    "https://aeons-web-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "aeons-web-app",
  storageBucket: "aeons-web-app.firebasestorage.app",
  messagingSenderId: "98027920675",
  appId: "1:98027920675:web:2678bd88e52de80b4c0096",
  measurementId: "G-6NVE22H7WC",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
  app,
  auth,
  analytics,
  logEvent,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  FirebaseError,
};
