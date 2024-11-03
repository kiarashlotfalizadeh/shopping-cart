import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./ProductPage.module.css";

function ProductPage({ updateCart }) {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/mock-api.json")
      .then((response) => response.json())
      .then((data) =>
        setProduct(data.filter((product) => product.name === productName)[0])
      );
  });

  function handleUpdate() {
    updateCart(productName);
  }

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.imageContainer}>
          <img src={product.imageSrc[0]} alt="" />
          <img src={product.imageSrc[1]} alt="" />
          <img src={product.imageSrc[2]} alt="" />
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productName}>{product.name}</div>
          <div className={styles.productMaterials}>{product.material}</div>
          <div className={styles.productPrice}>{`$${product.price}.00`}</div>
          <button onClick={handleUpdate}>Add to Cart</button>
          <div className={styles.description}>{product.description}</div>
        </div>
      </div>
    </>
  );
}

ProductPage.propTypes = {
  updateCart: PropTypes.func,
};

export default ProductPage;
