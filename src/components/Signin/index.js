import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router";
import Tasks from "../Tasks";
import Dashboard from "../Dashboard";



/////////////////////////////////////////////

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(false);

useEffect(() => {
  login();
}, []);

  
  const login = async (e) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/signin`, {
        email,
        password,
      });
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      if (res.data.result.role.role === "admin") {
        localStorage.setItem("role", res.data.result.role.role);
        setAdmin(true);
      }
     } catch (error) {
      console.log(error);
     }
  };

  return (
    <>
      {!token ? (
        <div className="signup">
          <br />
          <br />
          <h1> Or .. login here</h1>
          <input
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /> <br />
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={login}>login</button>
        </div>
      ) : (
        <>{admin ? <Dashboard token={token} /> : <Tasks token={token} />}</>
      )}
    </>
  );
};

export default Signin;
