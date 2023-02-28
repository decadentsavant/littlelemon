import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./components/bookingForm/BookingForm";

test("Sanity check", () => {
    expect(true).toBe(true);
});

test("renders the BookingForm", () => {
    render(<BookingForm />);
    const formElement = screen.getByTestId("form");
    expect(formElement).toBeInTheDocument();
});
