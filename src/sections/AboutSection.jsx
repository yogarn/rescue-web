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
        <br />
        <Typography className="about_text">
          Kami adalah Tim Chayam, sebuah tim yang terdiri dari empat mahasiswa
          Teknik Informatika angkatan 2023 yang berkomitmen untuk menciptakan
          solusi inovatif dalam pemantauan kesehatan dan layanan darurat.
          Anggota tim kami adalah Fatoni, Yoga, Nafi, dan Aufar, yang memiliki
          berbagai keahlian dan latar belakang yang mendukung pengembangan
          aplikasi RESCUE. Motivasi kami untuk membuat aplikasi RESCUE berawal
          dari kekhawatiran akan banyaknya kasus jatuh pada pasien, yang sering
          kali terlambat dalam mendapatkan penanganan medis yang tepat dan
          berakibat fatal. Melalui fitur Early Warning System, kami ingin
          menciptakan sistem yang dapat memberikan peringatan dini saat
          seseorang jatuh, agar penanganan medis bisa segera dilakukan. Selain
          itu, kami menyadari bahwa sering kali konsultasi dengan dokter
          memerlukan perjalanan ke rumah sakit, yang tidak selalu memungkinkan,
          terutama dalam kondisi darurat. Oleh karena itu, kami merancang
          aplikasi yang memungkinkan monitoring kesehatan real-time untuk
          mempermudah pasien dalam memantau kondisi mereka tanpa harus pergi ke
          rumah sakit. Fitur Reminder juga kami ciptakan agar pengguna tidak
          lupa melakukan kegiatan kesehatan penting, seperti mengonsumsi obat
          atau mengganti perban, yang merupakan bagian penting dalam perawatan
          sehari-hari. Dengan aplikasi RESCUE, kami berharap dapat memberikan
          solusi yang lebih mudah diakses dan lebih efisien dalam menjaga
          kesehatan dan keselamatan pasien rawat jalan.
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
