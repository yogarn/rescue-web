import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { ReactComponent as Logo } from '../rescue_logo.svg';
import ResponsiveAppBar from "./ResponsiveAppBar";

function ProfileSection() {
  return (
    <div className="profile_container" id="profile_section">
      {/* <div className="nav_container">
        <a href="#profile_section">Home</a>
        <a href="#about_section">About</a>
        <a href="#mockup_section">Mockup</a>
        <a href="#prototype_section">Prototype</a>
      </div> */}
      <ResponsiveAppBar />

      <Grid container className="profile_content_container" alignItems="center" justifyContent="center" spacing={0} style={{ height: '100%' }}>
        <Grid item xs={12} md={4.5} container justifyContent="center">
          <div className="logo_container">
            <Logo className="logo" />
          </div>
        </Grid>

        <Grid item xs={12} md={7.5} container justifyContent="center" alignItems="center">
          <div className="profile_text_container">
            <Typography variant="h1">RESCUE</Typography>
            <Typography variant="h2">
              Real-time Evaluation for Safety, Care, and Utilization of
              <br /> Emergency services
            </Typography>
            <Typography variant="body1">An app for monitoring, emergency, and consultation</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileSection;
