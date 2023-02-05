import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/tempWIPPages/AboutPage";
import MenuPage from "./pages/tempWIPPages/MenuPage";
import ReservationsPage from "./pages/reservationsPage/ReservationsPage";
import OrderOnlinePage from "./pages/tempWIPPages/OrderOnlinePage";
import LoginPage from "./pages/tempWIPPages/LoginPage";
import Footer from "./components/Footer";

function App() {
const [windowDimension, setWindowDimension] = useState(null);

useEffect(() => {
    setWindowDimension(window.innerWidth);
}, []);

useEffect(() => {
    function handleResize() {
        setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);

const isMobile = windowDimension <= 640;

    return (
        <>
            <Nav isMobile={isMobile} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/reservations" element={<ReservationsPage />} />
                <Route path="/orderonline" element={<OrderOnlinePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
