import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createContext, useReducer, useState } from "react";
import Nav from "./components/navigation/Nav";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/tempWIPPages/AboutPage";
import MenuPage from "./pages/tempWIPPages/MenuPage";
import ReservationsPage from "./pages/bookingPage/BookingPage";
import OrderOnlinePage from "./pages/tempWIPPages/OrderOnlinePage";
import LoginPage from "./pages/tempWIPPages/LoginPage";
import Footer from "./components/navigation/Footer";
import BackDrop from "./components/navigation/backdrop/BackDrop";
import SideDrawer from "./components/navigation/sideMenu/SideDrawer";
import { fetchAPI, submitAPI } from "./mockServer/mockServer"

function App() {
    function initializeTimes() {
        const times = {
            times: [...fetchAPI(new Date())]
        };
        return times;
    }

    function reducer(state, action) {
        const newBookingDate = action.setBookingDate;
        const newTimes = fetchAPI(newBookingDate);
        return { times: [...newTimes] };
    }

    function submitForm(formData) {
        const success = submitAPI(formData);
        if (success) {
            alert("Success!")
        }
    }

    const initialState = initializeTimes();
    const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState);

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
                <Route path="/reservations" element={<ReservationsPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm} />} />
                <Route path="/orderonline" element={<OrderOnlinePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>

            <Footer />
        </div>
    );
}

export const CloseNavFunctionContext = createContext(null);
export default App;
