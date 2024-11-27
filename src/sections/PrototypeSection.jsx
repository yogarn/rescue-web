import '../prototype.css'
import React from "react";
import Opening from '../prototype/Opening';
import { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Login from '../prototype/Login';

function PrototypeSection() {
  const [isOpening, setOpening] = useState(true);
  const [isLogin, setLogin] = useState(false);
  const openingClick = () => {
    setOpening(false)
    setLogin(true)
  }


  return (
    <div className="prototype_container" id='prototype_section'>
      <div className="hp">
      {isOpening ? <Opening nextClick={openingClick}/> : null}
      {isLogin ? <Login/> : null}
      </div>
    </div>
  );
}

export default PrototypeSection;