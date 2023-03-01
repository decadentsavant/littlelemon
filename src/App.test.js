import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./components/bookingForm/BookingForm";

test("sanity check", () => {
    expect(true).toBe(true);
});

test("renders the BookingForm", () => {
    render(<BookingForm />);
    const formElement = screen.getByTestId("form");
    expect(formElement).toBeInTheDocument();
});

test("renders the form button", () => {
    render(<BookingForm />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
});
