import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => state.auth.users);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validatePassword = (password) =>
        password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);

    const handleRegister = () => {
        setError("");

        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }
        if (!validateEmail(email)) {
            setError("Invalid email format.");
            return;
        }
        if (!validatePassword(password)) {
            setError("Password must be at least 6 characters, include uppercase, lowercase, and a number.");
            return;
        }
        if (users.find(user => user.email === email)) {
            setError("User already registered with this email.");
            return;
        }

        dispatch(registerUser({ email, password }));
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600 p-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold text-black mb-6 text-center">Register</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 mb-3 rounded-lg bg-gray-300 bg-opacity-20 text-black placeholder-black outline-none focus:ring-2 focus:ring-green-300" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mb-3 rounded-lg bg-gray-300 bg-opacity-20 text-black placeholder-black outline-none focus:ring-2 focus:ring-green-300" />
                {error && <p className="text-red-400 text-center mb-3">{error}</p>}
                <button onClick={handleRegister} className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all">Register</button>
                <p className="mt-4 text-black text-center">Already have an account? <a href="/login" className="text-green-700 hover:underline">Login</a></p>
            </div>
        </div>
    );
};

export default Register;
