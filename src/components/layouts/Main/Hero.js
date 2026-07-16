import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";
import Button from "../../ui/Button";
import { SITE } from "../../config/site";

const Hero = () => {
  const navigate = useNavigate();
  const { kicker, titleLines, accentLineIndex, subtitle } = SITE.hero;

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.inner}>
        <span className={styles.kicker}>{kicker}</span>
        <h1 className={styles.title}>
          {titleLines.map((line, i) => (
            <span
              key={line}
              className={i === accentLineIndex ? styles.titleAccent : undefined}
            >
              {line}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>
          <Button
            text="Explore Products"
            href="/products"
            newWindow={false}
            onClick={() => {
              navigate("/products");
              window.scrollTo(0, 0);
            }}
          />
          <a className={styles.ghost} href="/dealers"
            onClick={(e) => { e.preventDefault(); navigate("/dealers"); window.scrollTo(0, 0); }}>
            Find a Dealer
          </a>
        </div>
        <span className={styles.accentBar} aria-hidden="true" />
      </div>
      <div className={styles.scrollHint} aria-hidden="true">
        <span>SCROLL</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
};

export default Hero;
