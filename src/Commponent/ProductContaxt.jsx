import { createContext, useState } from 'react';
import Data from '../Data/Data';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [item, setItem] = useState(Data);

  return (
    <ProductContext.Provider value={{ item, setItem }}>
      {children}
    </ProductContext.Provider>
  );
}
