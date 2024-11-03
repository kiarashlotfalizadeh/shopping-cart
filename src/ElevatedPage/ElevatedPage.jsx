import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./ElevatedPage.module.css";

function ElevatedPage() {
  const [elevatedProducts, setElevatedProducts] = useState([]);

  useEffect(() => {
    fetch("/mock-api.json")
      .then((response) => response.json())
      .then((data) =>
        setElevatedProducts(
          data.filter((product) => product.catagory === "elevated-layers")
        )
      );
  }, []);

  const productCards = elevatedProducts.map((product) => (
    <Link
      to={`/elevated-layers/${product.name}`}
      key={product.id}
      className={styles.productLink}
    >
      <div className={styles.card}>
        <img src={product.imageSrc[0]} alt={product.name} />
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productDetails}>{product.material}</div>
      </div>
    </Link>
  ));

  return (
    <>
      <div className={styles.title}>
        Elevated Layers: The Art of Refined Layering
      </div>
      <div className={styles.productGrid}>{productCards}</div>
    </>
  );
}

export default ElevatedPage;
