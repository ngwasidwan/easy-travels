"use client";
import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export function ContextProvider({ children }) {
  const [userNumber, setUserNumber] = useState(null);

  return (
    <MyContext.Provider value={{ userNumber, setUserNumber }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  const context = useContext(MyContext);
  if (context === undefined)
    throw new Error("Context was used outside of Provider");

  return context;
}
