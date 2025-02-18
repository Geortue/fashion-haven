import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// Creating the CategoriesContext with default values
export const CategoriesContext = createContext({
  categoriesMap: {},
});

// CategoriesProvider component to provide categories context to its children
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState({});

  // Effect to fetch categories data from Firebase when the component mounts
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap);
    };

    getCategoriesMap();
  }, []);

  // Value to be provided by the CategoriesContext
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};