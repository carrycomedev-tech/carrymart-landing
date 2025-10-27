"use client";

import React, { useState, createContext, useContext } from 'react';

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error('useActiveSection must be used within an ActiveSectionContextProvider');
  }
  return context;
}
