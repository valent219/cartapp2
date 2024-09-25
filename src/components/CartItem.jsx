import React from "react";
import Counter from "./Counter";

const CartItem = ({ product, quantity, updateCart }) => {
  const totalPrice = product.price * quantity;

  return (
    <div className="border rounded-lg p-4 shadow-lg flex items-center space-x-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-grow">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
        <Counter id={product.id} quantity={quantity} updateCart={updateCart} />
        <p className="font-bold mt-2">Total: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
