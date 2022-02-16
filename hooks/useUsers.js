import { useState, useEffect } from "react";
import axios from "axios";

const useUsers = () => {
  const switchUser = (id) => {
  const user = users.find(user => user.id === Number(id))
  setUser(user);
  };

  useEffect(() => {
    getUsers().then((response) => {
    setUsers(response.data.users)
    }).catch((error) => {
      console.error(error)
    })
  },[]) 


  const getUsers = async () => {
    return axios.get("/api/users/users");
  };
  const [user, setUser] = useState({id:0});
  const [users, setUsers] = useState([]);
  return { user, users, switchUser };
};

export default useUsers;
