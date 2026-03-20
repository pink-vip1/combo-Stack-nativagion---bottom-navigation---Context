import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      if (value !== null) {
        setIsLoggedIn(true);
      }
    } catch (e) {
      console.log('Lỗi kiểm tra đăng nhập:', e);
    }
  };

  const login = async () => {
    try {
      await AsyncStorage.setItem('userToken', 'da-dang-nhap');
      setIsLoggedIn(true);
    } catch (e) {
      console.log('Lỗi lưu đăng nhập:', e);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setIsLoggedIn(false);
    } catch (e) {
      console.log('Lỗi đăng xuất:', e);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};