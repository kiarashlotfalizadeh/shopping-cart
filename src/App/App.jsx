import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import styles from "./App.module.css";
import cartIcon from "../assets/cart.svg";
import HomePage from "../HomePage/HomePage";
import EssentialsPage from "../EssentialsPage/EssentialsPage";
import ElevatedPage from "../ElevatedPage/ElevatedPage";
import ProductPage from "../ProductPage/ProductPage";
import CartPage from "../CartPage/CartPage";
import StoryPage from "../StoryPage/StoryPage";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  function handleCartUpdate(product) {
    setShoppingCart([...shoppingCart, product]);
  }

  function removeItem(newArray) {
    setShoppingCart(newArray);
  }

  return (
    <>
      <header>
        <Link to="/" className={styles.logo}>
          Lupiano
        </Link>
        <Link to="/cart" className={styles.cartIcon}>
          <img src={cartIcon} alt="Shopping cart" />
        </Link>
      </header>
      <nav>
        <Link to="/essentials" className={styles.navLink}>
          Essentials
        </Link>
        <Link to="/elevated-layers" className={styles.navLink}>
          Elevated Layers
        </Link>
        <Link to="/our-story" className={styles.navLink}>
          Our Story
        </Link>
      </nav>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/essentials" element={<EssentialsPage />} />
        <Route
          path="/essentials/:productName"
          element={<ProductPage updateCart={handleCartUpdate} />}
        />
        <Route path="/elevated-layers" element={<ElevatedPage />} />
        <Route
          path="/elevated-layers/:productName"
          element={<ProductPage updateCart={handleCartUpdate} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage cartArray={shoppingCart} updateCart={removeItem} />
          }
        />
        <Route path="/our-story" element={<StoryPage />} />
      </Routes>
    </>
  );
}

export default App;
