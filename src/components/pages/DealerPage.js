import { Fragment } from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import PageHero from "../ui/PageHero";
import DealerContent from "../layouts/Dealer/DealerContent";
import useScrollControl from "../hooks/useScrollControl";
import usePageTop from "../hooks/usePageTop";
import { SCROLL_THRESHOLDS } from "../config/scroll";
import { DEALER } from "../config/resources";
import heroImage from "../../assets/pic/hero.jpg";

const DealerPage = () => {
  const { navbarVisible } = useScrollControl(
    SCROLL_THRESHOLDS.inner.style,
    SCROLL_THRESHOLDS.inner.hide
  );
  usePageTop();

  return (
    <Fragment>
      <Navbar styleType="whitebg" visibility={navbarVisible ? "show" : "hide"} />
      <PageHero image={heroImage} kicker={DEALER.kicker} title={DEALER.title} focal="center 60%" />
      <DealerContent />
      <Footer />
    </Fragment>
  );
};

export default DealerPage;
