import { Link } from "react-router-dom";
import { useCart } from "../context/useCart.jsx";
import { useCallback } from "react";
import "./CategoryCard.css";

const FALLBACK_IMAGE =
    "https://placehold.co/600x600/e2e8f0/475569?text=No+Image+Available";

const CategoryCard = ({ categories }) => {

    const imageSrc = categories.image || FALLBACK_IMAGE;

    return (
        <>

            <div
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                key={categories.name}
            >
                <div className="medicine-categories__single">
                    <div className="medicine-categories__single-img">
                        <div className="inner">
                            <img src={imageSrc} alt="" />
                            <div className="overlay-img">
                                <img src={imageSrc} alt="" />
                            </div>
                            <div className="btn-box">

                                <Link to={`/products?categoryId=${categories.id}`}>
                                    view all <span className="icon-right-arrow-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="medicine-categories__single-title">
                        <h2>
                            <Link to={`/products?categoryId=${categories.id}`}>
                                    {categories.name}
                            </Link>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryCard;
