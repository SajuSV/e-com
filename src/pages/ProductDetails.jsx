import { useCallback, useEffect, useState } from "react";
import { fetchProductById } from "../services/productService.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/useCart.jsx";
import shape1 from "../assets/breadcrumb-shape1.png";
import shape2 from "../assets/breadcrumb-shape2.png";
import Breadcrumb from "../components/Breadcrumb.jsx";


const FALLBACK_IMAGE =
  "https://placehold.co/600x600/e2e8f0/475569?text=No+Image+Available";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { id } = useParams();

  const handleAddToCart = useCallback(() => {
    if (!product) return;
    addToCart(product);
  }, [addToCart, product]);

  useEffect(() => {
    const loadProductDetails = async () => {
      if (!id) return;
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProductDetails();
  }, [id]);

  const imageSrc = product?.images?.[0] || FALLBACK_IMAGE;

  return (
    <>
    <Breadcrumb  title="Product Details"/>

      <section  className="container p-5">
        {loading && (
          <div className="position-fixed top-50 start-50 spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {Boolean(error) && (
          <p className="text-danger">Error: Product not Found</p>
        )}

        {product && (
          <div className="row">
            {/* Product image */}
            <div className="col-xl-6">
              <div className="product-details-image-box">
                <div className="product-details-main-image">
                  <div className="single-box clearfix">
                    <div className="img-holder">
                      <img src={imageSrc}
                        alt={product.title} />
                      <div className="overlay-icon">
                        <a
                          className="lightbox-image"
                          data-fancybox="gallery"
                          href={imageSrc}
                        >
                          <span className="icon-increase"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product content */}
            <div className="col-xl-6 my-auto">
              <div className="product-details-content-box">
                <div className="product-details-content-box__title">
                  <h2>
                    {product.title}
                  </h2>
                </div>

                <div className="product-details-content-box__review">
                  <div className="left-box">
                    <div className="rating-box-style1">
                      <ul className="d-flex">
                        <li><span className="icon-pointed-star"></span></li>
                        <li><span className="icon-pointed-star"></span></li>
                        <li><span className="icon-pointed-star"></span></li>
                        <li><span className="icon-pointed-star"></span></li>
                        <li><span className="icon-customer-testimonial"></span></li>
                      </ul>
                    </div>
                    <div className="text">
                      <p>25 reviews</p>
                    </div>
                  </div>
                  <div className="right-box">
                    <p>Status: <span>In Stock</span></p>
                  </div>
                </div>

                <div className="product-details-content-box-list">
                  <ul>
                    <li>
                      <div className="icon-box">
                        <span className="icon-verified"></span>
                      </div>
                      <div className="text-box">
                        <p>{product.description || "No description available."}</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box">
                        <span className="icon-verified"></span>
                      </div>
                      <div className="text-box">
                        <p>Free Xpress Shipping on orders over <span>$149</span></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box">
                        <span className="icon-verified"></span>
                      </div>
                      <div className="text-box">
                        <p>Order before 12:00pm for same day dispatch</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box">
                        <span className="icon-verified"></span>
                      </div>
                      <div className="text-box">
                        <p>Support & ordering open 7 day a week</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="product-details-content-box__price">
                    <h2>
                      ${product.price} <del> ${product.price}</del>
                    </h2>
                  </div>

                  <div className="product-quantity-box-outer">
                    <div className="product-quantity-box">


                      <div className="btn-box">
                        <button className="btn-one" type="button" onClick={handleAddToCart}>
                          <span className="txt">Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </section>
    </>

  );
};

export default ProductDetails;
