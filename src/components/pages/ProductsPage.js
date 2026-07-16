import { Fragment } from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import PageHero from "../ui/PageHero";
import ProductGrid from "../layouts/Products/ProductGrid";
import useScrollControl from "../hooks/useScrollControl";
import usePageTop from "../hooks/usePageTop";
import { SCROLL_THRESHOLDS } from "../config/scroll";
import { SITE } from "../config/site";
import heroImage from "../../assets/pic/hero.jpg";

const ProductsPage = () => {
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
        kicker={SITE.productsPage.kicker}
        title={SITE.productsPage.title}
        focal="center 60%"
      />
      <ProductGrid />
      <Footer />
    </Fragment>
  );
};

export default ProductsPage;
