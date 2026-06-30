import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 mb-0 text-body-secondary">
        © 2026 Saju Dev
      </p>

      <Link
        to="/"
        className="col-md-4 d-flex align-items-center justify-content-center mb-0 text-decoration-none"
      >
        DEV E-COM
      </Link>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-body-secondary">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link px-2 text-body-secondary">
            Products
          </Link>
        </li>
        
      </ul>
    </footer>
    </div>
    
  );
}

export default Footer;