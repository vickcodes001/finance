/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useContext } from "react";

// 1. Define the shape of the user (you can expand this later)
type User = {
  username: string;
  email?: string;
} | null;

// 2. Define the context type (user + setter)
type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

// 3. Create the context (with undefined as initial, so we force using provider)
const UserContext = createContext<UserContextType | undefined>(undefined);

// 4. Provider component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 5. Hook for easy access
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be inside UserProvider");
  return context;
};
