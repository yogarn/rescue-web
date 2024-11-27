import '../opening.css'
import React, { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Opening(
  { nextClick }
) {

  return (
    <div className={`opening_container`}>
      <img src="./ilustrasi.png" className="ilustrasi" />
      <div className='button_container'>
        <h2>WELCOME TO CHAYAM APPS</h2>
        <p>Real-time Evaluation for
          Safety, Care, and Utilization
          of Emergency services</p>
        <button className='btn_next' 
        onClick={nextClick}
        >Get Started</button>
      </div>
    </div>
  );
}

export default Opening;