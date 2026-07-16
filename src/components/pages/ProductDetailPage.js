import { Fragment, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import ProductDetail from "../layouts/Products/ProductDetail";
import useScrollControl from "../hooks/useScrollControl";
import { SCROLL_THRESHOLDS } from "../config/scroll";
import { getProduct } from "../config/products";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = getProduct(slug);
  const { navbarVisible } = useScrollControl(
    SCROLL_THRESHOLDS.inner.style,
    SCROLL_THRESHOLDS.inner.hide
  );

  // Scroll to top whenever the product changes (same route component stays mounted).
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <Fragment>
      <Navbar styleType="whitebg" visibility={navbarVisible ? "show" : "hide"} />
      <ProductDetail product={product} />
      <Footer />
    </Fragment>
  );
};

export default ProductDetailPage;
