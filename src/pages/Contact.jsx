import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center mt-15 pb-10 pt-5 md:p-6">
            <div className="w-[100%] max-w-4xl md:max-w-3xl text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-400 mb-6">
                    Contact Us
                </h1>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Have any questions or need support? Feel free to reach out to us. We’d love to hear from you!
                </p>

                {/* Contact Form */}
                <div className="mt-8 bg-gray-700 p-4 md:p-6 rounded-lg shadow-lg w-full">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        {/* Name Input */}
                        <div>
                            <label className="block text-green-400 text-left mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-green-400 focus:ring-green-400"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-green-400 text-left mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-green-400 focus:ring-green-400"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Message Input */}
                        <div>
                            <label className="block text-green-400 text-left mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-green-400 focus:ring-green-400"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-green-500 w-full sm:w-auto px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg sm:text-xl font-bold text-green-400">📍 Address</h2>
                        <p className="text-gray-300 mt-2 text-sm sm:text-base">
                            314, 3rd floor, Malad West, Mumbai, India
                        </p>
                    </div>
                    <div className="bg-gray-700 p-2 md:p-6 text-center rounded-lg shadow-lg">
                        <h2 className="text-lg sm:text-xl font-bold text-green-400">📧 Email</h2>
                        <p className="text-gray-300 mt-2 text-xs md:text-sm sm:text-base">support@shivamyadav.com</p>
                    </div>
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg sm:text-xl font-bold text-green-400">📞 Phone</h2>
                        <p className="text-gray-300 mt-2 text-sm sm:text-base">+91 7021244561</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
