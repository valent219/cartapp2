import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CartList from "./components/CartList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // ambil data dari API
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const updateCart = (id, quantity) => {
    setCartItems((prevItems) => {
      const updatedItems = {
        ...prevItems,
        [id]: quantity,
      };

      const totalQty = Object.values(updatedItems).reduce((acc, qty) => acc + qty, 0);
      setTotalQuantity(totalQty);

      return updatedItems;
    });
  };

  return (
    <div>
      <Navbar totalQuantity={totalQuantity} />
      <CartList products={products} cartItems={cartItems} updateCart={updateCart} />
    </div>
  );
};

export default App;
