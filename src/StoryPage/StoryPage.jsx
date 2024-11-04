import styles from "./StoryPage.module.css";

function StoryPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.title}>A Legacy of Italian Craftsmanship</div>
      <div className={styles.text}>
        Born from a deep respect for Italy’s rich heritage of craftsmanship and
        natural beauty, our story is one of timeless elegance and devotion to
        quality. Inspired by the rolling hills of Tuscany, the serene waters of
        Lake Como, and the artisanal traditions passed down through generations,
        we create pieces that reflect the essence of Italian luxury. Every
        stitch, every fiber, and every design choice embodies our commitment to
        excellence, merging classic style with modern sophistication. Our
        mission is to bring you clothing that feels as remarkable as it
        looks—crafted for those who appreciate the quiet luxury of true artistry
        and the story it tells.
      </div>
    </div>
  );
}

export default StoryPage;
