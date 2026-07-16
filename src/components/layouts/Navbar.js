import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import ScrollToTopNavLink from "../ui/ScrollToTopNavLink";
import { NAV_LINKS } from "../config/navigation";
import { SITE } from "../config/site";
import logo from "../../assets/pic/logo.svg";

const BurgerIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="none"
    stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    {open ? (
      <>
        <line x1="5" y1="5" x2="19" y2="19" />
        <line x1="19" y1="5" x2="5" y2="19" />
      </>
    ) : (
      <>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </>
    )}
  </svg>
);

const Navbar = ({ styleType, visibility = "show" }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 960px)").matches) {
        setShowMobileMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  const getNavLinkClass = ({ isActive }) =>
    isActive ? `${styles.linkItem} ${styles.active}` : styles.linkItem;

  const getMobileNavLinkClass = ({ isActive }) => {
    const base = styles.mobileLinkItem;
    const activeState = isActive ? styles.active : "";
    const visibilityState = showMobileMenu
      ? styles.mobileLinkItemVisible
      : styles.mobileLinkItemHidden;
    return `${base} ${activeState} ${visibilityState}`;
  };

  const renderLinks = (isMobile = false) =>
    NAV_LINKS.filter((link) => !link.hideInNavbar).map((link) => {
      if (link.href) {
        const desktopClass = styles.linkItem;
        const mobileClass = `${styles.mobileLinkItem} ${
          showMobileMenu ? styles.mobileLinkItemVisible : styles.mobileLinkItemHidden
        }`;
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={isMobile ? mobileClass : desktopClass}
            onClick={() => isMobile && setShowMobileMenu(false)}
          >
            {link.name}
          </a>
        );
      }
      return (
        <ScrollToTopNavLink
          key={link.to}
          to={link.to}
          className={isMobile ? getMobileNavLinkClass : getNavLinkClass}
          onClick={() => isMobile && setShowMobileMenu(false)}
        >
          {link.name}
        </ScrollToTopNavLink>
      );
    });

  const logoClass = styles.logoImg;

  return (
    <nav className={`${styles.navbar} ${styles[styleType]} ${styles[visibility]}`}>
      <div className={styles.navContainer}>
        {!showMobileMenu && (
          <div className={styles.logo}>
            <ScrollToTopNavLink to="/" aria-label={`${SITE.name} home`}>
              <img src={logo} alt={`${SITE.name} logo`} className={logoClass} />
            </ScrollToTopNavLink>
          </div>
        )}

        <nav className={styles.links}>{renderLinks(false)}</nav>

        <button
          type="button"
          onClick={toggleMobileMenu}
          className={styles.mobileMenuButton}
          aria-label={showMobileMenu ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={showMobileMenu}
          aria-controls="mobile-nav"
        >
          <BurgerIcon open={showMobileMenu} />
        </button>

        <div
          id="mobile-nav"
          className={`${styles.mobileNavContainer} ${styles[styleType]} ${
            showMobileMenu
              ? styles.mobileNavContainerVisible
              : styles.mobileNavContainerHidden
          }`}
        >
          <nav className={styles.mobilelinks} aria-label="Mobile">
            {renderLinks(true)}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
