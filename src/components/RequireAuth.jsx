import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../util/auth";

const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();
    if (!auth.user) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
};

export default RequireAuth;
