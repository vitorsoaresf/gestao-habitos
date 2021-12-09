import { createContext, useState } from "react";

export const AuthenticatedContext = createContext();

export const AuthenticatedProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const setAccess = () => {
    setAuthenticated(!authenticated);
  };

  return (
    <AuthenticatedContext.Provider value={{ authenticated, setAccess }}>
      {children}
    </AuthenticatedContext.Provider>
  );
};
