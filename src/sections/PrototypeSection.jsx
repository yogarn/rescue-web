import "../prototype.css";
import React from "react";
import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

function PrototypeSection() {
  return (
    <div className="prototype_container" id="prototype_section">
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="prototype_video">
              <iframe
                width="500"
                height="600"
                src="https://embed.figma.com/proto/rPAhjUjFZsGfMd8MqwNUhE/Rescue?node-id=367-1251&node-type=canvas&scaling=scale-down-height&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=367%3A1251&share=1&embed-host=share&%26hide-ui%3D1 "
                allowfullscreen
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="prototype_text">
              <Typography variant="h4" color="textPrimary">
                Prototype
              </Typography>
              <Typography variant="p" color="textSecondary">
                Coba prototype Figma kami sekarang dan lihat bagaimana kami bisa
                membantu Anda dalam menjaga kesehatan Anda.
              </Typography>
              <a href="http://clips.id/Prototype_Figma">
                <button class="try_now_button">Coba Sekarang</button>
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PrototypeSection;
