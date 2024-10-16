import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [cartBtnIsHighlighted, setCartBtnIsHighlighted] = useState(false);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  
  const btnClasses = `${classes.button} ${ cartBtnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setCartBtnIsHighlighted(true);

    const timer = setTimeout(() => {setCartBtnIsHighlighted(false)}, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);


  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
