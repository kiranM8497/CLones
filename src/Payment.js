import React from 'react';
import "./Payment.css";

function Payment() {
  return (
    <div className="payment">
      <div className="payment-container">
        {/* payment sectin -delievry address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delievery Address</h3>
          </div>
        </div>
        {/* payment sectin -review  items */}
        <div className="payment-section"></div>
        {/* payment sectin -payment method */}
        <div className="payment-section"></div>
      </div>
    </div>
  );
}

export default Payment;
