const Services = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col mt-10 items-center justify-center py-10 px-6">
            <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-400 mb-6">
                    Our Services
                </h1>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    We offer a wide range of services to help you build and scale your business. From web development
                    to digital marketing, we've got you covered!
                </p>

                {/* Services List */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Service 1 */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
                        <h2 className="text-lg sm:text-xl font-bold text-green-400">💻 Web Development</h2>
                        <p className="text-gray-300 mt-2 text-center text-sm sm:text-base">
                            We build modern, scalable, and user-friendly websites tailored to your business needs.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
                        <h2 className="text-lg sm:text-xl font-bold text-green-400">📱 Mobile Apps</h2>
                        <p className="text-gray-300 mt-2 text-center text-sm sm:text-base">
                            Our mobile app solutions ensure smooth user experiences across iOS and Android platforms.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
                        <h2 className="text-lg sm:text-xl font-bold text-green-400">📊 Digital Marketing</h2>
                        <p className="text-gray-300 mt-2 text-center text-sm sm:text-base">
                            Drive traffic and boost conversions with our expert SEO, PPC, and social media strategies.
                        </p>
                    </div>

                    {/* Service 4 */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
                        <h2 className="text-lg sm:text-xl font-bold text-green-400">🛒 E-Commerce Solutions</h2>
                        <p className="text-gray-300 mt-2 text-center text-sm sm:text-base">
                            Launch and scale your online store with secure and high-performance e-commerce platforms.
                        </p>
                    </div>

                    {/* Service 5 */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
                        <h2 className="text-lg sm:text-xl font-bold text-green-400">☁️ Cloud Solutions</h2>
                        <p className="text-gray-300 mt-2 text-center text-sm sm:text-base">
                            Optimize and scale your business with AWS, Azure, and Google Cloud services.
                        </p>
                    </div>

                    {/* Service 6 */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
                        <h2 className="text-lg sm:text-xl font-bold text-green-400">🔐 Cybersecurity</h2>
                        <p className="text-gray-300 mt-2 text-center text-sm sm:text-base">
                            Protect your business with our robust security solutions and risk management strategies.
                        </p>
                    </div>
                </div>


                <div className="mt-10">
                    <button className="bg-green-500 w-full sm:w-auto px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
