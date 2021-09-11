import React from "react";
import Web3 from "web3";
import React, { useEffect, useState } from "react";
import "./App.css";
import AddCandidate from "./myComponents/AddCandidate";
import NavBar from "./myComponents/NavBar";

function App() {
  useEffect(() => {}, []);

  const laodWeb3 = () => {
    // if(window.ethereum){
    // window.web3=new
    // }
  };
  return (
    <div className="navbar">
      <NavBar />
    </div>
  );
}

export default App;
