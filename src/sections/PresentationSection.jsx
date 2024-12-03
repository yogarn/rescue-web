import "../presentation.css";
import React from "react";
import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

function PresentationSection() {
  return (
    <div className="presentation_container" id="presentation_section">
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="presentation_video">
              <iframe
                width="600"
                height="315"
                src="https://www.canva.com/design/DAGVe0dSZfg/2x2jc3z989YaYVx7sxPjsQ/view?embed"
                allowfullscreen
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="presentation_text">
              <Typography variant="h4" color="textPrimary">
                Presentation
              </Typography>
              <Typography variant="p" color="textSecondary">
                Terdapat juga presentasi final project yang kami buat
                menggunakan Canva. Anda dapat melihat presentasi final project
                kami dengan mengklik tombol di bawah ini atau melalui frame di
                samping.
              </Typography>
              <a href="https://www.canva.com/design/DAGVe0dSZfg/2x2jc3z989YaYVx7sxPjsQ/view?embed">
                <button class="try_now_button">Lihat Sekarang</button>
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PresentationSection;
