import React from "react";
import myImage from "./assets/myImage.png"; // PNG dosyasının yolunu belirtiyoruz

const CenteredImage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Tam ekran yüksekliği
        backgroundColor: "#1c283f", // Arka plan rengi
      }}
    >
      <img
        src={myImage}
        alt="Centered Graphic"
        style={{
          width: "740px",
          height: "296",
        }}
      />
    </div>
  );
};

export default CenteredImage;