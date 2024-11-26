import React from "react";
import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

function ProfileSection() {
  return (
    <div className="section" id="profile-section">
      <Container>
          <Grid container spacing={3} alignItems="center" disableEqualOverflow>
            <Grid xs={12} md={4} textAlign="left">
              <img
                src={"logo.png"}
                alt="Logo"
                style={{ width: "100%", maxWidth: "200px", height: "auto" }}
              />
            </Grid>

            <Grid xs={12} md={8} textAlign={"left"}>
              <Typography
                variant="h3"
                sx={{
                  color: "#ffffff",
                  marginBottom: "16px",
                  fontFamily: "Poppins",
                }}
              >
                Simple Healthcare App
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#ffffff",
                  marginBottom: "16px",
                  fontFamily: "Poppins",
                }}
              >
                Real-time Evaluation for Safety, Care, and Utilization of
                Emergency services
              </Typography>
              <div>
                <Button
                  variant="contained"
                  sx={{
                    marginRight: 2,
                    backgroundColor: (theme) => theme.palette.purple.main,
                  }}
                >
                  Download Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: (theme) => theme.palette.purple.main,
                    borderColor: (theme) => theme.palette.purple.main,
                  }}
                >
                  Explore
                </Button>
              </div>
            </Grid>
          </Grid>
      </Container>
    </div>
  );
}

export default ProfileSection;