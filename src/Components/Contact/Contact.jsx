import "./Contact.css"; // Import custom styles

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted");
  };

  return (
    <div>
      <div className="text-center mt-4 contact-container">
        <h1>Contact Component</h1>
        <div className="star-container d-flex align-items-center mb-4">
          <div className="line-contact"></div>
          <i className="fa-solid fa-star fs-3 mx-2"></i>
          <div className="line-contact"></div>
        </div>
      </div>

      <div className="item-4 p-3 p-sm-5 p-md-5 d-flex justify-content-center align-items-center">
        <form
          onSubmit={handleSubmit}
          className="w-100"
          style={{ maxWidth: "850px" }}
        >
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="text"
              aria-describedby="textHelp"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              User Age
            </label>
            <input
              type="number"
              className="form-control form-control-lg"
              id="number"
              aria-describedby="numberHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              User Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              aria-describedby="passwordHelp"
              required
            />
          </div>

          <button type="submit" className="btn btn-1">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
