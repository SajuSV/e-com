import { Link } from "react-router-dom";
import { useCart } from "../context/useCart.jsx";
import { useCallback } from "react";

const FALLBACK_IMAGE =
  "https://placehold.co/600x600/e2e8f0/475569?text=No+Image+Available";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [addToCart, product]);

  const imageSrc = product.images[0] || FALLBACK_IMAGE;

  return (
    <>








<div className="mb-4">
            <div className="products-style1__single products-style1__single--best-seller">
                <div className="products-style1__single-img">
                    <div className="inner">
                        <img src={imageSrc} alt={product.title} />

                        <div className="overlay-img">
                            <img src={imageSrc} alt={product.title} />
                        </div>

                        <div className="overlay-box">
                            <ul>
                                <li>
                                    <button type="button">
                                        <span className="icon-heart"></span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button">
                                        <span className="icon-up-and-down-arrows"></span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button">
                                        <span className="icon-view"></span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* {badge && (
                        <div className="text-box">{badge}</div>
                    )} */}
                </div>

                <div className="products-style1__single-content">
                  <Link to={`/product/${product.id}`}>
               <h3>{product.title}</h3>
            </Link>
                   

                    <p>
                        ${product.price}{" "}
                        <del>${product.price}</del>
                    </p>

                    <div className="btn-box" >
                        <button className="btn-one" onClick={handleAddToCart}>
                            <span className="txt">Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>












      {/* <img
        src={imageSrc}
        alt={product.title}
        className="w-100 rounded bg-light object-fit-cover"
        style={{ aspectRatio: "1 / 1" }}
      />
      <div className="mt-3 d-flex justify-content-between">
        <div>
          <h3 className="fs-6 text-secondary">
            <Link to={`/product/${product.id}`} className="text-decoration-none text-reset">
              <span aria-hidden="true" className="position-absolute top-0 start-0 w-100 h-100"></span>
              {product.title}
            </Link>
          </h3>

          <p
            className="mt-1 small text-muted"
            style={{ letterSpacing: "0.02em" }}
          >
            {product.category.name}
          </p>
        </div>
        <p className="small fw-medium text-dark">${product.price}</p>
      </div>

      <div className="mt-3 position-relative" style={{ zIndex: 10 }}>
        <button
          onClick={handleAddToCart}
          className="w-100 btn btn-primary d-flex align-items-center justify-content-center gap-2"
        >
          🛒
          Add to My Cart
        </button>
      </div> */}
    </>
  );
};

export default ProductCard;
