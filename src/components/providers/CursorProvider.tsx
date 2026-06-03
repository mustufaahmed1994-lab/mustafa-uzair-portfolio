'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface CursorContextType {
  isHovering: boolean;
  setIsHovering: (v: boolean) => void;
  cursorText: string;
  setCursorText: (v: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  isHovering: false,
  setIsHovering: () => {},
  cursorText: '',
  setCursorText: () => {},
});

export function CursorProvider({ children }: { children: ReactNode }) {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering, cursorText, setCursorText }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
