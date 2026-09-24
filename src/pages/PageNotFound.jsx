import { Link } from "react-router-dom";
import styles from "../styles.module.scss";

const PageNotFound = () => (
    <section className={styles.page}>
        <div className={styles.pageHeader}>
            <span className={styles.eyebrow}>404</span>
            <h1>Page not found</h1>
            <p>The page you requested is not part of this example.</p>
            <Link className={styles.primaryLink} to="/home">Return home</Link>
        </div>
    </section>
);

export default PageNotFound;
