import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ cartCount = 0 }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    navigate(trimmed ? `/products?search=${encodeURIComponent(trimmed)}` : "/products");
    setIsSearchOpen(false);
  };

  const closeMobileSearch = () => {
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  return (
    <header className="bg-white shadow-sm sticky-top" style={{ zIndex: 50 }}>











      <div
        className={`container d-flex flex-wrap justify-content-between align-items-center py-3 header-row ${
          isSearchOpen ? "mobile-search-active" : ""
        }`}
      >
        <Link to="/" className="fs-3 fw-bold text-danger text-decoration-none header-brand">
          Dev E-COM
        </Link>

        <nav className="d-none d-md-flex gap-4 fw-medium header-nav-links">
          <Link to="/products" className="text-secondary text-decoration-none">
            Products
          </Link>
        </nav>

        <div className="d-flex gap-3 header-actions">
          <div className="header-wishlist-cart-btn pt-2">
            <Link to="/cart">

            
            <button type="button">
              <i className="icon-shopping-cart"></i>
              {cartCount > 0 && (
              <span className="count">
                {cartCount}
              </span>
            )}
            </button>
            </Link>
          </div>

          {/* Mobile-only: tapping this opens the full-width search bar */}
          <button
            type="button"
            className="header-search-toggle"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
          >
            <i className="icon-search-interface-symbol"></i>
          </button>

          <div className={`header-search-box ${isSearchOpen ? "is-open" : ""}`}>
            <form action="#" method="post" onSubmit={handleSearchSubmit}>
              <div className="form-group">
                <input
                  type="search"
                  name="search"
                  placeholder="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus={isSearchOpen}
                  required
                />

                <button type="submit">
                  <i className="icon-search-interface-symbol"></i>
                </button>

                {/* Mobile-only: cancel button to collapse back to normal header */}
                <button
                  type="button"
                  className="header-search-cancel"
                  onClick={closeMobileSearch}
                  aria-label="Close search"
                >
                  <i className="icon-close"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
