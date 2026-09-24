import styles from "../styles.module.scss";

const Products = () => (
    <section className={styles.page}>
        <div className={styles.pageHeader}>
            <span className={styles.eyebrow}>Example content</span>
            <h1>Products</h1>
            <p>A public route that can be replaced with a real catalogue or dashboard section as the application grows.</p>
        </div>
        <div className={styles.featureGrid}>
            {["Starter workspace", "Protected account", "Reusable route guard"].map((item) => (
                <article className={styles.featureCard} key={item}>
                    <h2>{item}</h2>
                    <p>Use this placeholder card to plan the next feature while keeping the current route structure intact.</p>
                </article>
            ))}
        </div>
    </section>
);

export default Products;
