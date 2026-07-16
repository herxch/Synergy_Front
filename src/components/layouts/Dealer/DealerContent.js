import { useNavigate } from "react-router-dom";
import styles from "./DealerContent.module.css";
import { DEALER } from "../../config/resources";
import { SITE } from "../../config/site";

const DealerContent = () => {
  const navigate = useNavigate();
  const go = (to) => {
    navigate(to);
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.intro}>{DEALER.intro}</p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.iconWrap} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h2 className={styles.cardTitle}>Looking for {SITE.shortName} tires?</h2>
            <p className={styles.cardText}>
              Tell us your location and what you're after — we'll point you to the nearest
              authorized dealer carrying the {SITE.shortName} line.
            </p>
            <button type="button" className={styles.primary} onClick={() => go("/contact")}>
              Request a Dealer
            </button>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrap} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l1-5h16l1 5" />
                <path d="M5 9v11h14V9" />
                <path d="M9 20v-6h6v6" />
              </svg>
            </div>
            <h2 className={styles.cardTitle}>Become a Dealer</h2>
            <p className={styles.cardText}>{DEALER.becomeDealer}</p>
            <button type="button" className={styles.ghost} onClick={() => go("/contact")}>
              New Dealer Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerContent;
