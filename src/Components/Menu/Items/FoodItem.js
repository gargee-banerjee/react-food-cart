import style from "./FoodItem.module.css";
import AddToCartButton from "./AddToCartButton";
import { useSelectedFoodItem } from "../../../store/ContextProvider";
const FoodItem = (props) => {
  const { dispatchCartAction } = useSelectedFoodItem();

  const addFoodItemHandler = (selectedAmount) => {
    dispatchCartAction({
      type: "addItem",
      item: {
        itemCount: +selectedAmount,
        ...props.item,
      },
    });
  };

  const FoodItemDescription = () => {
    return (
      <div className={style.foodDesContainer}>
        <div className={style.foodName}>{props.item.foodName}</div>
        <div className={style.foodDes}>{props.item.foodDes}</div>
        <div className={style.foodPrice}>{props.item.foodPrice}</div>
      </div>
    );
  };

  return (
    <div className={style.foodItemContainer}>
      <FoodItemDescription />
      <AddToCartButton addFoodItemHandler={addFoodItemHandler} />
    </div>
  );
};
export default FoodItem;
