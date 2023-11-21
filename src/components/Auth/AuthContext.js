import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Auth = createContext();

function AuthContext({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <Auth.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </Auth.Provider>
  );
}

export default AuthContext;
