"use client";

import React, { createContext, useContext, useState } from "react";

type EnrollContextType = {
  openEnroll: () => void;
  closeEnroll: () => void;
  isOpen: boolean;
};

const EnrollContext = createContext<EnrollContextType | undefined>(undefined);

export const EnrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openEnroll = () => setIsOpen(true);
  const closeEnroll = () => setIsOpen(false);
  return (
    <EnrollContext.Provider value={{ openEnroll, closeEnroll, isOpen }}>
      {children}
    </EnrollContext.Provider>
  );
};

export const useEnroll = () => {
  const ctx = useContext(EnrollContext);
  if (!ctx) throw new Error("useEnroll must be used within EnrollProvider");
  return ctx;
};

export default EnrollContext;
