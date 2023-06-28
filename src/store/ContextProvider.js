import { useContext, useReducer } from "react";
import { CartContext, UpdateCartContext } from "./cart-context";

//===================Custom react hook=========================
export const useSelectedFoodItem = () => {
  return useContext(CartContext);
};
//===================Custom react hook=========================

const defaultCartState = [];
const cartReducer = (state, action) => {
  switch (action.type) {
    case "addItem": {
      let selectedFood = action.item;
      let updatedItems = [];
      const existingCartItemIndex = state.findIndex(
        (obj, i) => obj.foodName === selectedFood.foodName
      );

      if (existingCartItemIndex === -1) {
        updatedItems = [...state, selectedFood];
      } else {
        updatedItems = [...state];
        updatedItems[existingCartItemIndex] = {
          ...selectedFood,
          itemCount:
            +state[existingCartItemIndex].itemCount + +selectedFood.itemCount,
        };
      }
      return updatedItems;
    }
    case "editcartItem": {
      const updatedDetails = action.item;
      if (updatedDetails.itemCount <= 0) {
        return state.filter((obj) => {
          if (obj.id != updatedDetails.id) return true;
        });
      } else {
        const existingtemId = state.findIndex(
          (obj) => obj.foodName === updatedDetails.foodName
        );
        const updatedItems = [...state];
        updatedItems[existingtemId] = updatedDetails;
        return updatedItems;
      }
    }
  }
};

const ContextProvider = (props) => {
  const [cartItems, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  return (
    <CartContext.Provider
      value={{ cartItems, dispatchCartAction }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
