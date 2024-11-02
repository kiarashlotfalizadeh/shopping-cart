import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.css";
import cartIcon from "../assets/cart.svg";

function App() {
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
      <Outlet />
    </>
  );
}

export default App;
