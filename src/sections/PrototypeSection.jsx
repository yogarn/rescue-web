import "../prototype.css";
import React from "react";
import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

function PrototypeSection() {
  return (
    <div className="prototype_container" id="prototype_section">
      <Container>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <div className="prototype_video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/mmCnQDUSO4I?si=3e9WMHLFMfhGEhxJ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="prototype_text">
              <Typography variant="h4" color="textPrimary">
                Prototype
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Coba prototype Figma kami sekarang dan lihat bagaimana kami bisa membantu Anda dalam menjaga kesehatan Anda.
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

export default PrototypeSection;
