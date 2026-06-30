import CartItem from "../components/CartItem.jsx";
import { useCart } from "../context/useCart.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb.jsx";
import "./Cart.css";

function Cart() {
  const { cartItems, cartTotal, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-5 pt-5">
        <h2 className="fs-2 fw-semibold vh-100">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div >


      <Breadcrumb title="Cart" />
      <section className="cart-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="cart-table-box">
                <div className="cart-info">
                  <div className="left">
                    <span>Your Cart:</span> {cartItems.length} Items
                  </div>
                  <div className="right">
                    Total:<span> {cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                {cartItems.map((item) => (
                  <CartItem
                    key={item.product.id}
                    item={item.product}
                    quantity={item.quantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="cart-button-box">
                {/* <div className="apply-coupon">
                  <div className="inner">
                    <input
                      type="text"
                      name="coupon-code"
                      placeholder="Coupon Code..."
                    />

                    <div className="apply-coupon-button">
                      <button className="btn-one" type="submit">
                        <span className="txt">Apply Code</span>
                      </button>
                    </div>
                  </div>
                </div> */}

                <div className="update-cart-btn-box">
                  <button className="btn-one black" onClick={() => navigate("/products")}>
                    <span className="txt">Update Cart</span>
                  </button>

                  <button className="btn-one" type="button">
                    <span className="txt">Checkout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Cart;
