import React, { Component } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import shape1 from "../assets/breadcrumb-shape1.png";
import shape2 from "../assets/breadcrumb-shape2.png";



function Breadcrumb({ title }) {

    const navigate = useNavigate();

    return (
      <div className="">
              {/* Start Breadcrumb Style1 */}
      <section className="breadcrumb-style1">
        {/* <div
          className="breadcrumb-style1__img1 wow slideInLeft animated"
          data-wow-delay="100ms"
          data-wow-duration="2000ms"
        >
          <img
            className="float-bob-x"
            src="assets/images/breadcrumb/breadcrumb-img1.png"
            alt=""
          />
        </div> */}

        <div
          className="shape1 wow fadeInDown animated"
          data-wow-delay="100ms"
          data-wow-duration="5000ms"
        >
          <img
            className="float-bob-y"
            src={shape1}
            alt=""
          />
        </div>


        <div className="shape3">
          <img
            className="float-bob-x"
            src={shape2}
            alt=""
          />
        </div>

        <div className="container">
          <div className="inner-content text-center">
            <div className="title">
              <h2>Product Details</h2>
            </div>

            <div className="breadcrumb-menu">
              <ul className="clearfix">
                <li>
                  <a onClick={() => navigate("/products")}>
                    <span className="icon-home"></span> Home
                  </a>
                </li>
                <li className="active">{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Style1 */}

      </div>
    )
}

export default Breadcrumb