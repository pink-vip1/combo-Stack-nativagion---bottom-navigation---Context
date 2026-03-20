import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import RootRouter from './src/router/index';

export default function App() {
  return (
    <AuthProvider>
      <RootRouter />
    </AuthProvider>
  );
}