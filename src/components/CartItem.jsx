import React, { useCallback } from "react";

const FALLBACK_IMAGE =
  "https://placehold.co/200x200/e2e8f0/475569?text=No+Image";

function CartItem({ item, quantity, onRemove }) {
  const handleRemove = useCallback(() => {
    if (!item.id) return;
    onRemove(item.id);
  }, [onRemove, item.id]);

  const imageSrc = item.images[0] || FALLBACK_IMAGE;

  return (
    <>
      <div className="table-outer">
        <table className="cart-table">
          <thead className="cart-header clearfix">
            <tr>
              <th className="prod-column">Your Product</th>
              <th className="hide-me"></th>
              <th>Quantity</th>
              <th className="price">Price</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="2" className="prod-column">
                <div className="column-box">
                  <div className="prod-thumb">
                    <a>
                      <img
                        src={imageSrc}
              alt={item.title}
                      />
                    </a>
                  </div>

                  <div className="title">
                    <h3 className="prod-title">{item.title}</h3>
                  </div>
                </div>
              </td>

              <td className="price">
                {/* <div className="input-box">
                  <input
                    className="quantity-spinner"
                    type="text"
                    defaultValue="2"
                    name="quantity"
                  />
                </div> */}
                {quantity}
              </td>

              <td className="price">${item.price}</td>
              <td className="sub-total">${quantity * item.price}</td>

              <td>
                <div className="remove" onClick={handleRemove}>
                  <span className="icon-close"></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>

  );
}

export default React.memo(CartItem);
