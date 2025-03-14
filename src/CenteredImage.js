import React from "react";
import { Helmet } from "react-helmet-async"; // Helmet bileşeni
import myImage from "./assets/haufen-green.png"; // PNG dosyasının yolu
import "./CenteredImage.css"; // CSS dosyası

const CenteredImage = () => {
  return (
    <>
      <Helmet>
        <title>Haufen Coffee | Etiler'de Modern ve Şık Bir Cafe Deneyimi</title>
        <meta name="description" content="Haufen Coffee, Etiler Çamlık'ta modern tasarımı ve özel kahve lezzetleriyle eşsiz bir deneyim sunuyor. Hemen keşfet!" />
        <meta name="keywords" content="tasarım, modern, şık, teknoloji, görsel" />
        <meta property="og:title" content="Haufen Coffee | Etiler'deki Yeni Kahve Noktanız" />
        <meta property="og:description" content="Etiler Çamlık'ta açılan Haufen Coffee, modern tasarımı ve seçkin kahve çeşitleriyle sizi bekliyor. Kahve keyfini bizimle yaşayın." />
        <meta property="og:image" content="https://haufen.co/assets/myImage.png" />
        <meta property="og:url" content="https://haufen.co/centered-image" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="centered-container">
        <img
          src={myImage}
          alt="Haufen Coffee | Etiler Çamlık'ta Modern ve Şık Cafe"
          className="centered-image"
        />
      </div>
    </>
  );
};

export default CenteredImage;
