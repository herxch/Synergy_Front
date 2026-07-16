import styles from "./TireIQContent.module.css";
import { TIRE_IQ } from "../../config/resources";

const TireIQContent = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <p className={styles.intro}>{TIRE_IQ.intro}</p>

      <div className={styles.grid}>
        {TIRE_IQ.topics.map((topic, i) => (
          <article key={topic.title} className={styles.card}>
            <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
            <h2 className={styles.cardTitle}>{topic.title}</h2>
            <p className={styles.cardBody}>{topic.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TireIQContent;
