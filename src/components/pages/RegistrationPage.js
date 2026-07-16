import { Fragment } from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import PageHero from "../ui/PageHero";
import RegistrationContent from "../layouts/Resources/RegistrationContent";
import useScrollControl from "../hooks/useScrollControl";
import usePageTop from "../hooks/usePageTop";
import { SCROLL_THRESHOLDS } from "../config/scroll";
import { REGISTRATION } from "../config/resources";
import heroImage from "../../assets/pic/hero.jpg";

const RegistrationPage = () => {
  const { navbarVisible } = useScrollControl(
    SCROLL_THRESHOLDS.inner.style,
    SCROLL_THRESHOLDS.inner.hide
  );
  usePageTop();

  return (
    <Fragment>
      <Navbar styleType="whitebg" visibility={navbarVisible ? "show" : "hide"} />
      <PageHero image={heroImage} kicker={REGISTRATION.kicker} title={REGISTRATION.title} focal="center" />
      <RegistrationContent />
      <Footer />
    </Fragment>
  );
};

export default RegistrationPage;
