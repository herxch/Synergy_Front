import styles from "./Categories.module.css";
import { CATEGORIES } from "../../config/categories";

const Categories = () => (
  <section className={styles.section}>
    <header className={styles.header}>
      <span className={styles.kicker}>Every Fitment</span>
      <h2 className={styles.title}>One Brand, Every Segment</h2>
    </header>
    <div className={styles.grid}>
      {CATEGORIES.map((cat) => (
        <article key={cat.id} className={styles.tile}>
          <div className={styles.iconWrap}>
            <img
              src={cat.image}
              alt=""
              className={styles.icon}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.tileBody}>
            <span className={styles.short}>{cat.short}</span>
            <h3 className={styles.name}>{cat.name}</h3>
            <p className={styles.description}>{cat.description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Categories;
