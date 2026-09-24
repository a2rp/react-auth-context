import styles from "../styles.module.scss";

const About = () => (
    <section className={styles.page}>
        <div className={styles.pageHeader}>
            <span className={styles.eyebrow}>About the project</span>
            <h1>A focused auth learning project.</h1>
            <p>This example demonstrates context providers, local session persistence, React Router navigation and protected routes without adding unnecessary layers.</p>
        </div>
        <article className={styles.pageCard}>
            <h2>What to explore</h2>
            <p>Try the public pages first, sign in with the sample credentials, then open the profile route and refresh the browser to see the stored session in action.</p>
        </article>
    </section>
);

export default About;
