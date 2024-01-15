import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast } from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';
import InfoIcon from '@mui/icons-material/Info';
import { useAuth } from "../util/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("user1@mail.com");
    const [password, setPassword] = useState("P@$$w0rd");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordBoxType, setPasswordBoxType] = useState("password");

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!value.match(regex)) {
            setEmailError("Invalid email");
        } else {
            setEmailError("");
        }
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
        if (!value.match(regex)) {
            setPasswordError("Password - min. 8 and max. 10 chars, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character required");
        } else {
            setPasswordError("");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === "user1@mail.com" && password === "P@$$w0rd") {
            auth.login(email);
            navigate("/profile", { replace: true });
        } else {
            toast("Invalid credentails");
        }
    };

    useEffect(() => {
        const value = JSON.parse(window.localStorage.getItem("auth-user"));
        if (value !== null) {
            auth.login(window.localStorage.getItem("auth-user"));
            navigate("/profile");
        }
    }, []);

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="email"
                    sx={{ marginTop: "30px" }}
                    label="Username"
                    fullWidth
                    size="small"
                    value={email}
                    onChange={handleEmailChange}
                    error={emailError.length > 0}
                    helperText={emailError.length > 0
                        ? <span style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "15px"
                        }}>
                            <InfoIcon /> {emailError}
                        </span>
                        : ""}
                    autoComplete="new-password"
                    inputProps={{
                        autoComplete: "none",
                        form: {
                            autoComplete: 'off',
                        },
                    }}
                />

                <TextField
                    type="password"
                    sx={{ marginTop: "30px" }}
                    label="Password"
                    fullWidth
                    size="small"
                    value={password}
                    onChange={handlePasswordChange}
                    error={passwordError.length > 0}
                    helperText={passwordError.length > 0
                        ? <span style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "15px"
                        }}>
                            <InfoIcon /> {passwordError}
                        </span>
                        : ""}
                    autoComplete="new-password"
                    inputProps={{
                        autoComplete: "none",
                        form: {
                            autoComplete: 'off',
                        },
                    }}
                />

                <Button type="submit" variant="contained" disabled={isLoading} sx={{ marginTop: "30px" }}>
                    Submit {isLoading === true ? <CircularProgress /> : ""}
                </Button>
            </form>
        </div>
    )
}

export default Login
