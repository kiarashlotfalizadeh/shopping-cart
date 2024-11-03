import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import landscape from "../assets/homepage-image.jpg";

function HomePage() {
  return (
    <>
      <div className={styles.landscapeContainer}>
        <img src={landscape} alt="italian landscape" />
        <div>Timeless Italian Elegance</div>
      </div>
      <div className={styles.buttonContainer}>
        <button>
          <Link to="/essentials">Shop Essentials</Link>
        </button>
        <button>
          <Link to="/elevated-layers">Shop Elevated Layers</Link>
        </button>
      </div>
      <div className={styles.description}>
        Born from a passion for fine craftsmanship and Italian heritage, we
        bring timeless luxury to the discerning few.
      </div>
      <button>
        <Link to="/our-story">Our Story</Link>
      </button>
    </>
  );
}

export default HomePage;
