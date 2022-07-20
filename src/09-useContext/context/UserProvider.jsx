import { useState } from "react";
import { UserContext } from "./UserContext";

//const user = {
//  id: 2331,
//  name: "bosco",
//  email: "bosco11jico1100dasdasd",
//};

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user ,setUser}}>
      {children}
    </UserContext.Provider>
  );
};
