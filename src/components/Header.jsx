import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../util/auth';
import { Button } from '@mui/material';
import styles from "../assets/styles/header.module.scss";
import Swal from 'sweetalert2';


const Header = () => {

    const auth = useAuth();
    const navigate = useNavigate(null);

    const [dateTime, setDateTime] = useState(new Date().toISOString())
    const updateDateTime = () => {
        const date = new Date().toISOString();
        setDateTime(date);
    }
    useEffect(() => {
        const timeout = setTimeout(updateDateTime, 1000 * (1 / 60));
        return () => clearTimeout(timeout);
    }, [dateTime]);

    const handleLogout = () => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                auth.logout();
                navigate("/login");
            } else if (result.isDenied) {
                // don not logout
            }
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.topSection}>
                <div>a2rp: an Ashish Ranjan presentation</div>
                <div>{dateTime}</div>
            </div>

            <div className={styles.navlinksContainer}>
                <NavLink
                    to="/home"
                    className={styles.navlink}
                    style={({ isActive }) => (isActive ? { color: "orangered" } : { color: "#fff" })}
                >Home</NavLink>
                <NavLink
                    to="/about"
                    className={styles.navlink}
                    style={({ isActive }) => (isActive ? { color: "orangered" } : { color: "#fff" })}
                >About</NavLink>
                <NavLink
                    to="/products"
                    className={styles.navlink}
                    style={({ isActive }) => (isActive ? { color: "orangered" } : { color: "#fff" })}
                >Products</NavLink>
                <NavLink
                    to="/profile"
                    className={styles.navlink}
                    style={({ isActive }) => (isActive ? { color: "orangered" } : { color: "#fff" })}
                >Profile</NavLink>
                {!auth.user ? <>
                    <NavLink
                        to="/login"
                        className={styles.navlink}
                        style={({ isActive }) => (isActive ? { color: "orangered" } : { color: "#fff" })}
                    >Login</NavLink>
                </> : <>
                    <Button className={styles.navlink} onClick={handleLogout} color="error" variant="contained">Logout</Button>
                </>}
            </div>
        </div>
    )
}

export default Header

