import ScrollToTopNavLink from "../ui/ScrollToTopNavLink";
import styles from "./Footer.module.css";
import Logo from "../../assets/pic/logo.svg";
import { NAV_LINKS } from "../config/navigation";
import { SITE } from "../config/site";

const Social = () => (
  <div className={styles.social}>
    <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
      </svg>
    </a>
    <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z" />
      </svg>
    </a>
    <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.4.53A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.9.53 9.4.53 9.4.53s7.5 0 9.4-.53a3 3 0 0 0 2.1-2.12A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
      </svg>
    </a>
  </div>
);

const Footer = () => {
  const getNavLinkClassName = ({ isActive }) =>
    isActive ? `${styles.navItem} ${styles.active}` : styles.navItem;

  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <ScrollToTopNavLink to="/" className={styles.logoLink}>
          <img
            src={Logo}
            alt={SITE.name}
            className={styles.logo}
            loading="lazy"
            decoding="async"
          />
        </ScrollToTopNavLink>
      </div>

      <nav className={styles.nav} aria-label="Footer">
        {NAV_LINKS.filter((link) => !link.hideInFooter).map((link) => {
          const label = link.footerName || link.name;
          return link.href ? (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navItem}
            >
              {label}
            </a>
          ) : (
            <ScrollToTopNavLink key={link.to} to={link.to} className={getNavLinkClassName}>
              {label}
            </ScrollToTopNavLink>
          );
        })}
      </nav>

      <Social />

      <div className={styles.copyRight}>
        © {new Date().getFullYear()} {SITE.legalName} · {SITE.name}
      </div>
    </footer>
  );
};

export default Footer;
