import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthPage from "./pages/AuthPage";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Industries from "./pages/Industries";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* Ensure full height and flex column layout */}
        <div className="flex flex-col min-h-screen">
          {/* Navbar stays at the top */}
          <Navbar />

          {/* Main Content - takes up remaining space */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<AuthPage />} />
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
              <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
              <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
              <Route path="/industries" element={<ProtectedRoute><Industries /></ProtectedRoute>} />


              <Route path="*" element={<AuthPage />} />
            </Routes>
          </main>

          {/* Footer stays at the bottom */}
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
