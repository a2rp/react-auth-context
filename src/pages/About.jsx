import styles from "../styles.module.scss";

const About = () => (
    <section className={styles.page}>
        <div className={styles.pageHeader}>
            <span className={styles.eyebrow}>About the project</span>
            <h1>A focused auth learning project.</h1>
            <p>This browser-only demo checks fixed sample credentials and stores a sample email in local storage. Its route guard teaches client-side routing but does not provide real authentication or protect private data.</p>
        </div>
        <article className={styles.pageCard}>
            <h2>What to explore</h2>
            <p>Try the public pages first, sign in with the sample credentials, then open the profile route and refresh the browser to see the stored session in action.</p>
        </article>
    </section>
);

export default About;
