import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectAuth } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectAuth);
    const users = useSelector(state => state.auth.users);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home");
        }
    }, [isAuthenticated, navigate]);

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleLogin = () => {
        setError("");

        if (!email || !password) {
            setError("⚠️ Email and password are required.");
            return;
        }
        if (!validateEmail(email)) {
            setError("❌ Invalid email format.");
            return;
        }

        const userExists = users.find(user => user.email === email);

        if (!userExists) {
            setError("🚫 Email not found. Please register first.");
            return;
        }
        if (userExists.password !== password) {
            setError("🔑 Incorrect password. Try again.");
            return;
        }

        dispatch(loginUser({ email, password }));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6 animate-fade-in">
            <div className="bg-white text-black bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg w-full max-w-md">
                <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6 text-center transition-all">Login</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 mb-3 rounded-lg bg-gray-300 bg-opacity-20 text-black placeholder-black outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm md:text-base" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mb-3 rounded-lg bg-gray-300 bg-opacity-20 text-black placeholder-black outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm md:text-base" />
                {error && <p className="text-red-400 text-center mb-3 animate-shake">{error}</p>}
                <button onClick={handleLogin} className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all text-sm md:text-lg">Login</button>
                <p className="mt-4 text-black text-center text-sm md:text-base">New user? <a href="/register" className="text-blue-800 hover:underline transition-all">Register</a></p>
            </div>
        </div>
    );
};

export default Login;
