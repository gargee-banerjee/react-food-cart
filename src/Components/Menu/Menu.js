import style from "./Menu.module.css";
import FoodItem from "./Items/FoodItem";
const foodItems = [
  { foodName: "Momo", foodDes: "A healthy choice", foodPrice: "34", id: 1 },
  {
    foodName: "Golgappa",
    foodDes: "Not a healthy choice",
    foodPrice: "34",
    id: 2,
  },
  { foodName: "Egg", foodDes: "A healthy choice", foodPrice: "34", id: 3 },
  { foodName: "Mango", foodDes: "A healthy choice", foodPrice: "34", id: 4 },
  { foodName: "Mango", foodDes: "A healthy choice", foodPrice: "34", id: 5 },
  { foodName: "Mango", foodDes: "A healthy choice", foodPrice: "34", id: 6 },
  { foodName: "Mango", foodDes: "A healthy choice", foodPrice: "34", id: 7 },
  { foodName: "Mango", foodDes: "A healthy choice", foodPrice: "34", id: 8 },
  { foodName: "Mango", foodDes: "A healthy choice", foodPrice: "34", id: 9 },
];

const Menu = (props) => {
  /*List of food items*/
  const itemsComponents = foodItems.map((item) => (
    <FoodItem key={item.id} item={item} />
  ));


  return <div className={style.menuContainer}>{itemsComponents}</div>;
};

export default Menu;
