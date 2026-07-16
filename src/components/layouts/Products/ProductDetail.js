import { NavLink } from "react-router-dom";
import styles from "./ProductDetail.module.css";

const RATING_LEVEL = { Good: 1, Better: 2, Best: 3 };

const PerformanceBar = ({ rating }) => {
  const level = RATING_LEVEL[rating] || 0;
  return (
    <div className={styles.perfBar} aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`${styles.perfSegment} ${n <= level ? styles.perfOn : ""}`}
        />
      ))}
    </div>
  );
};

const ProductDetail = ({ product }) => {
  const hasPerf = product.performance?.some((p) => p.rating);
  const hasFeatures =
    (product.technology && product.technology.length) ||
    (product.benefits && product.benefits.length);

  return (
    <article className={styles.wrap}>
      {/* Top: gallery + summary */}
      <div className={styles.top}>
        <div className={styles.mediaCol}>
          <div className={styles.media}>
            <img src={product.image} alt={product.name} className={styles.image} />
          </div>
        </div>

        <div className={styles.summaryCol}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <NavLink to="/products" onClick={() => window.scrollTo(0, 0)}>
              Products
            </NavLink>
            <span aria-hidden="true">/</span>
            <span>{product.name}</span>
          </nav>

          <div className={styles.tags}>
            {product.categories.map((c) => (
              <span key={c} className={styles.tag}>
                {c}
              </span>
            ))}
          </div>

          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.summary}>{product.summary}</p>

          {product.keySpecs?.length > 0 && (
            <ul className={styles.keySpecs}>
              {product.keySpecs.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          )}

          {hasPerf && (
            <div className={styles.performance}>
              {product.performance.map((p) => (
                <div key={p.label} className={styles.perfRow}>
                  <span className={styles.perfLabel}>{p.label}</span>
                  <PerformanceBar rating={p.rating} />
                  <span className={styles.perfValue}>{p.rating || "—"}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Features */}
      {hasFeatures && (
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Tire Attributes</h2>
          <div className={styles.featureCols}>
            {product.technology?.length > 0 && (
              <div>
                <h3 className={styles.featureHead}>Technology</h3>
                <ul className={styles.featureList}>
                  {product.technology.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.benefits?.length > 0 && (
              <div>
                <h3 className={styles.featureHead}>Benefits</h3>
                <ul className={styles.featureList}>
                  {product.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Warranty */}
      {product.warrantyText && (
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Warranty</h2>
          {product.warrantyTitle && (
            <h3 className={styles.warrantyName}>{product.warrantyTitle}</h3>
          )}
          <p className={styles.warrantyText}>{product.warrantyText}</p>
          <NavLink
            to={product.group === "commercial" ? "/commercial-warranty" : "/warranty"}
            className={styles.warrantyLink}
            onClick={() => window.scrollTo(0, 0)}
          >
            View full warranty details →
          </NavLink>
        </section>
      )}

      {/* Full specs */}
      {product.specRows?.length > 0 && (
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Full Specifications</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {product.specHeaders.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.specRows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} data-label={product.specHeaders[j]}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </article>
  );
};

export default ProductDetail;
