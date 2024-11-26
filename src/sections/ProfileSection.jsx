import React from "react";
import { Container, Typography, Button, Icon } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ReactComponent as Logo } from '../rescue_logo.svg';

function ProfileSection() {
  return (
    <div className="profile_container" id="profile_section">
      <div className="nav_container">
      <a href="#profile_section">Home</a>
        <a href="#about_section">About</a>
        <a href="#mockup_section">Mockup</a>
        <a href="#prototype_section">Prototype</a>
      </div>
      <div className="profile_content_container">
          <div className="logo_container">
            <Logo className="logo"></Logo>
          </div>
          <div className="profile_text_container">
            <h1>RESCUE</h1>
            <h2>Real-time Evaluation for Safety, Care, and Utilization of
            <br/>Emergency services</h2>
            <p>an apps for monitoring,emergency, and consultation</p>
          </div>
      </div>
    </div>
  );
}

export default ProfileSection;