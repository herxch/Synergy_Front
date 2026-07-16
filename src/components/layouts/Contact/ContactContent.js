import styles from "./ContactContent.module.css";
import ContactForm from "./ContactForm";
import { SITE } from "../../config/site";

const ContactContent = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.info}>
        <span className={styles.kicker}>Get in Touch</span>
        <h2 className={styles.title}>Let's Talk Tires</h2>
        <p className={styles.blurb}>{SITE.contact.blurb}</p>

        <ul className={styles.reasons}>
          {SITE.contact.categories.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <div className={styles.direct}>
          <span className={styles.directLabel}>Email</span>
          <a className={styles.directLink} href={`mailto:info@${SITE.domain}`}>
            info@{SITE.domain}
          </a>
        </div>

        <div className={styles.socialRow}>
          <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer">X / Twitter</a>
          <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>

      <ContactForm />
    </div>
  </section>
);

export default ContactContent;
