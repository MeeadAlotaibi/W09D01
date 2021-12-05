import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pages from "../Pages";
import Task from "../Task";
import axios from "axios";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  //////////////////////////////////////////////////////////
  
  useEffect(() => {
    getTasks();
  }, []);

  ////////////////////// GetTasks ///////////////////////////////

  const getTasks = async () => {
    const storageToken = localStorage.getItem("token");
    setToken(storageToken);
    const adminn = localStorage.getItem("admin");
    setAdmin(adminn);

    try {
      const res = await axios.get(`${BASE_URL}/tasks`, {
        headers: { Authorization: `Bearer ${storageToken}` },
      });
      console.log(res.data);
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////// DeleteTasks ////////////////////////////

  const deleteTasks = async (id) => {
    try {
      console.log(id);
      const res = await axios.delete(`${BASE_URL}/task/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res.data);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    localStorage.clear();
  };
  return (
    <>
      {token ? (
        <>
          <ul>
            {tasks.map((item) => (
              <Task
                key={item._id}
                item={item}
                admin={admin}
                deleteTasks={deleteTasks}
              />
            ))}
          </ul>
          <Link to="/">
            <button onClick={logout}>log out</button>
          </Link>
        </>
      ) : (
        <Pages />
      )}
    </>
  );
}

export default Dashboard;
