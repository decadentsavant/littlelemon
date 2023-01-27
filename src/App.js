import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/tempWIPPages/AboutPage";
import MenuPage from "./pages/tempWIPPages/MenuPage";
import ReservationsPage from "./pages/reservationsPage/ReservationsPage";
import OrderOnlinePage from "./pages/tempWIPPages/OrderOnlinePage";
import LoginPage from "./pages/tempWIPPages/LoginPage";
// import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/reservations" element={<ReservationsPage />} />
                <Route path="/orderonline" element={<OrderOnlinePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            {/* <Footer /> */}
        </>
    );
}

export default App;
