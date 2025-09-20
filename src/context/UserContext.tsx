/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useContext } from "react";
// 2. Define the context type (user + setter)
interface UserContextType {
  user: string;
  accountBalance: string;
  setUser: (user: string) => void;
  setAccountBalance: (user: string) => void;
};

// 3. Create the context (with undefined as initial, so we force using provider)
const UserContext = createContext<UserContextType | undefined>(undefined);

// 4. Provider component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string>(() => {
    // updates the user in localstorage so that even if the user refreshes, it still stays
    const savedUser = localStorage.getItem("username")
    return savedUser || ''
  });
  const [accountBalance, setAccountBalance] = useState<string>(() => {
    // updates the user in localstorage so that even if the user refreshes, it still stays
    const savedBalance = localStorage.getItem("accountBalance")
    return savedBalance || ''
  });

  return (
    <UserContext.Provider value={{ user, setUser, accountBalance, setAccountBalance }}>
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
