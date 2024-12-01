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
          Sistem pemantauan kesehatan efektif sangat penting bagi pasien rawat
          jalan, terutama dalam mencegah komplikasi dan mendukung pemulihan.
          Studi menunjukkan 50% pasien kronis sering lupa minum obat atau
          melakukan pemeriksaan tanpa pemantauan ketat, berisiko memicu
          komplikasi serius, sementara 30% pasien rawat jalan mengalami cedera
          akibat jatuh. Inovasi IoT memungkinkan pemantauan real-time untuk
          detak jantung, tekanan darah, dan saturasi oksigen, yang mempercepat
          respons saat kondisi darurat dan memudahkan dokter mengakses data
          untuk evaluasi akurat. Teknologi ini meningkatkan keselamatan pasien,
          mendukung SDG 3, dan mengurangi biaya perawatan.
        </Typography>
      </div>
    </div>
  );
}

export default AboutSection;
