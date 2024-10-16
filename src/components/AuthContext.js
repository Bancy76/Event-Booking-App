import React, { useState, createContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap the app and provide the authentication state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    if (username === 'user' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; // Make sure you export the context
