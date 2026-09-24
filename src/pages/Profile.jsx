import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import styles from "../styles.module.scss";

const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.user) {
            navigate("/login", { replace: true });
        }
    }, [auth.user, navigate]);

    return (
        <section className={styles.page}>
            <div className={styles.pageHeader}>
                <span className={styles.eyebrow}>Protected route</span>
                <h1>Your profile</h1>
                <p>Welcome back, {auth.user || "member"}.</p>
            </div>
            <article className={styles.pageCard}>
                <h2>Session active</h2>
                <p>Your authenticated account is available through the shared context provider.</p>
            </article>
        </section>
    );
};

export default Profile;
