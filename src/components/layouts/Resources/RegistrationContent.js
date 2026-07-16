import styles from "./RegistrationContent.module.css";
import { REGISTRATION } from "../../config/resources";

const RegistrationContent = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <p className={styles.intro}>{REGISTRATION.intro}</p>

      <div className={styles.grid}>
        <ol className={styles.steps}>
          {REGISTRATION.steps.map((step, i) => (
            <li key={i} className={styles.step}>
              <span className={styles.stepNum}>{i + 1}</span>
              <span className={styles.stepText}>{step}</span>
            </li>
          ))}
        </ol>

        <aside className={styles.cta}>
          <h2 className={styles.ctaTitle}>Register Online</h2>
          <p className={styles.ctaText}>
            Registration is handled through our secure partner portal. Have your DOT numbers
            ready and complete the form in just a few minutes.
          </p>
          <a
            className={styles.ctaButton}
            href={REGISTRATION.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Your Tires
          </a>
        </aside>
      </div>
    </div>
  </section>
);

export default RegistrationContent;
