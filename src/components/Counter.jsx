import React from "react";

const Counter = ({ id, quantity, updateCart }) => {
  const increment = () => updateCart(id, quantity + 1);
  const decrement = () => updateCart(id, quantity > 0 ? quantity - 1 : 0);

  return (
    <div className="flex items-center space-x-2">
    <button
      onClick={decrement}
      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
    >
      -
    </button>
    <span className="text-lg">{quantity}</span>
    <button
      onClick={increment}
      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
    >
      +
    </button>
  </div>
  );
};

export default Counter;
