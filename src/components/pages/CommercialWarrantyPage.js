import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import PageHero from "../ui/PageHero";
import WarrantyContent from "../layouts/Resources/WarrantyContent";
import useScrollControl from "../hooks/useScrollControl";
import usePageTop from "../hooks/usePageTop";
import { SCROLL_THRESHOLDS } from "../config/scroll";
import { COMMERCIAL_WARRANTY } from "../config/resources";
import heroImage from "../../assets/pic/hero.jpg";

const CommercialWarrantyPage = () => {
  const { navbarVisible } = useScrollControl(
    SCROLL_THRESHOLDS.inner.style,
    SCROLL_THRESHOLDS.inner.hide
  );
  usePageTop();

  // Sites without a commercial line simply redirect to the passenger warranty.
  if (!COMMERCIAL_WARRANTY) return <Navigate to="/warranty" replace />;

  return (
    <Fragment>
      <Navbar styleType="whitebg" visibility={navbarVisible ? "show" : "hide"} />
      <PageHero
        image={heroImage}
        kicker={COMMERCIAL_WARRANTY.kicker}
        title={COMMERCIAL_WARRANTY.title}
        focal="center"
      />
      <WarrantyContent data={COMMERCIAL_WARRANTY} />
      <Footer />
    </Fragment>
  );
};

export default CommercialWarrantyPage;
