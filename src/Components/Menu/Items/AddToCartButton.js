import { useState } from "react";
import style from "./AddToCartButton.module.css";
const AddToCart = (props) => {
  const [selectedAmount, setSelectedAmount] = useState(1);

  const setSelectedAmountHandler = (event) => {
    setSelectedAmount(event.target.value);
  };

  const onAddSubmitHandler = (event) => {
    event.preventDefault();
    props.addFoodItemHandler(selectedAmount);
  };

  return (
    <form onSubmit={onAddSubmitHandler} className={style.foodAddCart}>
      <div className={style.amountDisplayCon}>
        <div className={style.titleAmount}>Amount</div>
        <input
          // type="number"
          className={style.addToCartCount}
          onChange={setSelectedAmountHandler}
          value={selectedAmount}
          min="1"
          max="10"
        ></input>
      </div>
      <button type="submit" className={style.addToCartButton}>
        +Add
      </button>
    </form>
  );
};
export default AddToCart;
