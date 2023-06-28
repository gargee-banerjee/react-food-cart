import style from "./CartComp.module.css";
import CartItems from "./CartItems";
import OrderPanel from "../order/OrderPanel";
import { useSelectedFoodItem } from "../../store/ContextProvider";
import { useState } from "react";

const Backdrop = (props) => {
  return <div className={style.backdrop}></div>;
};

const CartPanel = (props) => {
  const [orderDone, setOrderDone] = useState(false);
  const { cartItems } = useSelectedFoodItem();

  const foodItems = cartItems.map((obj) => (
    <CartItems key={obj.id} item={obj} />
  ));

  const totalCost = cartItems.reduce((cost, obj) => {
    return cost + obj.itemCount * obj.foodPrice;
  }, 0);

  const onOrderClickHandler = () => {
    setOrderDone(true);
  };


  return (
    <>
      <Backdrop />

      <div className={style.cartPanelContainer}>
        {orderDone && (
          <OrderPanel closeCartPanelHandler={props.closeCartPanelHandler} />
        )}
        {!orderDone && cartItems.length > 0 && (
          <>
            <div className={style.addedItems}>{foodItems}</div>
            <div className={style.amountDisplayPanel}>
              <div>Total Amount</div>
              <div>${totalCost}</div>
            </div>
            <div className={style.cartButtonContainer}>
              <button onClick={props.closeCartPanelHandler}>Cancel</button>
              <button onClick={onOrderClickHandler}>Order</button>
            </div>
          </>
        )}
        {cartItems.length === 0 && (
          <div className={style.emptyPanelContainer}>
            <div className={style.emptyCartPanel}>Your Cart is Empty😢</div>
            <button
              className={style.emptyCartCloseButton}
              onClick={props.closeCartPanelHandler}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPanel;
