const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-5xl text-center px-4 sm:px-6 lg:px-8 md:p-0 pt-15">
                <p className="text-2xl md:text-4xl font-extrabold text-green-400 mb-5 ">
                    About Us
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Welcome to our platform! We are a team of passionate developers, designers, and innovators
                    committed to building seamless and user-friendly applications. Our goal is to provide the best
                    solutions that simplify your workflow and enhance productivity.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-lg sm:text-xl font-bold text-green-400">🚀 Our Mission</h2>
                        <p className="text-gray-300 mt-2 text-sm sm:text-base">
                            To revolutionize technology by providing cutting-edge solutions that empower businesses
                            and individuals.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-lg sm:text-xl font-bold text-green-400">💡 Our Vision</h2>
                        <p className="text-gray-300 mt-2 text-sm sm:text-base">
                            To be a leading innovator in the digital world, crafting intuitive and powerful applications.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-lg sm:text-xl font-bold text-green-400">🌎 Our Values</h2>
                        <p className="text-gray-300 mt-2 text-sm sm:text-base">
                            Integrity, Innovation, and Excellence. We believe in delivering high-quality solutions with
                            transparency and dedication.
                        </p>
                    </div>
                </div>

                <div className="mt-10">
                    <button className="bg-green-500 w-full sm:w-auto px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all">
                        Learn More
                    </button>

                </div>
            </div>
        </div>
    );
};

export default About;
