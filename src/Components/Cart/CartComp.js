import { useEffect, useState } from "react";
import style from "./CartComp.module.css";
import CartPanel from "./CartPanel";
import { useSelectedFoodItem } from "../../store/ContextProvider";

const CartComp = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [cartHighligt, setCartHighlight] = useState(false);
  const { cartItems } = useSelectedFoodItem();

  useEffect(() => {
    setCartHighlight(true);

    const timer = setTimeout(() => {
      setCartHighlight(false);
    }, 300);
  }, [cartItems]);

  const onCartClickHandler = () => {
    setShowCart(true);
  };

  const closeCartPanel = () => {
    setShowCart(false);
  };

  const totalCartCount = cartItems.reduce((totalCount, obj) => {
    return totalCount + +obj.itemCount;
  }, 0);

  const cartClass = `${style.cartContainer} ${cartHighligt ? style.bump : ""}`;

  

  return (
    <>
      <div onClick={onCartClickHandler} className={cartClass}>
        <div>😊</div>
        <div>Your Cart</div>
        <div className={style.itemCount}>{totalCartCount}</div>
      </div>
      {showCart && <CartPanel closeCartPanelHandler={closeCartPanel} />}
    </>
  );
};

export default CartComp;
