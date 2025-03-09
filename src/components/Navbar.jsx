import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";
import { Menu, X, User } from "lucide-react";

const getUserNameFromEmail = (email) => {
    return email ? email.split("@")[0] : "User";
};

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const user = useSelector((state) => JSON.parse(localStorage.getItem("user")));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        setModalOpen(false);
        navigate("/");
    };

    return (
        <>
            <nav className="bg-black bg-opacity-90 backdrop-blur-lg shadow-md p-4 text-white flex justify-between items-center fixed top-0 left-0 w-full z-50">
                <h1 className="text-lg md:text-2xl font-extrabold text-green-400">VIBECOPILOT.AI</h1>

                <ul className="hidden md:flex space-x-6 text-sm md:text-lg font-semibold">
                    {user && (
                        <>
                            <li><Link to="/home" className="hover:text-green-400 transition duration-300">Home</Link></li>
                            <li><Link to="/about" className="hover:text-green-400 transition duration-300">About</Link></li>
                            <li><Link to="/contact" className="hover:text-green-400 transition duration-300">Contact</Link></li>
                            <li><Link to="/services" className="hover:text-green-400 transition duration-300">Services</Link></li>
                            <li><Link to="/industries" className="hover:text-green-400 transition duration-300">Industries</Link></li>

                        </>
                    )}
                </ul>

                <div className="flex items-center space-x-4">
                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setModalOpen(!isModalOpen)}
                                className="flex items-center space-x-2 hover:text-green-400 transition duration-300">
                                <User size={20} className="text-green-400" />
                                <span className="hidden md:block text-sm md:text-base font-medium">Welcome, {getUserNameFromEmail(user.email)}</span>
                            </button>
                            {isModalOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-gray-900 text-white shadow-lg rounded-lg p-2 border border-gray-700">
                                    <p className="p-2 border-b border-gray-700 font-semibold text-sm md:text-base">Hello, {getUserNameFromEmail(user.email)}!</p>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full p-2 text-left hover:bg-gray-800 rounded font-medium transition duration-300 text-sm md:text-base">
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>

                <button className="md:hidden text-green-400" onClick={() => setSidebarOpen(true)}>
                    <Menu size={24} />
                </button>
            </nav>

            {isSidebarOpen && (
                <aside className={`fixed top-15 right-0 h-auto max-h-[80vh] w-64 bg-black bg-opacity-90 flex flex-col items-center p-6 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <button className="self-end mb-4 text-white" onClick={() => setSidebarOpen(false)}>
                        <X size={28} />
                    </button>
                    <ul className="space-y-4 text-white text-sm md:text-lg font-semibold">
                        {user ? (
                            <>
                                <li><Link to="/home" onClick={() => setSidebarOpen(false)} className="hover:text-green-400 transition duration-300">Home</Link></li>
                                <li><Link to="/about" className="hover:text-green-400 transition duration-300">About</Link></li>
                                <li><Link to="/contact" className="hover:text-green-400 transition duration-300">Contact</Link></li>
                                <li><Link to="/services" className="hover:text-green-400 transition duration-300">Services</Link></li>
                                <li><Link to="/industries" className="hover:text-green-400 transition duration-300">Industries</Link></li>


                                <li>
                                    <button onClick={handleLogout} className="w-full text-left hover:text-red-400 transition duration-300">
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <h1>Welcome to <span className=" font-mono text-green-400">VibeCopilot.AI</span></h1>
                                <li><Link to="/" onClick={() => setSidebarOpen(false)} className="hover:text-green-400 transition duration-300">Login</Link></li>
                            </>
                        )}
                    </ul>
                </aside>
            )}

        </>
    );
};

export default Navbar;
