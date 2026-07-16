import styles from "./AboutStory.module.css";
import { SITE } from "../../config/site";
import { CATEGORIES } from "../../config/categories";

const AboutStory = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <p className={styles.lead}>{SITE.about.lead}</p>

      <div className={styles.sections}>
        {SITE.about.sections.map((s) => (
          <article key={s.title} className={styles.block}>
            <h2 className={styles.blockTitle}>{s.title}</h2>
            <p className={styles.blockBody}>{s.body}</p>
          </article>
        ))}
      </div>

      <div className={styles.segments}>
        <h2 className={styles.segmentsTitle}>Fitments We Cover</h2>
        <div className={styles.chips}>
          {CATEGORIES.map((c) => (
            <span key={c.id} className={styles.chip}>
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutStory;
