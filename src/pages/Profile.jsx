import React, { useEffect } from 'react'
import { useAuth } from '../util/auth'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const value = JSON.parse(window.localStorage.getItem("auth-user"));
        if (value === null) {
            navigate("/login");
        }
    }, []);

    return (
        <div>
            Welcome {auth.user}
        </div>
    )
}

export default Profile
