import { useNavigate } from "react-router-dom";
import styles from "./Intro.module.css";
import Button from "../../ui/Button";
import { SITE } from "../../config/site";
import image from "../../../assets/pic/about-hero.jpg";

const Intro = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <span className={styles.kicker}>{SITE.intro.kicker}</span>
          <h2 className={styles.title}>{SITE.intro.title}</h2>
          <p className={styles.paragraph}>{SITE.intro.paragraph}</p>
          <Button
            text="About the Brand"
            href="/about"
            newWindow={false}
            onClick={() => {
              navigate("/about");
              window.scrollTo(0, 0);
            }}
          />
        </div>
        <div className={styles.figure}>
          <span className={styles.frameCorner} aria-hidden="true" />
          <img
            src={image}
            alt={`${SITE.shortName} tires`}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
