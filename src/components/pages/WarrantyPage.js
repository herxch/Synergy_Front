import { Fragment } from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import PageHero from "../ui/PageHero";
import WarrantyContent from "../layouts/Resources/WarrantyContent";
import useScrollControl from "../hooks/useScrollControl";
import usePageTop from "../hooks/usePageTop";
import { SCROLL_THRESHOLDS } from "../config/scroll";
import { WARRANTY } from "../config/resources";
import heroImage from "../../assets/pic/hero.jpg";

const WarrantyPage = () => {
  const { navbarVisible } = useScrollControl(
    SCROLL_THRESHOLDS.inner.style,
    SCROLL_THRESHOLDS.inner.hide
  );
  usePageTop();

  return (
    <Fragment>
      <Navbar styleType="whitebg" visibility={navbarVisible ? "show" : "hide"} />
      <PageHero image={heroImage} kicker={WARRANTY.kicker} title={WARRANTY.title} focal="center" />
      <WarrantyContent data={WARRANTY} />
      <Footer />
    </Fragment>
  );
};

export default WarrantyPage;
