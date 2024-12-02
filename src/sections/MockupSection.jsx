import "../mockup.css";
import React from "react";
import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

function MockupSection() {
  return (
    <div className="mockup_container" id="mockup_section">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="mockup_image_wrapper">
              <img
                src="/mockup_merged.png"
                alt="Mockup"
                className="mockup_image"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="mockup_text">
              <Typography variant="h4" color="textPrimary">
                Feature
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Kami menyediakan beragam fitur, mulai dari dashboard yang menyediakan summary hingga fitur monitoring secara real-time.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ marginTop: 2 }}
              >
                Get started
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MockupSection;
