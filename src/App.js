import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouterFile from "./components/RouterFile";
import styles from "./styles.module.scss";

function App() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainContent}>
                <RouterFile />
            </main>
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}

export default App;
