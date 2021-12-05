import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
 const BASE_URL = process.env.REACT_APP_BASE_URL
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
  //  const [message, setMessage] = useState("");

 const navigate = useNavigate();

///////////////////////////////////////

  const signup = async(e)=>{
  try {
    e.preventDefault();
    const res = await axios.post(`${BASE_URL}/signup`, {
      email,
      password,
      role: "61a6121e8b3f4a949dee5bde",
    });
    navigate("/Signin")
    
  } catch (error) {
    console.log(error);
  }
 ;
}



 
  return (
    <>
      <form onSubmit={signup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placehoder="Enert your Email"
          onChange={(e) => {setEmail(e.target.value);}}
        />
        <br /> <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placehoder="Enert your password"
          onChange={(e) => {setPassword(e.target.value);}}
        />
        <br /> <br />
        <button type="submit">Sign up</button>
      </form>
      
    </>
  );
};

export default Signup;
