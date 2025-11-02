import React, { createContext, useContext, useMemo, useState } from 'react';
import type { UserType } from '../../types/user';

interface AuthState {
  userType: UserType;
  userName: string;
}

interface AuthContextValue extends AuthState {
  login: (userType: UserType, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userType, setUserType] = useState<UserType>(null);
  const [userName, setUserName] = useState('');

  const login = (type: UserType, name: string) => {
    setUserType(type);
    setUserName(name);
  };

  const logout = () => {
    setUserType(null);
    setUserName('');
  };

  const value = useMemo(() => ({ userType, userName, login, logout }), [userType, userName]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
