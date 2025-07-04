import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "./firebaseConfig";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return setPersistence(auth, browserSessionPersistence).then(() => {
      return signInWithEmailAndPassword(auth, email, password);
    });
  };

  useEffect(() => {
    let timer = null;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (auth.currentUser) {
          signOut(auth);
        }
      }, 1000 * 60 * 180); // set to 3hrs change to 15 minutes in production
    };

    let activityTimeout;
    const debounceReset = () => {
      clearTimeout(activityTimeout);
      activityTimeout = setTimeout(resetTimer, 200); // 200ms debounce
    };

    window.addEventListener("mousemove", debounceReset);
    window.addEventListener("keydown", debounceReset);
    resetTimer();

    return () => {
      window.removeEventListener("mousemove", debounceReset);
      window.removeEventListener("keydown", debounceReset);
      clearTimeout(timer);
      clearTimeout(activityTimeout);
    };
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authValue = {
    createUser,
    user,
    loginUser,
    logOut,
    loading,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;