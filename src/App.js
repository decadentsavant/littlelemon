import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import Nav from "./components/navigation/Nav";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/tempWIPPages/AboutPage";
import MenuPage from "./pages/tempWIPPages/MenuPage";
import ReservationsPage from "./pages/reservationsPage/ReservationsPage";
import OrderOnlinePage from "./pages/tempWIPPages/OrderOnlinePage";
import LoginPage from "./pages/tempWIPPages/LoginPage";
import Footer from "./components/Footer";
import BackDrop from "./components/navigation/backdrop/BackDrop";
import SideDrawer from "./components/navigation/sideMenu/SideDrawer";

function App() {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        console.log("clicked drawerToggle...");
        setSideDrawerOpen(!sideDrawerOpen);
    };
    const backDropClickHandler = () => {
        console.log("clicked backdropClickHandler...");
        setSideDrawerOpen(false);
    };

    return (
        <div style={{ height: "100%" }}>
            <CloseNavFunctionContext.Provider value={backDropClickHandler}>
                <Nav drawerToggleClickHandler={drawerToggleClickHandler} />
                <SideDrawer show={sideDrawerOpen} />
                {sideDrawerOpen ? (
                    <BackDrop click={backDropClickHandler} />
                ) : null}
            </CloseNavFunctionContext.Provider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/reservations" element={<ReservationsPage />} />
                <Route path="/orderonline" element={<OrderOnlinePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>

            <Footer />
        </div>
    );
}

export const CloseNavFunctionContext = createContext(null);
export default App;
