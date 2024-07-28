import "./Home.css";
import HomeImage from "./avataaars.aa9aff02ddd0ef36a1724ecef4133df9.jpg";

export default function Home() {
  return (
    <div className="item d-flex flex-column justify-content-center align-items-center p-5">
      <img src={HomeImage} className="w-25 imageHome" alt="Home" />
      <h1 className="itemHeading text-white">START FRAMEWORK</h1>

      <div className="star-container d-flex align-items-center mb-3">
        <div className="line-Home"></div>
        <i className="fa-solid fa-star text-white fs-5 mx-2"></i>
        <div className="line-Home"></div>
      </div>    </div>
  );
}
