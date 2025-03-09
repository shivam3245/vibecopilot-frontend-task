import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, selectAuth } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const AuthPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectAuth);
    const users = useSelector((state) => state.auth.users);

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home");
        }
    }, [isAuthenticated, navigate]);

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validatePassword = (password) =>
        password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);

    const handleSubmit = () => {
        setError("");
        if (!email || !password) {
            setError("⚠️ Email and password are required.");
            return;
        }
        if (!validateEmail(email)) {
            setError("❌ Invalid email format.");
            return;
        }

        if (isLogin) {
            const userExists = users.find((user) => user.email === email);
            if (!userExists) {
                setError("🚫 Email not found. Please register first.");
                return;
            }
            if (userExists.password !== password) {
                setError("🔑 Incorrect password. Try again.");
                return;
            }
            dispatch(loginUser({ email, password }));
        } else {
            if (!validatePassword(password)) {
                setError("⚠️ Password must be at least 6 characters, include uppercase, lowercase, and a number.");
                return;
            }
            if (password !== confirmPassword) {
                setError("❌ Passwords do not match. Please try again.");
                return;
            }
            if (users.find((user) => user.email === email)) {
                setError("🚫 User already registered with this email.");
                return;
            }
            dispatch(registerUser({ email, password }));
            setIsLogin(true);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-gray-600 p-6">

            <div className="relative w-full max-w-md bg-green-100 bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg p-6 overflow-hidden flex flex-row">

                <AnimatePresence mode="wait">
                    {isLogin ? (
                        <motion.div
                            key="login"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="w-full flex flex-col space-y-4"
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold text-black text-center">Login</h2>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 rounded-lg bg-gray-300 bg-opacity-20 text-black placeholder-black outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm md:text-base"
                            />
                            <div className="relative w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-3 pr-16 rounded-lg bg-gray-300 bg-opacity-20 text-black placeholder-black outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm md:text-base"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 text-sm text-gray-700 hover:text-black transition"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {error && <p className="text-red-400 text-center">{error}</p>}
                            <button onClick={handleSubmit} className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all text-sm md:text-lg">
                                Login
                            </button>
                            <p className="text-black text-center">
                                New user?{" "}
                                <span
                                    onClick={() => setIsLogin(false)}
                                    className="text-blue-600 hover:underline font-bold transition-all cursor-pointer"
                                >
                                    Sign up
                                </span>
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="register"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.4 }}
                            className="w-full flex flex-col space-y-4"
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold text-black text-center">Sign Up</h2>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 rounded-lg bg-gray-300 bg-opacity-20 text-black placeholder-black outline-none focus:ring-2 focus:ring-green-300 transition-all text-sm md:text-base"
                            />
                            <div className="relative w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-3 pr-16 rounded-lg bg-gray-300 bg-opacity-20 text-black placeholder-black outline-none focus:ring-2 focus:ring-green-300 transition-all text-sm md:text-base"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 text-sm text-gray-700 hover:text-black transition"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            <div className="relative w-full">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full p-3 pr-16 rounded-lg bg-gray-300 bg-opacity-20 text-black placeholder-black outline-none focus:ring-2 focus:ring-green-300 transition-all text-sm md:text-base"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-3 text-sm text-gray-700 hover:text-black transition"
                                >
                                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {error && <p className="text-red-400 text-center">{error}</p>}
                            <button onClick={handleSubmit} className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-800 transition-all text-sm md:text-lg">
                                Register
                            </button>
                            <p className="text-black text-center">
                                Already have an account?{" "}
                                <span
                                    onClick={() => setIsLogin(true)}
                                    className="text-green-600 hover:underline font-bold md:text-lg transition-all cursor-pointer"
                                >
                                    Login
                                </span>
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AuthPage;
