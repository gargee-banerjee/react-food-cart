import style from "./CartComp.module.css";
import {useSelectedFoodItem} from '../../store/ContextProvider';

const CartItems = (props) => {
  const {dispatchCartAction} = useSelectedFoodItem();
  const reduceFoodItemAmount = () => {
    dispatchCartAction({
      type: "editcartItem",
      item: {
        ...props.item,
        itemCount: props.item.itemCount - 1,
      },
    });
  };
  const increaseFoodItemAmount = () => {
    dispatchCartAction({
      type: "editcartItem",
      item: {
        ...props.item,
        itemCount: props.item.itemCount + 1,
      },
    });
  };

  return (
    <div className={style.cartItemsContainer}>
      <div className={style.cartItemsDetailsContainer}>
        <div className={style.cartItemName}>{props.item.foodName}</div>
        <div className={style.CartItemPriceDetails}>
          <div className={style.cartItemPrice}>${props.item.foodPrice}</div>
          <div className={style.cartItemQuantity}>x {props.item.itemCount}</div>
        </div>
      </div>
      <div className={style.cartItemsEdition}>
        <button className={style.removeCartItem} onClick={reduceFoodItemAmount}>
          -
        </button>
        <button className={style.addCartItem} onClick={increaseFoodItemAmount}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItems;
