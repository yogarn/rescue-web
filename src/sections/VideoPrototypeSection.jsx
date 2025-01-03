import "../video_prototype.css";
import React from "react";
import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

function VideoPrototypeSection() {
  return (
    <div className="video_prototype_container" id="video_prototype_section">
      <Container>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <div className="video_prototype_video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/CKoZQM5-F6A?si=6ZgJ-lU46TGBzVrd"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="video_prototype_text">
              <Typography variant="h4" color="textPrimary">
                Video Prototype
              </Typography>
              <Typography variant="p" color="textSecondary">
                Coba prototype Figma kami sekarang dan lihat bagaimana kami bisa
                membantu Anda dalam menjaga kesehatan Anda.
              </Typography>
              <a href="http://clips.id/video_prototype_Figma">
                <button class="try_now_button">Coba Sekarang</button>
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default VideoPrototypeSection;
