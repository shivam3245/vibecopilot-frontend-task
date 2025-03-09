import Footer from "../components/Footer";


const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Main content */}
            <main className="flex-grow">{children}</main>

            {/* Footer at the bottom */}
            <Footer />
        </div>
    );
};

export default Layout;
