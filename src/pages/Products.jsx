import { useEffect, useRef, useState } from "react";
import {
  fetchAllProducts,
  fetchCategories,
  fetchProductsByCategory,
} from "../services/productService.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Products.css";
import { categoryList } from "../data/categories.jsx";
import CategoryCard from "../components/CategoryCard.jsx";

function useDebounce(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}

const ITEMS_PER_PAGE = 6;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchInputRef = useRef(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  // Pick up ?search= from the URL (e.g. submitted from the header search box)
  // and keep it in sync if it changes while this page is mounted.

  
// Pick up ?categoryId= from the URL (e.g. clicked from a CategoryCard)
useEffect(() => {
  const categoryIdFromUrl = searchParams.get("categoryId");
  if (categoryIdFromUrl) {
    setSelectedCategory(Number(categoryIdFromUrl));
  } else {
    setSelectedCategory(null);
  }
}, [searchParams]);


  useEffect(() => {
    const searchFromUrl = searchParams.get("search") || "";
    setSearchTerm(searchFromUrl);
  }, [searchParams]);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoryData = await fetchCategories();
        setCategories(categoryData);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true);
        setError(null);
        let data = [];
        if (selectedCategory === null) {
          data = await fetchAllProducts();
        } else {
          data = await fetchProductsByCategory(selectedCategory);
        }
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadInitialData();
  }, [selectedCategory]);

  // Whenever the filters change, jump back to page 1
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, debouncedSearchTerm, sortOrder]);

  const visibleProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "price-asc") return a.price - b.price;
      if (sortOrder === "price-desc") return b.price - a.price;
      return 0;
    });

  const totalItems = visibleProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = visibleProducts.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
  };

  return (
    <>
      <section className="shop-style2 py-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 order-11">
              <div className="shop-sidebar-box">
                <div className="shop-single-sidebar col-xl-12 col-md-6">
                  <div className="inner-title pb-0">
                    <h4>Search</h4>
                  </div>
                  <div>
                    <div>
                      <div className="">
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchTerm}
                          onChange={(e) => {
                            const value = e.target.value;
                            setSearchTerm(value);
                            setSearchParams(
                              value
                                ? { search: value }
                                : {},
                              { replace: true }
                            );
                          }}
                          placeholder="Search products..."
                          className="select-box"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop-single-sidebar col-xl-12 col-md-6">
                  <div>
                    <div>
                      <div className="">
                        <div className="d-flex flex-wrap gap-2 mb-0 align-items-center">
                          <button
                            onClick={() => {
                              setSelectedCategory(null);
                              localStorage.removeItem("categoryId");
                              navigate("/products");
                            }}
                            className={`btn btn-sm rounded-pill ${selectedCategory === null
                              ? "btn-danger"
                              : "btn-outline-secondary"
                              }`}
                          >
                            All Products
                          </button>

                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => {
                                setSelectedCategory(category.id);
                                localStorage.setItem(
                                  "categoryId",
                                  category.id.toString()
                                );
                                navigate(`/products?categoryId=${category.id}`);
                              }}
                              className={`btn btn-sm rounded-pill ${selectedCategory === category.id
                                ? "btn-danger"
                                : "btn-outline-secondary"
                                }`}
                            >
                              {category.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar banner */}
                {/* <div className="shop-single-banner">
                  <div className="img-box">
                    <img src="assets/images/sidebar/shop-sidebar-img1.png" alt="" />
                  </div>
                  <div className="content-box">
                    <p>Mask &amp; Covid</p>
                    <h2>
                      30% off in N95 <br /> Mask Pack
                    </h2>
                    <div className="btn-box">
                      <a href="#">
                        shop now <i className="icon-right-arrow-1"></i>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-xl-9 order-00">
              <div className="shop-style2__content">
                <div className="shop-page-top-info">
                  <div className="filter-box">
                    <h6>
                      <span className="icon-filter"></span>FILTER
                    </h6>
                  </div>


                  <div className="right-box">
                    <div className="text">
                      <p>Sort by:</p>
                    </div>
                    <div className="">
                      <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="select-box"
                      >
                        <option value="default">Sort: Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {loading && (
                    <div
                      className="position-fixed top-50 start-50 spinner-border text-primary"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}

                  {Boolean(error) && <p>Error loading products</p>}

                  {!loading && !error && totalItems === 0 && (
                    <p className="text-muted">No products match your search.</p>
                  )}

                  {!loading && !error && totalItems > 0 && (
                    <ul className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 list-unstyled mt-0 pe-0">
                      {paginatedProducts.map((product) => (
                        <li key={product.id} className="col">
                          <ProductCard product={product} />
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="row mt-4">
                    <div className="showing-results col-md-6">
                      <p>
                        {totalItems === 0
                          ? "No results found"
                          : `Showing ${startIndex + 1} - ${Math.min(
                            endIndex,
                            totalItems
                          )} of ${totalItems} Result${totalItems !== 1 ? "s" : ""}`}
                      </p>
                    </div>
                    {!loading && !error && totalPages > 1 && (
                      <div className="col-md-6">
                        <ul className="styled-pagination clearfix">
                          <li className={`arrow prev ${currentPage === 1 ? "disabled" : ""}`}>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                goToPage(currentPage - 1);
                              }}
                            >
                              <span className="icon-left left"></span>
                            </a>
                          </li>

                          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                            (page) => (
                              <li
                                key={page}
                                className={currentPage === page ? "active" : ""}
                              >
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    goToPage(page);
                                  }}
                                >
                                  {page}
                                </a>
                              </li>
                            )
                          )}

                          <li
                            className={`arrow next ${currentPage === totalPages ? "disabled" : ""
                              }`}
                          >

                            <a href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                goToPage(currentPage + 1);
                              }}
                            >
                              <span className="icon-right right"></span>
                            </a>
                          </li>
                        </ul>


                      </div>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;