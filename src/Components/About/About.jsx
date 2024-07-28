import "./About.css";

export default function Home() {
  return (
    <div className="item d-flex flex-column p-5 justify-content-center align-items-center p-5">
      <h1 className="itemHeading text-white mt-5 mb-3">ABOUT COMPONENT</h1>
      <div className="star-container d-flex align-items-center mb-3">
        <div className="line-About"></div>
        <i className="fa-solid fa-star text-white fs-5 mx-2"></i>
        <div className="line-About"></div>
      </div>
      <div className="container-fluid p-5">
        <div className="row">
          <div className=".col-lg-6 .col-md-12 .col-sm-12">
            <div className="item p-3 text-white d-flex fs-5">
              <p className="me-4 p-4">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="p-4">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
