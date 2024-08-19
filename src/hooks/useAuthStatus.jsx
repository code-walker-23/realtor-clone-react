import { useState, useEffect } from "react";
import { auth } from "../utils/firebase";

function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false); 
      }
      setCheckingStatus(false);
    });
    return () => unsubscribe();
  }, []);

  return { loggedIn, checkingStatus };
}

export default useAuthStatus;
