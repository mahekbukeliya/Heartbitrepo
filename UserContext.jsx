import React, { createContext, useState } from 'react';

// Create a context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState('Mahek');
  const users = [
    { name: 'Mahek', imageUrl: 'https://cdn-icons-png.flaticon.com/512/6833/6833591.png' },
    { name: 'Rishi', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4042/4042356.png' },
    { name: 'Rohit', imageUrl: 'https://cdn-icons-png.flaticon.com/512/6069/6069095.png' },
  ];

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser, users }}>
      {children}
    </UserContext.Provider>
  );
};
