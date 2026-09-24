import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../util/auth";
import styles from "../assets/styles/header.module.scss";

const Header = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [dateTime, setDateTime] = useState(new Date());
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const timer = window.setInterval(() => setDateTime(new Date()), 1000);
        return () => window.clearInterval(timer);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    const handleLogout = () => {
        Swal.fire({
            title: "Sign out of this session?",
            showDenyButton: true,
            confirmButtonText: "Sign out",
            denyButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                auth.logout();
                closeMenu();
                navigate("/login");
            }
        });
    };

    return (
        <header className={styles.container}>
            <div className={styles.topSection}>
                <NavLink to="/home" className={styles.brand} onClick={closeMenu}>
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Ashish Ranjan logo" />
                    <span>Auth Context</span>
                </NavLink>
                <time dateTime={dateTime.toISOString()}>{dateTime.toLocaleString()}</time>
                <button
                    type="button"
                    className={styles.menuButton}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            <nav className={`${styles.navlinksContainer} ${menuOpen ? styles.open : ""}`} aria-label="Primary navigation">
                {[
                    ["/home", "Home"],
                    ["/about", "About"],
                    ["/products", "Products"],
                    ["/profile", "Profile"],
                ].map(([path, label]) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) => `${styles.navlink} ${isActive ? styles.active : ""}`}
                        onClick={closeMenu}
                    >
                        {label}
                    </NavLink>
                ))}

                {!auth.user ? (
                    <NavLink
                        to="/login"
                        className={({ isActive }) => `${styles.navlink} ${styles.loginLink} ${isActive ? styles.active : ""}`}
                        onClick={closeMenu}
                    >
                        Login
                    </NavLink>
                ) : (
                    <Button className={styles.logoutButton} onClick={handleLogout} color="error" variant="contained">
                        Logout
                    </Button>
                )}
            </nav>
        </header>
    );
};

export default Header;
