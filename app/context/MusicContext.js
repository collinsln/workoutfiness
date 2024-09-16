// src/context/MusicContext.js
import React, { createContext, useState } from 'react';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <MusicContext.Provider value={{ isMuted, setIsMuted }}>
      {children}
    </MusicContext.Provider>
  );
};
