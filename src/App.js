import { useEffect, useState } from "react";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouterFile from "./components/RouterFile";
import styles from "./styles.module.scss";

function App() {
    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowGoTop(window.scrollY > 420);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainContent}>
                <RouterFile />
            </main>
            <Footer />
            {showGoTop && <button className={styles.goTopButton} type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top" title="Go to top"><KeyboardArrowUp /></button>}
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}

export default App;
