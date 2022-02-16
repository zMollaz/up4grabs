import { createContext, useState, useEffect } from 'react';
import axios from "axios";

const UserContext = createContext([]);

export const UserProvider = ({children}) => {
  
  const userData = async () => {
    const userData = await axios.get("api/users/users")
    console.log(789, userData.data.users);
    return userData.data.users;
  }
  const [user, setUser] = useState(userData());
  const [users, setUsers] = useState(userData());

  // return ({
  //   user: user,
  //   setUser: setUser,
  //   users: users,
  //   setUser: setUsers,
  // }
  // )

  return (
    <UserContext.Provider value={{user, users, setUser, setUsers}}>
      {children}
    </UserContext.Provider>
  )

}

export default UserContext;