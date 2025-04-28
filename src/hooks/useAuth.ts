import { useState, useEffect } from "react";
import {
  auth,
  analytics,
  logEvent,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  FirebaseError,
} from "../firebase/BaseConfig";
import { User } from "firebase/auth";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      logEvent(analytics, "googleSignInWithPopup");
      console.log(111);
      console.log("Google sign-in successful:", result);
    } catch (error: unknown) {
      const err = error as FirebaseError;
      logEvent(analytics, "googleSignInWithPopupError");
      console.error("Google sign-in error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        logEvent(analytics, "onAuthStateChangedIn");
        console.log("User signed in:", user);
        setCurrentUser(user);
      } else {
        logEvent(analytics, "onAuthStateChangedOut");
        console.log("User signed out");
        setCurrentUser(null);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return {
    currentUser,
    isLoading,
    signInWithGoogle,
  };
};

export default useAuth;
