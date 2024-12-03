import "../mockup.css";
import React from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function ReminderSection() {
  return (
    <div
      className="mockup_container"
      id="mockup_section"
      style={{ background: "#f5f5f5" }}
    >
      <Container>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <div className="mockup_image_wrapper">
              <img
                src="/reminder_merged.png"
                alt="Mockup"
                className="mockup_image"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="mockup_text">
              <Typography variant="h4" color="textPrimary">
                Fitur Konsultasi & Reminder
              </Typography>
              <Typography variant="p" color="textSecondary">
                Fitur konsultasi berfungsi untuk menghubungkan pengguna dengan
                dokter-dokter yang telah bekerja sama dengan aplikasi kami. Hal
                tersebut bertujuan untuk mempermudah akses kesehatan bagi setiap
                orang. Terdapat juga fitur reminder berfungsi untuk mengingatkan
                pengguna untuk minum obat dan menjaga pola makan yang sehat.
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

export default ReminderSection;
