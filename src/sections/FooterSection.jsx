import React from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "../footer.css";

function FooterSection() {
  return (
    <footer className="footer_section">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" className="footer_heading">
              Tentang Rescue
            </Typography>
            <Typography variant="body2" className="footer_text">
              Sistem kesehatan yang didedikasikan untuk mempermudah akses
              layanan kesehatan bagi semua kalangan melalui inovasi teknologi di
              bidang Internet of Things dan Wireless Sensor Network yang
              terintegrasi melalui sistem digital yang dapat diakses melalui
              Aplikasi.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          className="footer_links_container"
        >
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer_heading">
              External Links
            </Typography>
            <ul className="footer_links">
              <li>
                <a href="http://clips.id/Prototype_Figma">Figma Prototype</a>
              </li>
              <li>
                <a href="http://clips.id/Testing_Aplikasi_Rescue">Maze</a>
              </li>
              <li>
                <a href="https://www.canva.com/design/DAGVe0dSZfg/_XhNnOW56eb3Co0pRSre5w/edit?utm_content=DAGVe0dSZfg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  Canva Final Presentation
                </a>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer_heading">
              External Documents
            </Typography>
            <ul className="footer_links">
              <li>
                <a href="https://drive.google.com/drive/folders/1u5VYOl-1uLcbUqxPbFA1tCPNCeUR5VBL?usp=drive_link">
                  Capstone 1
                </a>
              </li>

              <li>
                <a href="https://drive.google.com/drive/folders/1aTKr8H0gy0POpzr5sQMTt2ERVYDTB53c?usp=drive_link">
                  Capstone 2
                </a>
              </li>

              <li>
                <a href="https://drive.google.com/drive/folders/1I8dhTPZcOGsB2ovrp7aJF3QkgirVqRTQ?usp=drive_link">
                  Capstone 3
                </a>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer_heading">
              Kontak
            </Typography>
            <Typography variant="body2" className="footer_text">
              Email: ahmadnafim@student.ub.ac.id <br />
              Telepon: +62 812-3456-7890
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body2" align="center" className="footer_copyright">
          © {new Date().getFullYear()} RESCUE. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default FooterSection;
