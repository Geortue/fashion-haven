import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// Create a context with default values
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  // State to hold the current user
  const [currentUser, setCurrentUser] = useState(null);
  // Value to be passed to the context provider
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        // Create user document in Firestore if user is authenticated
        createUserDocumentFromAuth(user);
      }
      // Update the current user state
      setCurrentUser(user);
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  // Provide the context value to children components
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};