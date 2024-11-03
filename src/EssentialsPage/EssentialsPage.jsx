import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./EssentialsPage.module.css";

function EssentialsPage() {
  const [essentialProducts, setEssentialProducts] = useState([]);

  useEffect(() => {
    fetch("/mock-api.json")
      .then((response) => response.json())
      .then((data) =>
        setEssentialProducts(
          data.filter((product) => product.catagory === "essentials")
        )
      );
  }, []);

  const productCards = essentialProducts.map((product) => (
    <Link
      to={`/essentials/${product.name}`}
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
        Essentials: Timeless Luxury for Every Day
      </div>
      <div className={styles.productGrid}>{productCards}</div>
    </>
  );
}

export default EssentialsPage;
