import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";


function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
          alt=""
        />
        <div className="checkout-title">
          <h2>Your Shopping Basket</h2>
          {/* basket items */}
          {/* basket items */}
          {/* basket items */}
          {/* basket items */}
          {/* basket items */}
        </div>
      </div>

      <div className="checkout-right">
        
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
