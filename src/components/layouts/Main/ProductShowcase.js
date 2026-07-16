import { useNavigate } from "react-router-dom";
import styles from "./ProductShowcase.module.css";
import ProductCard from "../Products/ProductCard";
import Button from "../../ui/Button";
import { PRODUCTS } from "../../config/products";

const ProductShowcase = ({ count = 3 }) => {
  const navigate = useNavigate();
  const featured = PRODUCTS.slice(0, count);

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div>
          <span className={styles.kicker}>The Line-Up</span>
          <h2 className={styles.title}>Featured Tires</h2>
        </div>
        <Button
          text="View All Products"
          href="/products"
          newWindow={false}
          onClick={() => {
            navigate("/products");
            window.scrollTo(0, 0);
          }}
        />
      </header>
      <div className={styles.grid}>
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
