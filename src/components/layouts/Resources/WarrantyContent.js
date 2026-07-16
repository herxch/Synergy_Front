import styles from "./WarrantyContent.module.css";

const WarrantyContent = ({ data }) => {
  if (!data) return null;
  const table = data.table;
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.intro}>{data.intro}</p>

        {table && (
          <div className={styles.tableBlock}>
            <h2 className={styles.blockTitle}>{table.title}</h2>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    {table.headers.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {table.note && <p className={styles.note}>{table.note}</p>}
          </div>
        )}

        <div className={styles.sections}>
          {data.sections.map((s) => (
            <article key={s.title} className={styles.block}>
              <h2 className={styles.blockTitle}>{s.title}</h2>
              <p className={styles.blockBody}>{s.body}</p>
            </article>
          ))}
        </div>

        <p className={styles.disclaimer}>
          This summary is provided for convenience. The full written limited warranty that
          accompanies your tires governs all claims.
        </p>
      </div>
    </section>
  );
};

export default WarrantyContent;
