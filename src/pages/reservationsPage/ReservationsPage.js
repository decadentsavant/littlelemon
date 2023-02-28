import BookingForm from "../../components/bookingForm/BookingForm";
import "./ReservationsPage.css";

function Reservations() {
    return (
        <div style={{ paddingBottom: "5vh" }}>
            <h1 className="display-title">Reservations Page</h1>
            <BookingForm />
        </div>
    );
}

export default Reservations;
