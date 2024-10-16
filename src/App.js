import React, { useState, Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [CartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {CartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
