import styles from "./ProductGrid.module.css";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../../config/products";
import { SITE } from "../../config/site";

const ProductGrid = () => {
  const groups = SITE.productsPage.groups;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.intro}>{SITE.productsPage.intro}</p>

        {groups.map((group) => {
          const items = PRODUCTS.filter((p) => p.group === group.id);
          if (!items.length) return null;
          return (
            <div key={group.id} className={styles.group}>
              {groups.length > 1 && (
                <header className={styles.groupHeader}>
                  <h2 className={styles.groupTitle}>{group.label}</h2>
                  <span className={styles.groupCount}>{items.length} patterns</span>
                </header>
              )}
              <div className={styles.grid}>
                {items.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductGrid;
