import React from "react";
import { ShoppingCart, ReceiptText } from "lucide-react";

const Buttons = () => {
  return (
    <div className="buttons-div">
      <button className="add-btn">
        <ShoppingCart /> ADD TO CART
      </button>
      <button className="detail-btn">
        <ReceiptText />
        MORE DETAILS
      </button>
    </div>
  );
};

export default Buttons;
