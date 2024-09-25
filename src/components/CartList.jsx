import React from "react";
import CartItem from "./CartItem";

const CartList = ({ products, cartItems, updateCart }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          quantity={cartItems[product.id] || 0}
          updateCart={updateCart}
        />
      ))}
    </div>
  );
};

export default CartList;
