import { Fragment } from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import PageHero from "../ui/PageHero";
import TireIQContent from "../layouts/Resources/TireIQContent";
import useScrollControl from "../hooks/useScrollControl";
import usePageTop from "../hooks/usePageTop";
import { SCROLL_THRESHOLDS } from "../config/scroll";
import { TIRE_IQ } from "../config/resources";
import heroImage from "../../assets/pic/hero.jpg";

const TireIQPage = () => {
  const { navbarVisible } = useScrollControl(
    SCROLL_THRESHOLDS.inner.style,
    SCROLL_THRESHOLDS.inner.hide
  );
  usePageTop();

  return (
    <Fragment>
      <Navbar styleType="whitebg" visibility={navbarVisible ? "show" : "hide"} />
      <PageHero image={heroImage} kicker={TIRE_IQ.kicker} title={TIRE_IQ.title} focal="center 60%" />
      <TireIQContent />
      <Footer />
    </Fragment>
  );
};

export default TireIQPage;
