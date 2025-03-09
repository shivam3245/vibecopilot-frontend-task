import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuth } from "../redux/store";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector(selectAuth);
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
