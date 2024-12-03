import "../mockup.css";
import React from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function MockupSection() {
  return (
    <div className="mockup_container" id="mockup_section">
      <Container>
        <Grid container spacing={2} alignItems={"center"}>
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
                Fitur Aplikasi
              </Typography>
              <Typography variant="p" color="textSecondary">
                Terdapat beragam fitur yang dapat membantu pasien, dokter,
                ataupun pengguna umum dalam memantau kesehatan. Kami menyediakan
                fitur reminder dan todo list untuk mengingatkan pasien dalam
                menjalani pengobatan, fitur chat untuk konsultasi dengan dokter,
                dan fitur dashboard untuk melihat perkembangan kesehatan.
                Terdapat juga fitur monitoring yang dapat diintegrasikan dengan
                sensor kesehatan. Fitur SOS juga disediakan untuk meminta
                bantuan cepat ketika kondisi darurat.
              </Typography>
              <button class="get_started_button">Get Started</button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MockupSection;
