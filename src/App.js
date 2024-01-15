import Header from "./components/Header";
import RouterFile from "./components/RouterFile";
import styles from "./styles.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
    return (
        <div className={styles.container}>
            <Header />
            <div style={{ padding: "15px" }}>
                <RouterFile />
            </div>

            <ToastContainer />
        </div>
    );
}

export default App;
