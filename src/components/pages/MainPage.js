import { Fragment } from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Hero from "../layouts/Main/Hero";
import Intro from "../layouts/Main/Intro";
import Categories from "../layouts/Main/Categories";
import ProductShowcase from "../layouts/Main/ProductShowcase";
import ValueProps from "../layouts/Main/ValueProps";
import useScrollControl from "../hooks/useScrollControl";
import usePageTop from "../hooks/usePageTop";
import { SCROLL_THRESHOLDS } from "../config/scroll";

const MainPage = () => {
  const { scrolled, navbarVisible } = useScrollControl(
    SCROLL_THRESHOLDS.home.style,
    SCROLL_THRESHOLDS.home.hide
  );
  usePageTop();

  return (
    <Fragment>
      <Navbar
        styleType={scrolled ? "whitebg" : "blackbg"}
        visibility={navbarVisible ? "show" : "hide"}
      />
      <Hero />
      <Intro />
      <Categories />
      <ProductShowcase count={3} />
      <ValueProps />
      <Footer />
    </Fragment>
  );
};

export default MainPage;
