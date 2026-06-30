import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container py-5  d-flex align-items-center">
      <div className="row justify-content-center w-100 py-5">
        <div className="col-md-8 col-lg-6 my-4">
          <div className="text-center">
            {/* 404 Number */}
            <h1 className="display-1 fw-bold text-danger">404</h1>

            {/* Heading */}
            <h2 className="fw-semibold mb-3">
              Oops! That page can't be found
            </h2>

            {/* Description */}
            <p className="text-muted mb-4">
              Sorry, the page you are looking for doesn't exist or has been
              moved.
            </p>

            {/* Home Button */}
            <Link to="/" className="btn-one">
              <span className="txt">Go to Home Page</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;