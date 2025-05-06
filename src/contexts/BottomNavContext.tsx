import React, { createContext, useContext, useState } from 'react';

interface BottomNavContextType {
  showBottomNav: boolean;
  setShowBottomNav: (show: boolean) => void;
}

const BottomNavContext = createContext<BottomNavContextType | undefined>(undefined);

export const BottomNavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showBottomNav, setShowBottomNav] = useState(true);

  return (
    <BottomNavContext.Provider value={{ showBottomNav, setShowBottomNav }}>
      {children}
    </BottomNavContext.Provider>
  );
};

export const useBottomNav = () => {
  const context = useContext(BottomNavContext);
  if (context === undefined) {
    throw new Error('useBottomNav must be used within a BottomNavProvider');
  }
  return context;
}; 