import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./CartPage.module.css";

function CartPage({ cartArray, updateCart }) {
  const [itemArray, setItemArray] = useState([]);

  useEffect(() => {
    const keyArray = cartArray.map((item) => ({
      ...item,
      uniqueKey: crypto.randomUUID(),
    }));
    setItemArray(keyArray);
  }, [cartArray]);

  function deleteItem(index) {
    let newArray = itemArray.filter((item, i) => i !== index);
    updateCart(newArray);
  }

  function handleCheckout() {
    alert("Checkout Completed");
    updateCart([]);
  }

  const cartItems = itemArray.map((item, index) => (
    <div className={styles.itemContainer} key={item.uniqueKey}>
      <img src={item.imageSrc[0]} alt="" className={styles.leftSide} />
      <div className={styles.rightSide}>
        <div className={styles.itemName}>{item.name}</div>
        <div className={styles.itemDetails}>{item.materials}</div>
        <div className={styles.itemPrice}>{`$${item.price}.00`}</div>
        <button onClick={() => deleteItem(index)}>Remove</button>
      </div>
    </div>
  ));

  const totalPrice = itemArray.reduce(
    (current, item) => current + item.price,
    0
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSide}>
        <div className={styles.title}>Shopping Bag</div>
        <div className={styles.count}>{`${itemArray.length} item(s)`}</div>
        {cartItems}
      </div>
      <div className={styles.rightSide}>
        <div className={styles.priceContainer}>
          <div className={styles.total}>Total</div>
          <div className={styles.totalPrice}>{`$${totalPrice}.00`}</div>
        </div>
        <button className={styles.checkout} onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

CartPage.propTypes = {
  cartArray: PropTypes.array,
  updateCart: PropTypes.func,
};

export default CartPage;
