import { useState, useEffect } from "react";
import axios from "axios";
import cookie from "cookie-cutter";

const defaultUser = { id: 0 };

const useUsers = () => {
  const [user, setUser] = useState(defaultUser);
  const [users, setUsers] = useState([]);
  const switchUser = (id) => {
    cookie.set("id", id, { path: "/" });
    const user = users.find((user) => user.id === Number(id));
    setUser(user || defaultUser);
  };

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [users]);

  useEffect(() => {
    const cookieId = Number(cookie.get("id")) || 0;
    switchUser(cookieId);
  }, []);

  const getUsers = async () => {
    const users = axios.get("/api/users");
    
    return users
  };
  return { user, users, switchUser }; // this is what's in the context app.js
};

export default useUsers;
