import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Home.css";
import CategoryCard from "../components/CategoryCard.jsx";
import { products as productList } from "../data/products.jsx";
import { categoryList } from "../data/categories.jsx";
import { Link } from "react-router-dom";
import ProductCarda from "../components/ProductCarda.jsx";




const StarRating = ({ count }) => (
    <div className="rating-box-style1">
        <ul>
            <li><span className="icon-pointed-star" /></li>
            <li><span className="icon-pointed-star" /></li>
            <li><span className="icon-pointed-star" /></li>
            <li><span className="icon-pointed-star" /></li>
            <li><span className="icon-star" /></li>
        </ul>
        <div className="count-text">
            <p>({count})</p>
        </div>
    </div>
);



const defaultSlides = [
    {
        subTitle: "Flat 40% discount on fashion collection",
        title: "trendy men's & women's dresses",
        buttonText: "Shop Dresses",
        buttonLink: "/products?category=clothes",
        img: categoryList.find((category) => category.name.toLowerCase() === "clothes")?.image || "assets/images/slides/dress-slide.png",
    },
    {
        subTitle: "Limited-time offer up to 35% off",
        title: "stylish sneakers & casual shoes",
        buttonText: "Shop Shoes",
        buttonLink: "/products?category=shoes",
        img: categoryList.find((category) => category.name.toLowerCase() === "shoes")?.image || "assets/images/slides/shoes-slide.png",
    },
    {
        subTitle: "Save up to 50% on top gadgets",
        title: "latest electronics & accessories",
        buttonText: "Shop Electronics",
        buttonLink: "/products?category=electronics",
        img: categoryList.find((category) => category.name.toLowerCase() === "electronics")?.image || "assets/images/slides/electronics-slide.png",
    },
    {
        subTitle: "Modern designs at unbeatable prices",
        title: "premium furniture for your home",
        buttonText: "Shop Furniture",
        buttonLink: "/products?category=furniture",
        img: categoryList.find((category) => category.name.toLowerCase() === "furniture")?.image || "assets/images/slides/furniture-slide.png",
    },
];


export default function Home({ slides = defaultSlides, autoPlayDelay = 8000 }) {
    const [active, setActive] = useState(0);
    const total = slides.length;
    const timerRef = useRef(null);

    const goTo = useCallback(
        (index) => {
            setActive(((index % total) + total) % total);
        },
        [total]
    );

    const next = useCallback(() => goTo(active + 1), [active, goTo]);
    const prev = useCallback(() => goTo(active - 1), [active, goTo]);

    // Autoplay
    useEffect(() => {
        if (total <= 1) return undefined;
        timerRef.current = setInterval(() => {
            setActive((prevIndex) => (prevIndex + 1) % total);
        }, autoPlayDelay);
        return () => clearInterval(timerRef.current);
    }, [total, autoPlayDelay]);

    const pauseAutoplay = () => clearInterval(timerRef.current);
    const resumeAutoplay = () => {
        clearInterval(timerRef.current);
        if (total <= 1) return;
        timerRef.current = setInterval(() => {
            setActive((prevIndex) => (prevIndex + 1) % total);
        }, autoPlayDelay);
    };

    // Basic swipe support for touch devices
    const touchStartX = useRef(null);

    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        pauseAutoplay();
    };

    const onTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        const threshold = 40;
        if (deltaX > threshold) {
            prev();
        } else if (deltaX < -threshold) {
            next();
        }
        touchStartX.current = null;
        resumeAutoplay();
    };

    if (total === 0) return null;

    return (
        <div className="page-wrapper boxed_wrapper">

            <section
                className="main-slider"
                onMouseEnter={pauseAutoplay}
                onMouseLeave={resumeAutoplay}
            >
                <div
                    className="main-slider__viewport"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    <div
                        className="main-slider__track"
                        style={{
                            width: `${total * 100}%`,
                            transform: `translateX(-${(100 / total) * active}%)`,
                        }}
                    >
                        {slides.map((slide, i) => (
                            <div key={i} className="main-slider__slide" style={{ width: `${100 / total}%` }}>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-6 order-2 order-md-1">
                                            <div className="main-slider__content">
                                                <p className="main-slider__subtitle">{slide.subTitle}</p>
                                                <h2 className="main-slider__title">{slide.title}</h2>
                                                <div className="btn-box">
                                                    {slide.buttonText && (
                                                        <Link to={slide.buttonLink || "#"} className="btn-one">
                                                            <span className="txt">{slide.buttonText}</span>
                                                        </Link>
                                                    )}
                                                </div>

                                            </div>
                                        </div>
                                        {slide.img && (
                                            <div className="col-12 col-md-6 order-1 order-md-2">
                                                <div className="main-slider__img-box">
                                                    <img src={slide.img} alt="" className="main-slider__img img-fluid" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Prev / Next arrows */}
                    {total > 1 && (
                        <>
                            <button
                                type="button"
                                aria-label="Previous slide"
                                onClick={prev}
                                className="main-slider__nav main-slider__nav--prev d-flex align-items-center justify-content-center"
                            >
                                ‹
                            </button>
                            <button
                                type="button"
                                aria-label="Next slide"
                                onClick={next}
                                className="main-slider__nav main-slider__nav--next d-flex align-items-center justify-content-center"
                            >
                                ›
                            </button>
                        </>
                    )}
                </div>

                {/* Pagination dots */}
                {total > 1 && (
                    <div className="main-slider__pagination">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                aria-label={`Go to slide ${i + 1}`}
                                onClick={() => goTo(i)}
                                className={`main-slider__dot${i === active ? " main-slider__dot--active" : ""}`}
                            />
                        ))}
                    </div>
                )}
            </section>





            {/* Medicine Categories Start */}
            <section className="medicine-categories">
                <div className="container">
                    <div className="medicine-categories__top">
                        <div className="sec-title sec-title-animation animation-style1">
                            <h2 className="title-animation">Popular Categories</h2>
                        </div>
                        <div className="btn-box">
                            <Link className="btn-one" to={'/products'}>
                                <span className="txt">
                                    See all products <i className="icon-right-arrow-1" />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        {categoryList.map((category) => (
                            <li key={category.id} className="col-xl-3 col-lg-4 col-md-6 col-6">
                                <CategoryCard categories={category} />
                            </li>
                        ))}
                    </div>
                </div>
            </section>
            {/* Medicine Categories End */}

            {/* Products Style3 Start */}
            <section className="products-style3 pt-4">
                <div className="container pt-5">
                    <div className="sec-title sec-title-animation animation-style1">
                        <h2 className="title-animation">Featured Products</h2>
                    </div>

                    <div className="row">
                        <div className="col-xl-8">
                            <div className="products-style3__content">
                                <div className="row">
                                    {productList.slice(0, 12).map((product) => (
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <li key={product.id} className="col">
                                                <ProductCarda product={product} />
                                            </li>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="banner-box-style1">
                                <h3>CELEBRATION</h3>
                                <h2>New Products</h2>
                                <p>Exciting Offers</p>
                                <div className="btn-box">
                                    <Link className="btn-one" to={'/products'}>
                                        <span className="txt">
                                            Shop Now <i className="icon-right-arrow-1" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Products Style3 End */}


        </div>
    );
}