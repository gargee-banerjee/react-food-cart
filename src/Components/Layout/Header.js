import styles from "./Header.module.css";
import CartComp from "../Cart/CartComp";
import foodDisplayImg from "../../assets/meals.jpg";


const Header = (props) => {
  return (
    <>
      <div className={styles.header}>
        <p>ReactMeals</p>
        <CartComp
          cartItemCount={1}
        />
      </div>
      <div className={styles.displayImageContainer}>
        <img src={foodDisplayImg}></img>
      </div>
    </>
  );
};

export default Header;