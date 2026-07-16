import { useNavigate } from "react-router-dom";
import styles from "./ValueProps.module.css";
import { SITE } from "../../config/site";

const ValueProps = () => {
  const navigate = useNavigate();
  const { kicker, title, items } = SITE.valueProps;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.kicker}>{kicker}</span>
          <h2 className={styles.title}>{title}</h2>
        </header>
        <div className={styles.list}>
          {items.map((item, i) => (
            <article key={item.title} className={styles.item}>
              <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.cta}>
          <p className={styles.ctaText}>
            First-class technology, without the first-class price tag.
          </p>
          <button
            type="button"
            className={styles.ctaButton}
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
          >
            Become a Dealer
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
