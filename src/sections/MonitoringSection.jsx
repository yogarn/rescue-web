import "../mockup.css";
import React from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function MonitoringSection() {
  return (
    <div
      className="mockup_container"
      id="mockup_section"
      style={{ background: "#ffffff" }}
    >
      <Container>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <div className="mockup_image_wrapper">
              <img
                src="/monitoring_merged.png"
                alt="Mockup"
                className="mockup_image"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="mockup_text">
              <Typography variant="h4" color="textPrimary">
                Fitur SOS & Monitoring
              </Typography>
              <Typography variant="p" color="textSecondary">
                Fitur SOS berfungsi untuk mengirimkan pesan darurat kepada orang
                terdekat dan rumah sakit terdekat. Apabila aplikasi mendeteksi
                potensi berbahaya yang mungkin dialami oleh pengguna, aplikasi
                akan langsung mengirimkan pesan SOS tersebut. Terdapat juga
                fitur monitoring yang berfungsi untuk memantau kondisi kesehatan
                pengguna dengan sensor kesehatan yang terintegrasi secara
                real-time.
              </Typography>
              <a href="#prototype_section">
                <button class="get_started_button">
                  Pelajari Lebih Lanjut
                </button>
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MonitoringSection;
