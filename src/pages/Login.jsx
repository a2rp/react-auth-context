import { useEffect, useState } from "react";
import { Button, CircularProgress, TextField } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import styles from "../styles.module.scss";

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("user1@mail.com");
    const [password, setPassword] = useState("P@$$w0rd");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        if (auth.user) {
            navigate("/profile", { replace: true });
        }
    }, [auth.user, navigate]);

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

        setIsLoading(true);
        auth.login(email);
        navigate("/profile", { replace: true });
    };

    return (
        <section className={styles.authCard}>
            <span className={styles.eyebrow}>Secure entry</span>
            <h1>Sign in</h1>
            <p>Use the sample account to open the protected profile route.</p>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="email"
                    label="Email"
                    fullWidth
                    size="small"
                    value={email}
                    onChange={handleEmailChange}
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
                    error={Boolean(passwordError)}
                    helperText={passwordError ? <span className={styles.helper}><InfoIcon fontSize="small" />{passwordError}</span> : ""}
                    autoComplete="current-password"
                />
                <Button type="submit" variant="contained" disabled={isLoading}>
                    {isLoading ? <CircularProgress size={20} color="inherit" /> : "Sign in"}
                </Button>
            </form>
            <small>Sample: user1@mail.com / P@$$w0rd</small>
        </section>
    );
};

export default Login;
