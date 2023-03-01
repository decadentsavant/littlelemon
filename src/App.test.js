import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./components/bookingForm/BookingForm";

test("sanity check", () => {
    expect(true).toBe(true);
});

// not sure why this fails
// BookingForm won't render. Not sure why. Please help.

test("renders the BookingForm", () => {
    render(<BookingForm />);
    const formElement = screen.getByTestId("form");
    expect(formElement).toBeInTheDocument();
});

// same...
test("renders the form button", () => {
    render(<BookingForm />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
});

