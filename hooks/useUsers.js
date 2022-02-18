import { useState, useEffect } from "react";
import axios from "axios";
import cookie from "cookie-cutter";

const defaultUser = { id: 1 };

const useUsers = () => {
  
     const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(defaultUser);
  const [users, setUsers] = useState([]);

  const switchUser = (id) => {

    let uId = id;
    if (!uId) {
      uId = 1;
    }
      cookie.set("id", uId, { path: "/" });
      const user = users.find((user) => user.id === Number(uId));
      setUser(user || defaultUser);

  };

  useEffect(() => {
    getUsers()
    .then((response) => {
      setUsers(response.data.users);
      setLoaded(true)
    })
    .catch((error) => {
      console.error(error);
    });
  }, [users]);
  
  useEffect(() => {
    const cookieId = Number(cookie.get("id")) || 1;
    switchUser(cookieId);
  }, [loaded]);

  const getUsers = async () => {
    const users = axios.get("/api/users");
    
    return users
  };

  return { user, users, switchUser, loaded }; // this is what's in the context app.js
};

export default useUsers;
