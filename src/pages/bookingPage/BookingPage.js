import BookingForm from "../../components/bookingForm/BookingForm";
import "./ReservationsPage.css";

function BookingPage({ availableTimes, setAvailableTimes, submitForm}) {
    return (
        <div style={{ paddingBottom: "5vh" }}>
            <h1 className="display-title">Reservations Page</h1>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm}/>
        </div>
    );
}

export default BookingPage;
