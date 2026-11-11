import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import styles from "../styles.module.scss";

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const returnTo = location.state?.from?.pathname || "/profile";
    const [email, setEmail] = useState("user1@mail.com");
    const [password, setPassword] = useState("P@$$w0rd");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        if (auth.user) {
            navigate(returnTo, { replace: true });
        }
    }, [auth.user, navigate, returnTo]);

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setEmailError(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email address.");
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        setPasswordError(value.length >= 8 ? "" : "Use at least 8 characters.");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email !== "user1@mail.com" || password !== "P@$$w0rd") {
            toast.error("Use the sample credentials shown in the form.");
            return;
        }

        auth.login(email.trim());
        navigate(returnTo, { replace: true });
    };

    return (
        <section className={styles.authCard}>
            <span className={styles.eyebrow}>Browser-only demo</span>
            <h1>Sign in</h1>
            <p>This page checks sample credentials in the browser and stores the sample email in local storage. It is not production authentication.</p>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="email"
                    label="Email"
                    fullWidth
                    size="small"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    error={Boolean(emailError)}
                    helperText={emailError ? <span className={styles.helper}><InfoIcon fontSize="small" />{emailError}</span> : ""}
                    autoComplete="email"
                />
                <TextField
                    type="password"
                    label="Password"
                    fullWidth
                    size="small"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    inputProps={{ minLength: 8 }}
                    error={Boolean(passwordError)}
                    helperText={passwordError ? <span className={styles.helper}><InfoIcon fontSize="small" />{passwordError}</span> : ""}
                    autoComplete="current-password"
                />
                <Button type="submit" variant="contained">
                    Sign in
                </Button>
            </form>
            <small>Sample login: user1@mail.com / P@$$w0rd. This account is not backed by a server.</small>
        </section>
    );
};

export default Login;
