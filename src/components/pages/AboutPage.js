import { Fragment } from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import PageHero from "../ui/PageHero";
import AboutStory from "../layouts/About/AboutStory";
import useScrollControl from "../hooks/useScrollControl";
import usePageTop from "../hooks/usePageTop";
import { SCROLL_THRESHOLDS } from "../config/scroll";
import { SITE } from "../config/site";
import heroImage from "../../assets/pic/about-hero.jpg";

const AboutPage = () => {
  const { navbarVisible } = useScrollControl(
    SCROLL_THRESHOLDS.inner.style,
    SCROLL_THRESHOLDS.inner.hide
  );
  usePageTop();

  return (
    <Fragment>
      <Navbar styleType="whitebg" visibility={navbarVisible ? "show" : "hide"} />
      <PageHero
        image={heroImage}
        kicker={SITE.about.kicker}
        title={SITE.about.heroTitle}
        focal="center"
      />
      <AboutStory />
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
