import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
// import Nav from "./components/Nav";
import Task from "./components/Task";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  return (
    <>
      <Signup />
      {/* <hr /> */}
      <Signin />
      <Routes>
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Signin" element={<Signin />} />
        <Route exact path="/Task" element={<Task />} />
        <Route exact path="/Tasks" element={<Tasks />} />
      </Routes>
    </>
  );
}
export default App;
