import React from "react";

const Navbar = ({ totalQuantity }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <div className="text-lg">
        Items in Cart: <span className="font-semibold">{totalQuantity}</span>
      </div>
    </nav>
  );
};

export default Navbar;