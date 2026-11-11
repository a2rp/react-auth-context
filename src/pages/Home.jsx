import styles from "../styles.module.scss";

const Home = () => (
    <section className={styles.page}>
        <div className={styles.pageHeader}>
            <span className={styles.eyebrow}>React authentication demo</span>
            <h1>Context-based auth with protected routes.</h1>
            <p>Explore a browser-only mock login that keeps demo session state in context and protects a sample page with a client-side route guard.</p>
        </div>
        <div className={styles.featureGrid}>
            <article className={styles.featureCard}><h2>Shared session</h2><p>Authentication state is available across the app through a focused context provider.</p></article>
            <article className={styles.featureCard}><h2>Protected profile</h2><p>Visitors without a demo session are redirected to sign in before the sample profile is shown.</p></article>
            <article className={styles.featureCard}><h2>Clear navigation</h2><p>Responsive navigation keeps the main routes easy to reach on desktop and mobile.</p></article>
        </div>
    </section>
);

export default Home;
