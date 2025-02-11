import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";

// Create a context with default values
export const ProductsContext = createContext({
  product: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};
