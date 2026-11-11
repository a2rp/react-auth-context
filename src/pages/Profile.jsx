import { useAuth } from "../util/auth";
import styles from "../styles.module.scss";

const Profile = () => {
    const auth = useAuth();
    return (
        <section className={styles.page}>
            <div className={styles.pageHeader}>
                <span className={styles.eyebrow}>Client-side protected route</span>
                <h1>Your profile</h1>
                <p>Welcome back, {auth.user || "member"}.</p>
            </div>
            <article className={styles.pageCard}>
                <h2>Demo session active</h2>
                <p>The sample identity is stored in browser local storage. No server validates this session.</p>
            </article>
        </section>
    );
};

export default Profile;
