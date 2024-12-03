import "../about.css";
import React from "react";
import { Typography } from "@mui/material";

function AboutSection() {
  return (
    <div className="about_container" id="about_section">
      <div className="about_content">
        <Typography variant="h3" className="about_title">
          Tentang Kami
        </Typography>
        <Typography className="about_text">
          RESCUE (Real-time Evaluation for Safety, Care, and Utilization of
          Emergency services) adalah aplikasi pemantauan kesehatan dan layanan
          darurat real-time yang dirancang untuk meningkatkan keselamatan pasien
          rawat jalan. Dengan memanfaatkan teknologi IoT, RESCUE memungkinkan
          pemantauan detak jantung, tekanan darah, saturasi oksigen, serta
          deteksi jatuh secara otomatis melalui perangkat ponsel. Aplikasi ini
          dilengkapi dengan fitur Early Warning System yang memberikan
          peringatan dini dan mengirimkan sinyal darurat (SOS) langsung ke rumah
          sakit terdekat. Selain itu, RESCUE juga menyediakan pengingat untuk
          kegiatan kesehatan penting seperti minum obat, serta memungkinkan
          konsultasi langsung dengan dokter. Dengan fitur-fitur inovatif ini,
          RESCUE tidak hanya mempercepat respon terhadap kondisi darurat, tetapi
          juga mendukung pemulihan pasien, mengurangi risiko komplikasi, dan
          membantu meningkatkan kualitas perawatan kesehatan secara keseluruhan.
        </Typography>

        <div className="team_photos">
          <div className="photo_item">
            <img src="/toni.jpg" alt="Team Member 1" className="team_photo" />
            <Typography className="photo_name">Fatoni Murfid S.</Typography>
          </div>
          <div className="photo_item">
            <img src="/yoga.jpg" alt="Team Member 2" className="team_photo" />
            <Typography className="photo_name">Yoga Raditya N.</Typography>
          </div>
          <div className="photo_item">
            <img src="/toni.jpg" alt="Team Member 3" className="team_photo" />
            <Typography className="photo_name">Ahmad Nafi M.</Typography>
          </div>
          <div className="photo_item">
            <img src="/toni.jpg" alt="Team Member 4" className="team_photo" />
            <Typography className="photo_name">M. Zhafir Aufar</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
