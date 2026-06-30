import { Link } from "react-router-dom";
import { useCart } from "../context/useCart.jsx";
import { useCallback } from "react";
import "./ProductCarda.css";

const FALLBACK_IMAGE =
    "https://placehold.co/600x600/e2e8f0/475569?text=No+Image+Available";

const ProductCarda = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = useCallback(() => {
        addToCart(product);
    }, [addToCart, product]);

    const imageSrc = product.images[0] || FALLBACK_IMAGE;

    return (
        <>

            <div className="products-style3__single">
                <Link to={`/product/${product.id}`} className="products-style3__single-img">
                    <img src={imageSrc} alt={product.title} />
                    <div className="overlay-img">
                        <img src={imageSrc} alt={product.title} />
                    </div>
                </Link>
                <div className="products-style3__single-text">
                    <h5>
                        <Link to={`/product/${product.id}`}>
                            {product.title}
                        </Link>
                    </h5>
                    {/* <StarRating count={product.rating} /> */}
                    <div className="price d-flex">
                        <h3 className="pe-3">${product.price} </h3> <del>${product.actprice}</del>
                    </div>
                    <div className="discount-price">
                        <p>
                             
                        </p>
                    </div>
                </div>
            </div>














            
        </>
    );
};

export default ProductCarda;
