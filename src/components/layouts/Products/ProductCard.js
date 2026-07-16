import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const onClick = () => window.scrollTo(0, 0);
  return (
    <NavLink
      to={`/products/${product.slug}`}
      className={styles.card}
      onClick={onClick}
      aria-label={`${product.name} details`}
    >
      <div className={styles.media}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.tags}>
          {product.categories.map((c) => (
            <span key={c} className={styles.tag}>
              {c}
            </span>
          ))}
        </div>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.summary}>{product.summary}</p>
        <span className={styles.cta}>
          View Tire
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </NavLink>
  );
};

export default ProductCard;
