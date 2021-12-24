import { useState, useEffect } from "react";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const useAuthState = () => {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const onAuthChange = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
      } else {
        setUserData("");
        console.log("No login user");
      }
    });
    return onAuthChange;
  }, [auth]);
  return [userData];
};
