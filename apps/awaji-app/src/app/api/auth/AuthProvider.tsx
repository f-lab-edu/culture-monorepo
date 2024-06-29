'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
