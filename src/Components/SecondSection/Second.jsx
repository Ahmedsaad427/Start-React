import "./Second.css";

export default function Second() {
  return (
    <div className="container-fluid container-item p-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 text-white">
          <div className="item-1 d-flex flex-column p-5">
            <h1 className="Loaction-Heading mx-auto">LOCATION</h1>
            <p className="fs-6 mx-auto">2216 John Daniel Drive</p>
            <p className="fs-6 mx-auto">Clark, MO 65243</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 text-white">
          <div className="item-1 d-flex flex-column p-5">
            <h1 className="mx-auto">AROUND THE WEB</h1>
            <div className="icons text-center mt-3">
              <div className="icon-circle me-3">
                <i className="fa-brands fa-facebook fs-5 "></i>
              </div>
              <div className="icon-circle me-3">
                <i className="fa-brands fa-twitter fs-5"></i>
              </div>
              <div className="icon-circle me-3">
                <i className="fa-brands fa-linkedin fs-5"></i>
              </div>
              <div className="icon-circle me-3">
                <i className="fa-solid fa-globe fs-5"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 text-white">
          <div className="item-1 d-flex flex-column p-5">
            <h1 className="text-center">AROUND THE WEB</h1>
            <p className="mx-auto text-center parag-section2">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
