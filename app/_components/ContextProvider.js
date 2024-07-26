"use client";
import {
  createContext,
  useContext,
  useState,
  useRef,
  useTransition,
} from "react";

const MyContext = createContext();

export function ContextProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null);
  const [isPending, startTransition] = useTransition();
  const curSection = useRef("");

  return (
    <MyContext.Provider
      value={{
        activeModal,
        isPending,
        curSection,
        setActiveModal,
        startTransition,
      }}
    >
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
