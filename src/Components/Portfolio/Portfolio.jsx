import { useState } from "react";
import "./Portfolio.css";
import Image1 from "../images/poert1.png";
import Image2 from "../images/port2.png";
import Image3 from "../images/port3.png";
import Image4 from "../images/poert1.png";
import Image5 from "../images/port2.png";
import Image6 from "../images/port3.png";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };

  const handleClose = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Enable scrolling
  };

  return (
    <div className="portfolio-container p-3 p-sm-4 p-md-5 d-flex flex-column align-items-center">
      <h2 className="text-center mb-3 Portfolio-Heading fw-bold">
        PORTFOLIO COMPONENT
      </h2>

      <div className="star-container d-flex align-items-center mb-4">
        <div className="line-portfolio2"></div>
        <i className="fa-solid fa-star fs-3 mx-2"></i>
        <div className="line-portfolio2"></div>
      </div>

      <div className="image-gallery d-flex flex-wrap justify-content-center">
        {[Image1, Image2, Image3, Image4, Image5, Image6].map(
          (image, index) => (
            <div key={index} className="image-container" onClick={() => handleImageClick(image)}>
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="portfolio-image"
              />
              <div className="overlay">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          )
        )}
      </div>

      {selectedImage && (
        <div className="fullscreen-overlay" onClick={handleClose}>
          <img src={selectedImage} alt="Selected" className="fullscreen-image" />
        </div>
      )}
    </div>
  );
}
