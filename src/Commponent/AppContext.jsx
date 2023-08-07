import { createContext, useState } from 'react';


export const AppContext = createContext();

export function AppProvder({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <AppContext.Provider value={{ open, set }}>
      {children}
    </AppContext.Provider>
  );
}
