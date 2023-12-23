"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface MobileMenuContextProps {
  extraMobileMenu: boolean;
  goMenu: () => void;
  goBack: () => void;
}

export const ContextMobile = createContext<MobileMenuContextProps | undefined>(
  undefined
);

export function MobileContextProvider({ children }: { children: ReactNode }) {
  const [extraMobileMenu, setExtraMobileMenu] = useState(false);

  const goMenu = () => {
    setExtraMobileMenu(true);
  };

  const goBack = () => {
    setExtraMobileMenu(false);
  };

  return (
    <ContextMobile.Provider value={{ extraMobileMenu, goMenu, goBack }}>
      {children}
    </ContextMobile.Provider>
  );
}

export function useMobileContext() {
  const context = useContext(ContextMobile);

  if (!context) {
    throw new Error(
      "useMobileContext must be used within a MobileContextProvider"
    );
  }

  return context as MobileMenuContextProps;
}
