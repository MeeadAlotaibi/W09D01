import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Tasks from "../Tasks";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [token, setToken] = useState("");  
  const navigate = useNavigate();

  /////////////////////////////////////////////////////////
  useEffect(() => {
  signup();
 }, []);


  const signup = async (e) => {
    try {
      // e.preventDefault();
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, {
        email,
        password,
      });
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////////////////////////////////////////

  return (
    <>
      {!token ? (
        <div className="signup">
          <h1> signup now </h1>
          <br />
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <br />
          <button onClick={signup}>Sign up</button>
        </div>
      ) : (
        <>
          <Tasks token={token} />
        </>
      )}
    </>
  );
};

export default Signup;
